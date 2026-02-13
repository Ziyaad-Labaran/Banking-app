import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import '../../styles/EditProfilePage.css';

const EditProfilePage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            fullName: 'Noreen Coolidge',
            email: 'noreencoolidge@gmail.com',
            phone: '+1 (555) 0123-4567',
            address: 'USA'
        }
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = React.useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const onSubmit = (data) => {
        setIsSaving(true);
        // Integrate image data if needed
        const profileData = { ...data, photo: selectedImage };

        setTimeout(() => {
            console.log('Profile updated:', profileData);
            setIsSaving(false);
            alert('Profile updated successfully!');
            navigate('/dashboard/settings');
        }, 1000);
    };

    return (
        <div className="edit-profile-page">
            <div className="header-nav">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <ArrowLeft size={24} />
                </button>
                <h1>Edit Profile</h1>
                <div style={{ width: 24 }}></div> {/* Spacer for centering */}
            </div>

            <div className="edit-avatar-section">
                <div className="avatar-preview">
                    {selectedImage ? (
                        <img
                            src={selectedImage}
                            alt="Profile"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                        />
                    ) : (
                        'TM'
                    )}
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                />
                <button type="button" onClick={triggerFileInput} className="change-photo-btn">
                    Change Photo
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="edit-form">
                <Input
                    label="Full Name"
                    {...register('fullName', { required: 'Full Name is required' })}
                    error={errors.fullName?.message}
                />

                <Input
                    label="Email Address"
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                    error={errors.email?.message}
                />

                <Input
                    label="Phone Number"
                    type="tel"
                    {...register('phone', { required: "Phone number is required" })}
                    error={errors.phone?.message}
                />

                <Input
                    label="Address"
                    {...register('address')}
                />

                <div className="form-actions-fixed">
                    <Button type="submit" variant="primary" disabled={isSaving}>
                        {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditProfilePage;

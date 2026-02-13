import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Image, Trash2, Check, Loader2 } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import '../../styles/EditProfilePage.css';

const FloatingInput = ({ label, id, value, onChange, type = 'text', ...props }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className={`floating-input-group ${focused || value ? 'active' : ''} ${focused ? 'focused' : ''}`}>
            <label htmlFor={id} className="floating-label">{label}</label>
            <input
                id={id}
                type={type}
                className="floating-input"
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                {...props}
            />
            <div className="input-indicator" />
        </div>
    );
};

const EditProfilePage = () => {
    const navigate = useNavigate();
    const { user, updateUser } = useUser();

    const [formData, setFormData] = useState(user);
    const [isSaving, setIsSaving] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [isDirty, setIsDirty] = useState(false);

    const fileInputRef = useRef(null);

    // Track dirty state
    useEffect(() => {
        const hasChanges =
            formData.fullName !== user.fullName ||
            formData.phone !== user.phone ||
            formData.jobTitle !== user.jobTitle ||
            formData.bio !== user.bio ||
            formData.avatar !== user.avatar;

        setIsDirty(hasChanges);
    }, [formData, user]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, avatar: reader.result }));
                setIsSheetOpen(false);
            };
            reader.readAsDataURL(file);
        }
    };

    const removePhoto = () => {
        setFormData(prev => ({ ...prev, avatar: null }));
        setIsSheetOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isDirty || isSaving) return;

        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            updateUser(formData);
            setIsSaving(false);
            setIsDirty(false);
            setShowToast(true);

            // Navigate back after toast
            setTimeout(() => {
                navigate('/dashboard/settings');
            }, 2000);
        }, 1500);
    };

    return (
        <div className={`edit-profile-page ${isSheetOpen ? 'sheet-active' : ''}`}>
            <div className="header-nav">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <ArrowLeft size={24} />
                </button>
                <h1>Edit Profile</h1>
                <div style={{ width: 24 }} />
            </div>

            <main className="edit-content">
                <div className="avatar-section">
                    <div className="avatar-preview-container">
                        <div className="avatar-circle">
                            {formData.avatar ? (
                                <img src={formData.avatar} alt="Profile Preview" />
                            ) : (
                                <span className="avatar-initials">
                                    {formData.fullName.split(' ').map(n => n[0]).join('')}
                                </span>
                            )}
                        </div>
                        <button
                            type="button"
                            className="camera-trigger"
                            onClick={() => setIsSheetOpen(true)}
                        >
                            <Camera size={20} />
                        </button>
                    </div>
                </div>

                <form className="profile-form" onSubmit={handleSubmit}>
                    <FloatingInput
                        id="fullName"
                        label="Full Name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                    />

                    <FloatingInput
                        id="jobTitle"
                        label="Job Title"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    />

                    <FloatingInput
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                    />

                    <div className={`floating-input-group textarea-group ${formData.bio ? 'active' : ''}`}>
                        <label className="floating-label">Bio</label>
                        <textarea
                            className="floating-input"
                            value={formData.bio}
                            onChange={(e) => handleInputChange('bio', e.target.value)}
                            rows={3}
                        />
                        <div className="input-indicator" />
                    </div>

                    <div className="form-submit-container">
                        <button
                            type="submit"
                            className={`save-btn ${isDirty ? 'active' : 'disabled'}`}
                            disabled={!isDirty || isSaving}
                        >
                            {isSaving ? (
                                <Loader2 className="spinner" size={20} />
                            ) : (
                                <>
                                    <Check size={20} />
                                    <span>Save Changes</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </main>

            {/* Photo Bottom Sheet */}
            {isSheetOpen && (
                <div className="bottom-sheet-overlay" onClick={() => setIsSheetOpen(false)}>
                    <div className="bottom-sheet" onClick={e => e.stopPropagation()}>
                        <div className="sheet-handle" />
                        <h2 className="sheet-title">Profile Photo</h2>
                        <div className="sheet-options">
                            <button className="sheet-option" onClick={() => fileInputRef.current.click()}>
                                <Camera size={22} className="option-icon" />
                                <span>Take Photo</span>
                            </button>
                            <button className="sheet-option" onClick={() => fileInputRef.current.click()}>
                                <Image size={22} className="option-icon" />
                                <span>Choose from Library</span>
                            </button>
                            <button className="sheet-option remove" onClick={removePhoto}>
                                <Trash2 size={22} className="option-icon" />
                                <span>Remove Current Photo</span>
                            </button>
                        </div>
                        <button className="sheet-cancel" onClick={() => setIsSheetOpen(false)}>Cancel</button>
                    </div>
                </div>
            )}

            <input
                type="file"
                ref={fileInputRef}
                className="hidden-input"
                accept="image/*"
                onChange={handleImageChange}
            />

            <Toast
                message="Profile updated successfully!"
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </div>
    );
};

export default EditProfilePage;

import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user_profile');
        return savedUser ? JSON.parse(savedUser) : {
            fullName: 'Noreen Coolidge',
            email: 'noreencoolidge@gmail.com',
            phone: '+1 (555) 0123-4567',
            jobTitle: 'Senior Financial Advisor',
            bio: 'Dedicated to helping individuals achieve financial freedom through strategic planning.',
            avatar: null
        };
    });

    const updateUser = (newData) => {
        setUser(prev => {
            const updated = { ...prev, ...newData };
            localStorage.setItem('user_profile', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

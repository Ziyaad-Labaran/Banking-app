import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('isLoggedIn') === 'true';
    });

    const login = (username, password) => {
        // Professional validation logic
        if (username === 'NCoolidge' && password === '@Noreen90') {
            setIsAuthenticated(true);
            sessionStorage.setItem('isLoggedIn', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('isLoggedIn');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

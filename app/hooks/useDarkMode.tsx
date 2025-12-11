'use client';
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);

        setIsDark(initialDark);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            // Remover clase del DOM y guardar preferencia
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]); 

    const toggleDarkMode = () => {
        setIsDark(prevIsDark => !prevIsDark);
    };

    return { isDark, toggleDarkMode };
};
import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import '../styles/LanguageSelector.css';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'zh', label: '中文' },
];

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(languages[0]);

    return (
        <div className="language-selector">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lang-btn"
                aria-expanded={isOpen}
            >
                <Globe size={16} />
                <span>{selected.label}</span>
                <ChevronDown size={14} className={`chevron ${isOpen ? 'open' : ''}`} />
            </button>

            {isOpen && (
                <div className="lang-menu">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setSelected(lang);
                                setIsOpen(false);
                            }}
                            className={`lang-option ${selected.code === lang.code ? 'active' : ''}`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;

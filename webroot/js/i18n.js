// i18n.js - Internationalization Module

const I18N = {
    currentLang: 'en',
    fallbackLang: 'en',
    strings: {},
    fallbackStrings: {},
    availableLanguages: [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' }
    ],

    // Initialize i18n system
    async init() {
        // Load saved preference or detect from browser
        const saved = localStorage.getItem('floppy_lang');
        if (saved && this.availableLanguages.some(l => l.code === saved)) {
            this.currentLang = saved;
        } else {
            // Try to detect from browser
            const browserLang = navigator.language.split('-')[0];
            if (this.availableLanguages.some(l => l.code === browserLang)) {
                this.currentLang = browserLang;
            }
        }

        // Always load fallback first
        await this.loadLanguage(this.fallbackLang, true);

        // Load current language if different from fallback
        if (this.currentLang !== this.fallbackLang) {
            await this.loadLanguage(this.currentLang, false);
        }

        this.applyTranslations();
    },

    // Load a language file
    async loadLanguage(code, isFallback = false) {
        try {
            const response = await fetch(`lang/${code}.json`);
            if (!response.ok) throw new Error(`Failed to load ${code}`);
            const data = await response.json();

            if (isFallback) {
                this.fallbackStrings = data;
            } else {
                this.strings = data;
            }
        } catch (e) {
            console.error(`Failed to load language ${code}:`, e);
        }
    },

    // Get translation by dot-notation key
    t(key, replacements = {}) {
        const keys = key.split('.');
        let value = this.getNestedValue(this.strings, keys);

        // Fallback to English if not found
        if (value === undefined) {
            value = this.getNestedValue(this.fallbackStrings, keys);
        }

        // Return key if still not found
        if (value === undefined) {
            console.warn(`Missing translation: ${key}`);
            return key;
        }

        // Handle replacements like {path}
        if (typeof value === 'string') {
            Object.keys(replacements).forEach(k => {
                value = value.replace(`{${k}}`, replacements[k]);
            });
        }

        return value;
    },

    // Helper to get nested object value
    getNestedValue(obj, keys) {
        return keys.reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, obj);
    },

    // Apply translations to all elements with data-i18n attribute
    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);

            // Check for data-i18n-attr for attribute translations
            const attr = el.getAttribute('data-i18n-attr');
            if (attr) {
                el.setAttribute(attr, translation);
            } else {
                el.textContent = translation;
            }
        });

        // Also handle data-i18n-html for HTML content
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            el.innerHTML = this.t(key);
        });
    },

    // Set language and reload
    async setLanguage(code) {
        if (!this.availableLanguages.some(l => l.code === code)) return;

        this.currentLang = code;
        localStorage.setItem('floppy_lang', code);

        if (code === this.fallbackLang) {
            this.strings = this.fallbackStrings;
        } else {
            await this.loadLanguage(code, false);
        }

        this.applyTranslations();

        // Dispatch event for dynamic content
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: code } }));
    }
};

// Global shorthand
function t(key, replacements) {
    return I18N.t(key, replacements);
}

// Export for module usage
window.I18N = I18N;
window.t = t;

const translations = {
    ru: {},
    uz: {}
};

document.getElementById('language-selector').addEventListener('change', (event) => {
    const lang = event.target.value;
    localStorage.setItem('preferredLanguage', lang);
    loadLanguage(lang);
});

function loadLanguage(lang) {
    fetch(`translations/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            translations[lang] = data;
            updateContent(lang);
        })
        .catch(error => console.error('Error loading language file:', error));
}

function updateContent(lang) {
    const elements = document.querySelectorAll('[data-translation]');
    elements.forEach(element => {
        const translationKey = element.getAttribute('data-translation');
        if (translations[lang] && translations[lang][translationKey]) {
            element.textContent = translations[lang][translationKey];
        }
    });
}

// Load preferred language or default language
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'uz';
document.getElementById('language-selector').value = preferredLanguage;
loadLanguage(preferredLanguage);

document.querySelectorAll('.emailButton').forEach(button => {
    button.addEventListener('click', function() {
        const email = 'sarvar.marimboyev@mail.ru';
        const subject = 'test';
        const body = 'test.';

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });
});

document.querySelectorAll('.callButton').forEach(button => {
    button.addEventListener('click', function() {
        const phoneNumber = '+998901382228';

        const telLink = `tel:${phoneNumber}`;
        window.location.href = telLink;
    });
});

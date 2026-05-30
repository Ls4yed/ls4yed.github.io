const clickSound = new Audio('click.wav');
function playClickSound() { clickSound.currentTime = 0; clickSound.play().catch(() => {}); }

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        playClickSound();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

const revealSections = () => {
    document.querySelectorAll('.reveal').forEach(rev => {
        if (rev.getBoundingClientRect().top < window.innerHeight - 100) rev.classList.add('active');
    });
};
window.addEventListener('scroll', revealSections);

const translations = { fr: {...}, en: {...}, de: {...} }; // Utilisez vos objets de traduction complets ici

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    // Ajoutez ici la logique pour les placeholders et le bouton submit
}

window.changeLanguage = (lang) => {
    localStorage.setItem('preferred-lang', lang);
    applyLanguage(lang);
};

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'fr';
    applyLanguage(savedLang);
});

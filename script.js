/* ==================== CONFIGURATION AUDIO (.WAV) ==================== */
// Chargement du fichier .wav en mémoire tampon
const clickSound = new Audio('click.wav');
clickSound.volume = 0.4; // Volume réglé de manière optimale à 40%

// Fonction pour jouer le son de manière synchrone et rapide sans décalage
function playClickSound() {
    clickSound.currentTime = 0; 
    clickSound.play().catch(error => {
        console.log("Lecture audio en attente d'une première action de l'utilisateur.");
    });
}

/* ==================== TOGGLE ICON NAVBAR ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    playClickSound(); // Son lors de l'activation du menu mobile
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ==================== ANIMATIONS DE SCROLL FLUIDE ET INTERACTIF ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        playClickSound(); // Son lors de la navigation interne

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');

            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== EFFETS D'APPARITION AU DÉFILEMENT (REVEAL) ==================== */
const revealSections = () => {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

/* ==================== ASSIGNATION DYNAMIQUE DES SONS AUX INTERACTIONS ==================== */
function setupButtonSounds() {
    // Sélection de tous les points d'interactions de l'interface
    const interactiveElements = document.querySelectorAll('.btn, .gradient-btn, .social-icons a, .lang-selector span, input[type="submit"]');
    
    interactiveElements.forEach(element => {
        element.removeEventListener('click', playClickSound); // Évite de dupliquer les écouteurs
        element.addEventListener('click', playClickSound);
    });
}

/* ==================== DICTIONNAIRE MULTILINGUE ==================== */
const translations = {
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À Propos",
        "nav-services": "Profil Technique",
        "nav-projects": "Objectifs",
        "nav-contact": "Contact",
        "btn-contact-header": "Me Contacter",
        "home-title": "Moi, c'est <span>GBADAMASSI El-sayed</span>",
        "home-subtitle": "Étudiant <span>Informatique & Réseaux</span>",
        "home-description": "GBADAMASSI El-sayed – Étudiant en informatique, réseaux et fibre optique à TRT Académie. En formation sur les systèmes, la maintenance informatique et les bases des réseaux.",
        "btn-hire": "Me contacter",
        "btn-projects": "En savoir plus",
        "about-title": "À propos de <span>Moi</span>",
        "about-p1": "Je suis <strong>GBADAMASSI El-sayed</strong>, originaire de Lomé (Togo). Je suis en formation modulaire en informatique, réseaux et fibre optique au sein de <strong>TRT Académie (Technologie Réseaux Télécom)</strong> depuis avril 2026.",
        "about-p2": "Mon parcours est orienté vers l’apprentissage progressif des systèmes informatiques, des réseaux et des infrastructures télécoms. Ce portfolio évoluera progressivement afin de refléter mes compétences au fur et à mesure de ma formation et de mes progrès techniques.",
        "btn-more": "Voir mon profil technique",
        "services-title": "Profil <span>Technique</span>",
        "services-subtitle": "Je me concentre sur l’apprentissage et la pratique des bases de l’informatique, notamment :",
        "service1-title": "Hardware & Systèmes",
        "service1-desc": "Maintenance et réparation de matériel informatique, installation et configuration de systèmes d’exploitation, diagnostic de pannes et compréhension du matériel PC.",
        "service2-title": "Réseaux Informatiques",
        "service2-desc": "Acquisition et mise en pratique des notions de base en réseaux informatiques pour concevoir et comprendre les architectures locales et le routage des données.",
        "service3-title": "Fibre Optique & Télécoms",
        "service3-desc": "Introduction progressive aux infrastructures de la fibre optique dans le cadre de ma formation pour maîtriser les futurs réseaux de télécommunication.",
        "projects-heading": "Objectif <span>Professionnel</span>",
        "proj-objective": '"Mon objectif est de développer des compétences solides en informatique et réseaux afin d’évoluer vers des métiers techniques liés aux infrastructures réseau et aux télécommunications, avec une progression vers des environnements professionnels structurés."',
        "contact-title": "Discutons de votre <span>Projet</span>",
        "copyright-text": "Tous droits réservés",
        "ph-name": "Nom Complet",
        "ph-email": "Adresse Email",
        "ph-phone": "Numéro de Téléphone",
        "ph-subject": "Sujet de votre message",
        "ph-message": "Décrivez votre besoin (Maintenance matériel, question réseau, opportunité professionnelle...)",
        "val-submit": "Envoyer le message"
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Technical Profile",
        "nav-projects": "Objectives",
        "nav-contact": "Contact",
        "btn-contact-header": "Contact Me",
        "home-title": "I am <span>GBADAMASSI El-sayed</span>",
        "home-subtitle": "Student <span>IT & Networks</span>",
        "home-description": "GBADAMASSI El-sayed – Student in computer science, networks, and fiber optics at TRT Académie. Training in systems, IT maintenance, and networking fundamentals.",
        "btn-hire": "Contact me",
        "btn-projects": "Learn more",
        "about-title": "About <span>Me</span>",
        "about-p1": "I am <strong>GBADAMASSI El-sayed</strong>, originally from Lomé (Togo). I have been in a modular training program in IT, networks, and fiber optics at <strong>TRT Académie (Technologie Réseaux Télécom)</strong> since April 2026.",
        "about-p2": "My path is focused on the progressive learning of computer systems, networks, and telecom infrastructures. This portfolio will evolve gradually to reflect my skills as I advance through my training.",
        "btn-more": "View my technical profile",
        "services-title": "Technical <span>Profile</span>",
        "services-subtitle": "I focus on learning and practicing core IT fundamentals, including:",
        "service1-title": "Hardware & Systems",
        "service1-desc": "Maintenance and repair of computer hardware, installation and configuration of operating systems, fault diagnosis, and PC hardware comprehension.",
        "service2-title": "Computer Networks",
        "service2-desc": "Acquisition and practical application of networking basics to design and understand local architectures and data routing.",
        "service3-title": "Fiber Optics & Telecoms",
        "service3-desc": "Gradual introduction to fiber optic infrastructures as part of my training to master future telecommunication networks.",
        "projects-heading": "Professional <span>Objective</span>",
        "proj-objective": '"My objective is to develop solid skills in computer science and networks in order to evolve toward technical roles related to network infrastructures and telecommunications, progressing into structured professional environments."',
        "contact-title": "Let's Discuss Your <span>Project</span>",
        "copyright-text": "All rights reserved",
        "ph-name": "Full Name",
        "ph-email": "Email Address",
        "ph-phone": "Phone Number",
        "ph-subject": "Subject of your message",
        "ph-message": "Describe your needs (Hardware maintenance, network questions, professional opportunities...)",
        "val-submit": "Send message"
    },
    de: {
        "nav-home": "Startseite",
        "nav-about": "Über mich",
        "nav-services": "Technisches Profil",
        "nav-projects": "Ziele",
        "nav-contact": "Kontakt",
        "btn-contact-header": "Kontaktieren Sie mich",
        "home-title": "Ich bin <span>GBADAMASSI El-sayed</span>",
        "home-subtitle": "Student <span>Informatik & Netzwerke</span>",
        "home-description": "GBADAMASSI El-sayed – Student für Informatik, Netzwerke und Glasfaser an der TRT Académie. Ausbildung in Systemen, IT-Wartung und Netzwerkgrundlagen.",
        "btn-hire": "Kontaktieren Sie mich",
        "btn-projects": "Mehr erfahren",
        "about-title": "Über <span>Mich</span>",
        "about-p1": "Ich bin <strong>GBADAMASSI El-sayed</strong>, stamme aus Lomé (Togo). Seit April 2026 absolviere ich eine modulare Ausbildung in Informatik, Netzwerken und Glasfasertechnik an der <strong>TRT Académie (Technologie Réseaux Télécom)</strong>.",
        "about-p2": "Mein Weg ist auf das schrittweise Erlernen von Computersystemen, Netzwerken und Telekommunikationsinfrastrukturen ausgerichtet. Dieses Portfolio wird sich weiterentwickeln, um meine Fähigkeiten im Laufe meiner Ausbildung widerzuspiegeln.",
        "btn-more": "Mein technisches Profil anzeigen",
        "services-title": "Technisches <span>Profil</span>",
        "services-subtitle": "Ich konzentriere mich auf das Erlernen und Üben von IT-Grundlagen, darunter:",
        "service1-title": "Hardware & Systeme",
        "service1-desc": "Wartung und Reparatur von Computerhardware, installation und Konfiguration von Betriebssystemen, Fehlerdiagnose und Verständnis von PC-Hardware.",
        "service2-title": "Computernetzwerke",
        "service2-desc": "Erwerb und praktische Anwendung von Netzwerkgrundlagen zum Entwerfen und Verstehen lokaler Architekturen und des Datenroutings.",
        "service3-title": "Glasfaser & Telekommunikation",
        "service3-desc": "Schrittweise Einführung in Glasfaserinfrastrukturen im Rahmen meiner Ausbildung zur Beherrschung zukünftiger Telekommunikationsnetze.",
        "projects-heading": "Berufliches <span>Ziel</span>",
        "proj-objective": '"Mein Ziel ist es, fundierte Kenntnisse in Informatik und Netzwerken aufzubauen, um mich in Richtung technischer Berufe im Bereich Netzwerkinfrastrukturen und Telekommunikation zu entwickeln und in strukturierte professionelle Umgebungen aufzusteigen."',
        "contact-title": "Lassen Sie uns über Ihr <span>Projekt sprechen</span>",
        "copyright-text": "Alle Rechte vorbehalten",
        "ph-name": "Vollständiger Name",
        "ph-email": "E-Mail-Adresse",
        "ph-phone": "Telefonnummer",
        "ph-subject": "Betreff Ihrer Nachricht",
        "ph-message": "Beschreiben Sie Ihren Bedarf (Hardwarewartung, Netzwerkfragen, berufliche Möglichkeiten...)",
        "val-submit": "Nachricht senden"
    }
};

/* ==================== SYSTEME DE TRADUCTION CORE ==================== */
function applyLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    const inputs = {
        'form-name': 'ph-name',
        'form-email': 'ph-email',
        'form-phone': 'ph-phone',
        'form-subject': 'ph-subject',
        'form-message': 'ph-message'
    };

    for (let id in inputs) {
        let el = document.getElementById(id);
        if (el) el.placeholder = translations[lang][inputs[id]];
    }

    let submitBtn = document.getElementById('form-submit');
    if (submitBtn) submitBtn.value = translations[lang]['val-submit'];

    document.querySelectorAll('.lang-selector span').forEach(span => span.classList.remove('active-lang'));
    const flags = { 'fr': 0, 'en': 1, 'de': 2 };
    const activeFlag = document.querySelectorAll('.lang-selector span')[flags[lang]];
    if (activeFlag) activeFlag.classList.add('active-lang');
    
    setupButtonSounds();
}

window.changeLanguage = function(lang) {
    if (translations[lang]) {
        document.body.style.transition = "opacity 0.15s ease";
        document.body.style.opacity = "0.4";
        
        setTimeout(() => {
            applyLanguage(lang);
            localStorage.setItem('preferred-lang', lang);
            document.body.style.opacity = "1";
        }, 150);
    }
};

function initLanguage() {
    let savedLang = localStorage.getItem('preferred-lang');
    let userLang = savedLang || navigator.language || navigator.userLanguage;
    userLang = userLang.substr(0, 2).toLowerCase();

    if (!translations[userLang]) {
        userLang = 'en';
    }

    applyLanguage(userLang);
    document.body.style.opacity = "1";
    
    setupButtonSounds();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initLanguage);
} else {
    initLanguage();
}

/* ==================== TOGGLE ICON NAVBAR ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ==================== REMOVE MENU ON LINK CLICK ==================== */
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

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

// Application des traductions
function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    if(translations[lang]) {
        if(document.getElementById('form-name')) document.getElementById('form-name').placeholder = translations[lang]['ph-name'];
        if(document.getElementById('form-email')) document.getElementById('form-email').placeholder = translations[lang]['ph-email'];
        if(document.getElementById('form-phone')) document.getElementById('form-phone').placeholder = translations[lang]['ph-phone'];
        if(document.getElementById('form-subject')) document.getElementById('form-subject').placeholder = translations[lang]['ph-subject'];
        if(document.getElementById('form-message')) document.getElementById('form-message').placeholder = translations[lang]['ph-message'];
        if(document.getElementById('form-submit')) document.getElementById('form-submit').value = translations[lang]['val-submit'];
    }
}

// Détection système au chargement
document.addEventListener("DOMContentLoaded", () => {
    let userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.substr(0, 2).toLowerCase();

    if (userLang !== 'fr' && userLang !== 'en' && userLang !== 'de') {
        userLang = 'en'; // Langue fallback internationale
    }

    applyLanguage(userLang);
});

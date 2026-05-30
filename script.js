// ==========================================================================
// MENU MOBILE
// ==========================================================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

// ==========================================================================
// TRADUCTIONS (FR / EN / DE)
// ==========================================================================
const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_services: "Services",
        nav_projects: "Projets",
        nav_contact: "Contact",
        home_title: "Bienvenue sur mon <span>Portfolio</span>",
        home_subtitle: "Je suis en <span>Formation IT & Réseaux</span>",
        home_desc: "Étudiant à TRT Académie (Lomé, Togo), je me forme en informatique, réseaux et fibre optique. Ce portfolio évolue au rythme de mon apprentissage et de mes projets techniques.",
        btn_hire: "M'embaucher",
        about_title: "À propos de <span>Moi</span>",
        about_title_span: "Moi",
        about_desc: "Je suis <strong>GBADAMASSI El-sayed</strong>, originaire de Lomé (Togo). Actuellement en formation modulaire en informatique, réseaux et fibre optique au sein de <strong>TRT Académie</strong> (Technologie Réseaux Télécom) depuis avril 2026. Mon objectif est de développer des compétences solides pour évoluer vers des métiers liés aux infrastructures réseau et aux télécommunications.",
        btn_readmore: "En savoir plus",
        srv1_title: "Maintenance Informatique",
        srv1_desc: "Diagnostic de pannes, réparation de matériel, installation et configuration de systèmes d'exploitation Windows et Linux.",
        srv2_title: "Réseaux Informatiques",
        srv2_desc: "Notions et pratique des fondamentaux des réseaux informatiques : câblage, configuration de base et diagnostic réseau.",
        srv3_title: "Fibre Optique",
        srv3_desc: "Initiation progressive aux infrastructures fibre optique : types de câbles, connecteurs, notions de raccordement et mesures de puissance optique.",
        projects_title: "Mes <span>Projets</span>",
        proj1_title: "Diagnostic & Réparation PC",
        proj1_desc: "Identification et résolution de pannes matérielles sur des ordinateurs de bureau et portables : remplacement de composants, nettoyage, tests de stabilité.",
        proj2_title: "Installation OS Windows & Linux",
        proj2_desc: "Installation et configuration complète de systèmes d'exploitation Windows 10/11 et distributions Linux, partitionnement de disque et paramétrage post-installation.",
        proj3_title: "Câblage Réseau RJ45",
        proj3_desc: "Réalisation de câbles réseau droits et croisés RJ45, raccordement de prises murales et test de continuité avec un testeur de câble réseau.",
        proj4_title: "Configuration Réseau Local (LAN)",
        proj4_desc: "Mise en place d'un réseau local : configuration des adresses IP, connexion de plusieurs postes, partage de ressources et test de connectivité.",
        proj5_title: "Initiation Fibre Optique",
        proj5_desc: "Découverte des infrastructures fibre optique : types de fibres, connecteurs, notions de raccordement et mesures de puissance optique.",
        proj6_title: "Portfolio Web Personnel",
        proj6_desc: "Conception et développement de ce portfolio en HTML, CSS et JavaScript pour présenter mon parcours, mes compétences et mes réalisations.",
        btn_project: "Voir le projet",
        contact_title: "Écrivez-<span>moi</span>",
        ph_name: "Nom complet",
        ph_email: "Adresse email",
        ph_phone: "Numéro de téléphone",
        ph_subject: "Sujet",
        ph_message: "Votre message...",
        btn_send: "Envoyer le message",
        footer_faq: "FAQ",
        footer_copy: "© G. El-sayed | Tous droits réservés"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_projects: "Projects",
        nav_contact: "Contact",
        home_title: "Welcome to my <span>Portfolio</span>",
        home_subtitle: "I'm in <span>IT & Network Training</span>",
        home_desc: "Student at TRT Académie (Lomé, Togo), I am training in IT, networking and fiber optics. This portfolio evolves with my learning and technical projects.",
        btn_hire: "Hire Me",
        about_title: "About <span>Me</span>",
        about_title_span: "Me",
        about_desc: "I am <strong>GBADAMASSI El-sayed</strong>, from Lomé (Togo). Currently in a modular training program in IT, networking and fiber optics at <strong>TRT Académie</strong> (Technologie Réseaux Télécom) since April 2026. My goal is to build strong skills and grow into network infrastructure and telecommunications roles.",
        btn_readmore: "Read More",
        srv1_title: "IT Maintenance",
        srv1_desc: "Fault diagnosis, hardware repair, installation and configuration of Windows and Linux operating systems.",
        srv2_title: "Computer Networks",
        srv2_desc: "Learning and practicing networking fundamentals: cabling, basic configuration and network diagnostics.",
        srv3_title: "Fiber Optics",
        srv3_desc: "Progressive introduction to fiber optic infrastructure: cable types, connectors, splicing concepts and optical power measurements.",
        projects_title: "My <span>Projects</span>",
        proj1_title: "PC Diagnosis & Repair",
        proj1_desc: "Identification and resolution of hardware faults on desktops and laptops: component replacement, cleaning, stability testing.",
        proj2_title: "OS Installation: Windows & Linux",
        proj2_desc: "Full installation and configuration of Windows 10/11 and Linux distributions, disk partitioning and post-installation setup.",
        proj3_title: "RJ45 Network Cabling",
        proj3_desc: "Creating straight and crossover RJ45 cables, wall socket wiring and continuity testing with a cable tester.",
        proj4_title: "Local Area Network (LAN) Setup",
        proj4_desc: "Setting up a local network: IP address configuration, connecting multiple workstations, resource sharing and connectivity testing.",
        proj5_title: "Fiber Optics Introduction",
        proj5_desc: "Exploring fiber optic infrastructure: fiber types, connectors, splicing concepts and optical power measurements.",
        proj6_title: "Personal Web Portfolio",
        proj6_desc: "Design and development of this portfolio in HTML, CSS and JavaScript to showcase my background, technical skills and achievements.",
        btn_project: "View Project",
        contact_title: "Write to <span>me</span>",
        ph_name: "Full Name",
        ph_email: "Email Address",
        ph_phone: "Phone Number",
        ph_subject: "Subject",
        ph_message: "Your message...",
        btn_send: "Send Message",
        footer_faq: "FAQ",
        footer_copy: "© G. El-sayed | All Rights Reserved"
    },
    de: {
        nav_home: "Startseite",
        nav_about: "Über mich",
        nav_services: "Leistungen",
        nav_projects: "Projekte",
        nav_contact: "Kontakt",
        home_title: "Willkommen in meinem <span>Portfolio</span>",
        home_subtitle: "Ich absolviere eine <span>IT & Netzwerk-Ausbildung</span>",
        home_desc: "Student an der TRT Académie (Lomé, Togo), ich bilde mich in Informatik, Netzwerken und Glasfaser aus. Dieses Portfolio entwickelt sich mit meinem Lernfortschritt.",
        btn_hire: "Einstellen",
        about_title: "Über <span>mich</span>",
        about_title_span: "mich",
        about_desc: "Ich bin <strong>GBADAMASSI El-sayed</strong>, aus Lomé (Togo). Seit April 2026 absolviere ich eine modulare Ausbildung in Informatik, Netzwerken und Glasfaser an der <strong>TRT Académie</strong> (Technologie Réseaux Télécom). Mein Ziel ist es, fundierte Kenntnisse für Berufe in der Netzwerkinfrastruktur und Telekommunikation zu entwickeln.",
        btn_readmore: "Mehr lesen",
        srv1_title: "IT-Wartung",
        srv1_desc: "Fehlerdiagnose, Hardware-Reparatur, Installation und Konfiguration von Windows- und Linux-Betriebssystemen.",
        srv2_title: "Computernetzwerke",
        srv2_desc: "Grundlagen der Netzwerktechnik: Verkabelung, Basiskonfiguration und Netzwerkdiagnose.",
        srv3_title: "Glasfaser",
        srv3_desc: "Einführung in die Glasfaserinfrastruktur: Kabeltypen, Steckverbinder, Spleißkonzepte und optische Leistungsmessungen.",
        projects_title: "Meine <span>Projekte</span>",
        proj1_title: "PC-Diagnose & Reparatur",
        proj1_desc: "Erkennung und Behebung von Hardware-Fehlern an Desktop- und Laptop-Computern: Komponentenaustausch, Reinigung, Stabilitätstests.",
        proj2_title: "OS-Installation: Windows & Linux",
        proj2_desc: "Vollständige Installation und Konfiguration von Windows 10/11 und Linux-Distributionen, Festplattenpartitionierung und Einrichtung nach der Installation.",
        proj3_title: "RJ45-Netzwerkverkabelung",
        proj3_desc: "Herstellung von geraden und gekreuzten RJ45-Kabeln, Wanddosen-Verdrahtung und Durchgangsprüfung mit einem Kabeltester.",
        proj4_title: "Lokales Netzwerk (LAN) einrichten",
        proj4_desc: "Aufbau eines lokalen Netzwerks: IP-Konfiguration, Verbindung mehrerer Arbeitsplätze, Ressourcenteilung und Konnektivitätstests.",
        proj5_title: "Glasfaser-Einführung",
        proj5_desc: "Erkundung der Glasfaserinfrastruktur: Fasertypen, Steckverbinder, Spleißkonzepte und optische Leistungsmessungen.",
        proj6_title: "Persönliches Web-Portfolio",
        proj6_desc: "Gestaltung und Entwicklung dieses Portfolios in HTML, CSS und JavaScript zur Präsentation meines Werdegangs, meiner Fähigkeiten und Leistungen.",
        btn_project: "Projekt ansehen",
        contact_title: "Schreiben Sie <span>mir</span>",
        ph_name: "Vollständiger Name",
        ph_email: "E-Mail-Adresse",
        ph_phone: "Telefonnummer",
        ph_subject: "Betreff",
        ph_message: "Ihre Nachricht...",
        btn_send: "Nachricht senden",
        footer_faq: "FAQ",
        footer_copy: "© G. El-sayed | Alle Rechte vorbehalten"
    }
};

// ==========================================================================
// FONCTION D'APPLICATION DES TRADUCTIONS
// ==========================================================================
function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Textes classiques
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Placeholders des inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });

    // Value du bouton submit
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
        const key = el.getAttribute('data-i18n-value');
        if (t[key] !== undefined) {
            el.value = t[key];
        }
    });

    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang;

    // Sauvegarder le choix
    localStorage.setItem('lang', lang);
}

// ==========================================================================
// SON DE CLIC
// ==========================================================================
const clickSound = new Audio('click.wav');

document.querySelectorAll('a, button, input[type="submit"], .btn, .gradient-btn').forEach(el => {
    el.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
    });
});

// ==========================================================================
// INITIALISATION DU SÉLECTEUR DE LANGUE
// ==========================================================================
const langSwitcher = document.getElementById('lang-switcher');

// Charger la langue sauvegardée ou FR par défaut
const savedLang = localStorage.getItem('lang') || 'fr';
langSwitcher.value = savedLang;
applyLanguage(savedLang);

langSwitcher.addEventListener('change', (e) => {
    applyLanguage(e.target.value);
});
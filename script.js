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
        "nav-services": "Services",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "btn-contact-header": "Me Contacter",
        "home-title": "Moi, c'est <span>El-sayed</span>",
        "home-subtitle": "Tech <span>Réseaux & Maintenance</span>",
        "home-description": "Spécialisé dans l'infrastructure réseau, le déploiement de solutions sans-fil optimisées et le dépannage de systèmes informatiques. J'allie l'efficacité matérielle à l'automatisation système pour concevoir des environnements informatiques stables et performants.",
        "btn-hire": "Engager",
        "btn-projects": "Voir mes projets",
        "about-title": "À propos de <span>Moi</span>",
        "about-p1": "Actuellement étudiant en <strong>Informatique, Réseaux et Fibre Optique à la TRT Académie à Lomé</strong>, je suis un passionné d'infrastructures informatiques. Mon quotidien tourne autour de la configuration d'équipements réseaux, du déploiement de routeurs, de l'initiation aux technologies de fibre optique, et de la remise à neuf de parcs informatiques (hardware et software).",
        "about-p2": "Rigoureux et orienté solutions, j'aime également optimiser l'usage du système Android grâce à des scripts d'automatisation poussés avec MacroDroid.",
        "btn-more": "En savoir plus",
        "services-title": "Mes <span>Services</span>",
        "service1-title": "Infrastructure Réseau & Wi-Fi",
        "service1-desc": "Configuration avancée de routeurs TP-Link, optimisation des bandes de fréquences et sécurisation des protocoles d'accès pour maximiser la portée et la gestion du trafic de vos réseaux locaux.",
        "service2-title": "Maintenance & Réparation PC",
        "service2-desc": "Diagnostic matériel complet, remplacement de composants critiques (écrans, batteries, RAM, mise à niveau vers des disques SSD) et installation propre/optimisation des systèmes Windows.",
        "service3-title": "Automatisation & Systèmes",
        "service3-desc": "Création de macros complexes sur Android via MacroDroid pour automatiser les tâches répétitives, gérer intelligemment la connectivité et améliorer la productivité sur mobile.",
        "projects-heading": "Mes <span>Projets</span>",
        "proj1-title": "Optimisation Réseau Local & Routage",
        "proj1-desc": "Déploiement et configuration complète d'un routeur TP-Link d'entreprise pour implémenter un contrôle d'accès strict, une isolation de réseau (VLAN) et une priorisation de trafic (QoS) pour une PME.",
        "btn-details": "Détails du projet",
        "proj2-title": "Upgrade et Rénovation de Parc Informatique",
        "proj2-desc": "Remise à neuf d'ordinateurs portables professionnels : remplacement de dalles d'écran défectueuses, intégration de SSD haute vitesse et augmentation de RAM, suivis d'une installation propre de Windows 11 Pro.",
        "proj3-title": "Système d'Automatisation Mobile",
        "proj3-desc": "Développement de scripts d'automatisation sous MacroDroid permettant la synchronisation automatique des fichiers en local, la gestion intelligente de la batterie et le basculement dynamique Wi-Fi/Données.",
        "proj4-title": "Maquette d'Abonnement FTTH",
        "proj4-desc": "Étude de cas et simulation de raccordement d'un bâtiment en fibre optique, incluant la préparation des câbles, l'évaluation des pertes de signal et la configuration de l'ONT client terminal.",
        "proj5-title": "Audit et Sécurisation de Point d'Accès",
        "proj5-desc": "Analyse spectrale des canaux Wi-Fi encombrés, reconfiguration complète des canaux d'un routeur domestique et mise en place d'un protocole de sécurité robuste pour éliminer les interférences et intrusions.",
        "proj6-title": "Script SysPrep & Déploiement Windows",
        "proj6-desc": "Création d'une image système Windows optimisée et pré-configurée avec les logiciels de diagnostic de base, permettant un déploiement ultra-rapide lors des interventions de maintenance.",
        "contact-title": "Discutons de votre <span>Projet</span>",
        "copyright-text": "Tous droits réservés",
        "ph-name": "Nom Complet",
        "ph-email": "Adresse Email",
        "ph-phone": "Numéro de Téléphone",
        "ph-subject": "Sujet de votre message",
        "ph-message": "Décrivez votre besoin (Panne matérielle, configuration réseau, déploiement...)",
        "val-submit": "Envoyer la demande"
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "btn-contact-header": "Contact Me",
        "home-title": "I am <span>El-sayed</span>",
        "home-subtitle": "Tech <span>Networks & Maintenance</span>",
        "home-description": "Specialized in network infrastructure, optimized wireless solution deployment, and computer troubleshooting. I combine hardware efficiency with system automation to design stable and high-performance IT environments.",
        "btn-hire": "Hire Me",
        "btn-projects": "View My Projects",
        "about-title": "About <span>Me</span>",
        "about-p1": "Currently a student in <strong>Computer Science, Networks, and Fiber Optics at TRT Académie in Lomé</strong>, I am passionate about IT infrastructure. My daily work revolves around network equipment configuration, router deployment, fiber optic technologies (FTTH) initiation, and IT fleet refurbishment (hardware & software).",
        "about-p2": "Rigorous and solution-oriented, I also love optimizing the Android OS using advanced automation scripts with MacroDroid.",
        "btn-more": "Learn More",
        "services-title": "My <span>Services</span>",
        "service1-title": "Network & Wi-Fi Infrastructure",
        "service1-desc": "Advanced configuration of TP-Link routers, frequency band optimization, and access protocol securing to maximize local network range and traffic management.",
        "service2-title": "PC Maintenance & Repair",
        "service2-desc": "Complete hardware diagnosis, critical component replacement (screens, batteries, RAM, SSD upgrades), and clean installation/optimization of Windows systems.",
        "service3-title": "Automation & Systems",
        "service3-desc": "Creation of complex Android macros via MacroDroid to automate repetitive tasks, intelligently manage connectivity, and boost mobile productivity.",
        "projects-heading": "My <span>Projects</span>",
        "proj1-title": "Local Network Optimization & Routing",
        "proj1-desc": "Full deployment and configuration of an enterprise TP-Link router to implement strict access control, network isolation (VLAN), and traffic prioritization (QoS) for an SME.",
        "btn-details": "Project Details",
        "proj2-title": "IT Fleet Upgrade & Refurbishment",
        "proj2-desc": "Refurbishing professional laptops: replacing faulty screen panels, integrating high-speed SSDs, expanding RAM, followed by a clean Windows 11 Pro installation.",
        "proj3-title": "Mobile Automation System",
        "proj3-desc": "Developing automation scripts under MacroDroid for local file synchronization, smart battery management, and dynamic Wi-Fi/Data switching.",
        "proj4-title": "FTTH Subscription Model",
        "proj4-desc": "Case study and simulation of a building's fiber optic connection, including cable preparation, signal loss evaluation, and client terminal ONT configuration.",
        "proj5-title": "Access Point Audit & Securing",
        "proj5-desc": "Spectral analysis of crowded Wi-Fi channels, full channel reconfiguration of a home router, and implementation of a robust security protocol to eliminate interference and intrusions.",
        "proj6-title": "Script SysPrep & Windows Deployment",
        "proj6-desc": "Creating an optimized and pre-configured Windows system image with core diagnostic software, allowing ultra-fast deployment during maintenance interventions.",
        "contact-title": "Let's Discuss Your <span>Project</span>",
        "copyright-text": "All rights reserved",
        "ph-name": "Full Name",
        "ph-email": "Email Address",
        "ph-phone": "Phone Number",
        "ph-subject": "Subject of your message",
        "ph-message": "Describe your need (Hardware failure, network configuration, deployment...)",
        "val-submit": "Send Request"
    },
    de: {
        "nav-home": "Startseite",
        "nav-about": "Über mich",
        "nav-services": "Dienstleistungen",
        "nav-projects": "Projekte",
        "nav-contact": "Kontakt",
        "btn-contact-header": "Kontaktieren Sie mich",
        "home-title": "Ich bin <span>El-sayed</span>",
        "home-subtitle": "Tech <span>Netzwerke & Wartung</span>",
        "home-description": "Spezialisiert auf Netzwerkinfrastruktur, optimierte WLAN-Lösungen und Computer-Fehlerbehebung. Ich verbinde Hardware-Effizienz mit Systemautomatisierung, um stabile und leistungsstarke IT-Umgebungen zu schaffen.",
        "btn-hire": "Beauftragen",
        "btn-projects": "Meine Projekte sehen",
        "about-title": "Über <span>Mich</span>",
        "about-p1": "Derzeit bin ich Student für <strong>Informatik, Netzwerke und Glasfaser an der TRT Académie in Lomé</strong> und begeistere mich für IT-Infrastrukturen. Mein Alltag dreht sich um die Konfiguration von Netzwerkgeräten, Router-Bereitstellung, Einführung in Glasfasertechnologien (FTTH) und die Erneuerung von IT-Systemen (Hardware & Software).",
        "about-p2": "Gewissenhaft und lösungsorientiert optimiere ich auch gerne das Android-Betriebssystem durch fortschrittliche Automatisierungsskripte mit MacroDroid.",
        "btn-more": "Mehr erfahren",
        "services-title": "Meine <span>Dienstleistungen</span>",
        "service1-title": "Netzwerk- & WLAN-Infrastruktur",
        "service1-desc": "Erweiterte Konfiguration von TP-Link-Routern, Frequenzbandoptimierung und Absicherung von Zugriffsprotokollen, um die Reichweite des lokalen Netzwerks und das Verkehrsmanagement zu maximieren.",
        "service2-title": "PC-Wartung & Reparatur",
        "service2-desc": "Vollständige Hardware-Diagnose, Austausch kritischer Komponenten (Bildschirme, Akkus, RAM, SSD-Upgrades) und saubere Installation/Optimierung von Windows-Systemen.",
        "service3-title": "Automatisierung & Systeme",
        "service3-desc": "Erstellung komplexer Android-Makros über MacroDroid, um sich wiederholende Aufgaben zu automatisieren, die Konnektivität intelligent zu verwalten und die mobile Produktivität zu steigern.",
        "projects-heading": "Meine <span>Projekte</span>",
        "proj1-title": "Lokale Netzwerkoptimierung & Routing",
        "proj1-desc": "Vollständige Bereitstellung und Konfiguration eines TP-Link-Unternehmensrouters zur Implementierung strenger Zugriffskontrollen, Netzwerktrennung (VLAN) und Verkehrspriorisierung (QoS) für ein KMU.",
        "btn-details": "Projektdetails",
        "proj2-title": "IT-Flotten-Upgrade & Erneuerung",
        "proj2-desc": "Überholung von Business-Laptops: Austausch defekter Bildschirme, Integration von High-Speed-SSDs, RAM-Erweiterung und anschließende saubere Windows 11 Pro Installation.",
        "proj3-title": "Mobiles Automatisierungssystem",
        "proj3-desc": "Entwicklung von Automatisierungsskripten unter MacroDroid für lokale Dateisynchronisation, intelligentes Batteriemanagement und dynamische WLAN/Daten-Umschaltung.",
        "proj4-title": "FTTH-Abonnementmodell",
        "proj4-desc": "Fallstudie und simulation des Glasfaseranschlusses eines Gebäudes, einschließlich Kabelvorbereitung, Signalverlustbewertung und ONT-Client-Terminal-Konfiguration.",
        "proj5-title": "Access-Point-Audit & Absicherung",
        "proj5-desc": "Spektralanalyse überlasteter WLAN-Kanäle, vollständige Neukonfiguration der Kanäle eines Heimrouters und Implementierung eines robusten Sicherheitsprotokolls zur Vermeidung von Interferenzen und Eindringlingen.",
        "proj6-title": "SysPrep-Skript & Windows-Bereitstellung",
        "proj6-desc": "Erstellung eines optimierten und vorkonfigurierten Windows-Systemimages mit grundlegender Diagnosesoftware für eine ultraschnelle Bereitstellung bei Wartungseinsätzen.",
        "contact-title": "Lassen Sie uns über Ihr <span>Projekt sprechen</span>",
        "copyright-text": "Alle Rechte vorbehalten",
        "ph-name": "Vollständiger Name",
        "ph-email": "E-Mail-Adresse",
        "ph-phone": "Telefonnummer",
        "ph-subject": "Betreff Ihrer Nachricht",
        "ph-message": "Beschreiben Sie Ihren Bedarf (Hardwarefehler, Netzwerkkonfiguration, Bereitstellung...)",
        "val-submit": "Anfrage senden"
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
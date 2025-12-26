const translations = {
    fr: {
        // Titres et headers
        'page-title': 'Mon CV en ligne - Thomas Cagnion',
        'job-title': 'Développeur Junior',
        'about-me-title': 'À propos de moi',
        'experience-title': 'Expérience professionnelle',
        'education-title': 'Formation',
        'skills-title': 'Compétences',
        'contact-title': 'Contact',
        
        // À propos de moi
        'about-me-intro': 'Bonjour, je m\'appelle <strong>Thomas</strong>, jeune diplômé passionné par la programmation et à la recherche d\'un emploi dans ce domaine.',
        'about-me-qualities': '<strong>Déterminé, sérieux et autonome</strong>, je suis conscient des défis qui m\'attendent et prêt à relever les missions qui me seront confiées avec rigueur et engagement.',
        'about-me-learning': '<strong>Patient et avide d\'apprendre</strong>, je sais écouter les remarques et m\'adapter pour progresser continuellement.',
        
        // Boutons de section
        'see-experiences': 'Voir mes Expériences',
        'see-education': 'Voir mes Formations',
        'see-skills': 'Voir mes compétences',
        
        // Expérience professionnelle
        'experience-1-title': 'Stage de fin d\'année 1er année BTS 2023 (6 semaines)',
        'experience-1-task-1': 'Programmation en PHP/JavaScript',
        'experience-1-task-2': 'HTML/CSS',
        'experience-1-task-3': 'Amélioration du site internet de l\'entreprise notamment du frontend',
        'experience-2-title': 'Stage de 3ème',
        'experience-2-task-1': 'Montage d\'ordinateur',
        'experience-2-task-2': 'Apprentissage du réseau',
        
        // Formation
        'education-1-title': 'Accompagnement par la Mission Locale',
        'education-1-desc': '"Un jeune, un emploi"',
        'education-2-title': 'BTS Système Numérique',
        'education-2-desc': 'Informatique et Réseau - Lycée Jules Verne, Mondeville',
        'education-3-title': 'BAC STI2D',
        'education-3-desc': 'Option Informatique - Lycée Jules Verne, Mondeville',
        
        // Compétences (certaines restent identiques)
        'skill-1': 'HTML/CSS',
        'skill-2': 'JavaScript',
        'skill-3': 'C++',
        'skill-4': 'Python',
        'skill-5': 'Git/GitHub',
        'skill-6': 'Angular',
        'skill-7': 'Visual Studio Code',
        'skill-8': 'Anglais niveau C1 + Anglais Technique',
        
        // Contact
        'contact-email': 'Email : thomas.cagnion@gmail.com',
        'contact-phone': 'Téléphone : +33',
        
        // Footer
        'copyright': '© 2025 - Thomas Cagnion',
        'download-cv': 'Télécharger mon CV (PDF)',
        'language-switch': 'Switch to English'
    },
    
    en: {
        // Titres et headers
        'page-title': 'My Online CV - Thomas Cagnion',
        'job-title': 'Junior Developer',
        'about-me-title': 'About Me',
        'experience-title': 'Professional Experience',
        'education-title': 'Education',
        'skills-title': 'Skills',
        'contact-title': 'Contact',
        
        // À propos de moi
        'about-me-intro': 'Hello, my name is <strong>Thomas</strong>, a recent graduate passionate about programming and looking for a job in this field.',
        'about-me-qualities': '<strong>Determined, serious, and autonomous</strong>, I am aware of the challenges ahead and ready to tackle the tasks assigned to me with rigor and commitment.',
        'about-me-learning': '<strong>Patient and eager to learn</strong>, I know how to listen to feedback and adapt to continuously improve.',
        
        // Boutons de section
        'see-experiences': 'View my Experiences',
        'see-education': 'View my Education',
        'see-skills': 'View my skills',
        
        // Expérience professionnelle
        'experience-1-title': 'End-of-year internship 1st year BTS 2023 (6 weeks)',
        'experience-1-task-1': 'Programming in PHP/JavaScript',
        'experience-1-task-2': 'HTML/CSS',
        'experience-1-task-3': 'Improvement of the company website, especially the frontend',
        'experience-2-title': '9th grade internship',
        'experience-2-task-1': 'Computer assembly',
        'experience-2-task-2': 'Network learning',
        
        // Formation
        'education-1-title': 'Support by the Mission Locale',
        'education-1-desc': '"One youth, one job"',
        'education-2-title': 'BTS Digital Systems',
        'education-2-desc': 'IT and Networks - Lycée Jules Verne, Mondeville',
        'education-3-title': 'BAC STI2D',
        'education-3-desc': 'IT Option - Lycée Jules Verne, Mondeville',
        
        // Compétences
        'skill-1': 'HTML/CSS',
        'skill-2': 'JavaScript',
        'skill-3': 'C++',
        'skill-4': 'Python',
        'skill-5': 'Git/GitHub',
        'skill-6': 'Angular',
        'skill-7': 'Visual Studio Code',
        'skill-8': 'English level C1 + Technical English',
        
        // Contact
        'contact-email': 'Email: thomas.cagnion@gmail.com',
        'contact-phone': 'Phone: +33',
        
        // Footer
        'copyright': '© 2025 - Thomas Cagnion',
        'download-cv': 'Download my Resume (PDF)',
        'language-switch': 'Passer en Français'
    }
};

// Variable pour suivre la langue actuelle
let currentLanguage = 'fr';

// Fonction pour changer la langue
function toggleLanguage() {
    // Changer la langue courante
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    
    // Mettre à jour l'attribut lang de la balise html
    document.documentElement.lang = currentLanguage;
    
    // Appliquer les traductions
    applyTranslations(currentLanguage);
    
    // Sauvegarder la préférence
    localStorage.setItem('language', currentLanguage);
}

// Fonction pour appliquer les traductions
function applyTranslations(language) {
    const translationSet = translations[language];
    
    // Parcourir toutes les clés de traduction
    Object.keys(translationSet).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // Pour les éléments qui ont du HTML dans leur contenu (comme les strong)
            if (id.includes('about-me') && (id.includes('intro') || id.includes('qualities') || id.includes('learning'))) {
                element.innerHTML = translationSet[id];
            } else {
                element.textContent = translationSet[id];
            }
        }
    });
    
    // Mettre à jour le titre de la page
    document.title = translationSet['page-title'];
}

// Initialiser la langue au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier la langue sauvegardée
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
        applyTranslations(currentLanguage);
    }
    
    // Ajouter l'événement au bouton de changement de langue
    const languageButton = document.getElementById('SwitchAnglais');
    if (languageButton) {
        languageButton.addEventListener('click', toggleLanguage);
    }
    
    // Vos autres fonctions d'initialisation...
    // (mode sombre, etc.)
});


// Fonction pour afficher / masquer la section "Expérience"
function toggleExperience() {
    const list = document.getElementById("experience-list");
    const icon = document.querySelector(".experience-icon");

    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden", "hide");
        list.classList.add("show");
        icon.textContent = "−";
    } else {
        list.classList.remove("show");
        list.classList.add("hide");
        icon.textContent = "+";
        // Supprime la classe "hidden" après la fin de l'animation
        setTimeout(() => {
            list.classList.add("hidden");
            list.classList.remove("hide");
        }, 300); // Doit correspondre à la durée de la transition en CSS
    }
}

// Fonction pour afficher / masquer la section "Compétences"
function toggleCompetences() {
    const list = document.getElementById("competence-list");
    const icon = document.querySelector(".competences-icon");

    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden", "hide");
        list.classList.add("show");
        icon.textContent = "−";
    } else {
        list.classList.remove("show");
        list.classList.add("hide");
        icon.textContent = "+";
        setTimeout(() => {
            list.classList.add("hidden");
            list.classList.remove("hide");
        }, 300);
    }
}

// Fonction pour afficher / masquer la section "Formation"
function toggleFormation() {
    // Récupère la liste des formations
    const list = document.getElementById("formation-list");
    // Récupère l’icône + / −
    const icon = document.querySelector(".formation-icon");

    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden", "hide");
        list.classList.add("show");
        icon.textContent = "−";
    } else {
        list.classList.remove("show");
        list.classList.add("hide");
        icon.textContent = "+";
        // Supprime la classe "hidden" après la fin de l'animation
        setTimeout(() => {
            list.classList.add("hidden");
            list.classList.remove("hide");
        }, 300); // Doit correspondre à la durée de la transition en CSS
    }
}


// Fonction pour activer / désactiver le mode sombre
function toggleDarkMode() {
    // Récupère le body de la page
    const body = document.body;
    // Récupère le bouton du mode sombre
    const button = document.getElementById("dark-mode-toggle");

    // Si le mode sombre est déjà activé
    if (body.classList.contains("dark-mode")) {
        // Désactive le mode sombre
        body.classList.remove("dark-mode");
        // Change le texte et l’icône du bouton
        button.innerHTML = '<i class="fas fa-moon"></i>';
        // Sauvegarde la préférence dans le localStorage
        localStorage.setItem("darkMode", "false");
    } else {
        // Active le mode sombre
        body.classList.add("dark-mode");
        // Change le texte et l’icône du bouton
        button.innerHTML = '<i class="fas fa-sun"></i>';
        // Sauvegarde la préférence dans le localStorage
        localStorage.setItem("darkMode", "true");
    }
}

// Exécute le code une fois que le DOM est complètement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Récupère le body
    const body = document.body;
    // Récupère le bouton du mode sombre
    const button = document.getElementById("dark-mode-toggle");
    // Récupère la préférence enregistrée
    const darkMode = localStorage.getItem("darkMode");

    // Si le mode sombre était activé précédemment
    if (darkMode === "true") {
        // Active le mode sombre
        body.classList.add("dark-mode");
        // Met à jour le bouton
        button.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Ajoute l’événement clic sur le bouton
    button.addEventListener("click", toggleDarkMode);
});
/*
function switchToEnglish() {
    const button = document.getElementById("SwitchAnglais");
    if (button.textContent.includes("Switch Anglais")) {
        window.location.href = "index_en.html";
    } else {
        window.location.href = "index.html";
    }
}

document.getElementById("SwitchAnglais").addEventListener("click", switchToEnglish);*/


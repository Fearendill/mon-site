const experiencesData = {
    fr: [
        {
            date: "2023",
            title: "Stage de fin d'année 1ère année BTS 2023 (6 semaines)",
            tasks: [
                "Programmation en PHP/JavaScript",
                "HTML/CSS",
                "Amélioration du site internet de l'entreprise notamment du frontend",
                "Utilisation de Git pour le versionnage du code"
            ]
        },
        {
            date: "2018",
            title: "Stage de 3ème",
            tasks: [
                "Montage d'ordinateur",
                "Apprentissage du réseau"
            ]
        }
    ],
    en: [
        {
            date: "2023",
            title: "End-of-year internship – 1st year BTS (6 weeks)",
            tasks: [
                "PHP/JavaScript development",
                "HTML/CSS",
                "Improvement of the company website, mainly the frontend",
                "Use of Git for code versioning"
            ]
        },
        {
            date: "2018",
            title: "Middle school internship",
            tasks: [
                "Computer assembly",
                "Basic networking learning"
            ]
        }
    ]
};
const lang = window.location.pathname.includes("index_en") ? "en" : "fr";
const experiences = experiencesData[lang];

        let currentExperienceIndex = 0;

        // Fonction pour afficher une expérience
        function displayExperience(index) {
            const card = document.getElementById("experience-card");
            const exp = experiences[index];
            
            const tasksHTML = exp.tasks.map(task => `<li>${task}</li>`).join('');
            
            card.innerHTML = `
                <div class="experience-date">${exp.date}</div>
                <h3>${exp.title}</h3>
                <ul>${tasksHTML}</ul>
            `;
            
        }

        // Fonction pour naviguer vers l'expérience précédente
        function previousExperience() {
            currentExperienceIndex =
                (currentExperienceIndex - 1 + experiences.length) % experiences.length;
            displayExperience(currentExperienceIndex);
}

        // Fonction pour naviguer vers l'expérience suivante
        function nextExperience() {
            currentExperienceIndex =
                (currentExperienceIndex + 1) % experiences.length;
            displayExperience(currentExperienceIndex);
}

        // Fonction pour afficher/masquer le carrousel
        function toggleExperience() {
            const carousel = document.getElementById("experience-carousel");
            const icon = document.querySelector(".experience-icon");

            if (carousel.classList.contains("show")) {
                carousel.classList.remove("show");
                icon.textContent = "+";
            } else {
                carousel.classList.add("show");
                icon.textContent = "−";
                displayExperience(currentExperienceIndex);
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
    // Récupère l'icône + / −
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
        // Change le texte et l'icône du bouton
        button.innerHTML = '<i class="fas fa-moon"></i>';
        // Sauvegarde la préférence dans le localStorage
        localStorage.setItem("darkMode", "false");
    } else {
        // Active le mode sombre
        body.classList.add("dark-mode");
        // Change le texte et l'icône du bouton
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

    // Ajoute l'événement clic sur le bouton
    button.addEventListener("click", toggleDarkMode);
});

function switchLanguage() {
    const button = document.getElementById("SwitchAnglais");
    // Vérifie si on est sur la version française ou anglaise
    if (window.location.pathname.includes("index_en.html")) {
        // Si on est sur la version anglaise, on retourne à la française
        window.location.href = "index.html";
    } else {
        window.location.href = "index_en.html";
    }
}

document.getElementById("SwitchAnglais").addEventListener("click", switchLanguage);


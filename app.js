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
        button.innerHTML = '<i class="fas fa-moon"></i> Mode sombre';
        // Sauvegarde la préférence dans le localStorage
        localStorage.setItem("darkMode", "false");
    } else {
        // Active le mode sombre
        body.classList.add("dark-mode");
        // Change le texte et l’icône du bouton
        button.innerHTML = '<i class="fas fa-sun"></i> Mode clair';
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
        button.innerHTML = '<i class="fas fa-sun"></i> Mode clair';
    }

    // Ajoute l’événement clic sur le bouton
    button.addEventListener("click", toggleDarkMode);
});
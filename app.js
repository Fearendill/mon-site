function toggleExperience() {
    const list = document.getElementById("experience-list");
    const icon = document.querySelector(".experience-icon");
    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
        icon.textContent = "−";
    } else {
        list.classList.add("hidden");
        icon.textContent = "+";
    }
}

    function toggleCompetences() {
    const list = document.getElementById("competence-list");
    const icon = document.querySelector(".competences-icon");
    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
        icon.textContent = "−";
    } else {
        list.classList.add("hidden");
        icon.textContent = "+";
    }
}
    function toggleFormation() {
        const list = document.getElementById("formation-list");
        const icon = document.querySelector(".formation-icon");

        if (list.classList.contains("hidden")) {
            list.classList.remove("hidden");
            icon.textContent = "−";
        } else {
            list.classList.add("hidden");
            icon.textContent = "+";
            
            
        }
}

function toggleDarkMode() {
        const body = document.body;
        const button = document.getElementById("dark-mode-toggle");

        if (body.classList.contains("dark-mode")) {
            // Passer en mode clair
            body.classList.remove("dark-mode");
            button.innerHTML = '<i class="fas fa-moon"></i> Mode sombre';
            localStorage.setItem("darkMode", "false");
        } else {
            // Passer en mode sombre
            body.classList.add("dark-mode");
            button.innerHTML = '<i class="fas fa-sun"></i> Mode clair';
            localStorage.setItem("darkMode", "true");
        }
    }
    document.addEventListener("DOMContentLoaded", function() {
        const body = document.body;
        const button = document.getElementById("dark-mode-toggle");
        const darkMode = localStorage.getItem("darkMode");

        if (darkMode === "true") {
            body.classList.add("dark-mode");
            button.innerHTML = '<i class="fas fa-sun"></i> Mode clair';
        }
        button.addEventListener("click", toggleDarkMode);
    });
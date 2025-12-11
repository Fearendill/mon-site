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

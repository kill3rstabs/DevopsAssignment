// projects.js
const projects = [
    { name: "E-Commerce Web App", technology: "Python" },
    { name: "Simon Game", technology: "JavaScript" },
    { name: "Artificial Neural Network", technology: "C" },
    // Add more projects as needed
];

// Populate projects on the projects.html page load
document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("projectList");
    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.textContent = `${project.name} - ${project.technology}`;
        projectList.appendChild(listItem);
    });
});

// Filter projects based on input text
function filterProjects() {
    const techFilter = document.getElementById("techFilter").value.toLowerCase();
    const projectList = document.getElementById("projectList");
    projectList.innerHTML = ""; // Clear previous list

    projects.forEach(project => {
        if (project.technology.toLowerCase().includes(techFilter)) {
            const listItem = document.createElement("li");
            listItem.textContent = `${project.name} - ${project.technology}`;
            projectList.appendChild(listItem);
        }
    });
}

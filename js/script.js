
// Load shared navigation bar
fetch("nav.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar-container").innerHTML = data;

        // Determine current webpage
        const currentPage = window.location.pathname
            .split("/")
            .pop() || "index.html";

        // Determine which navigation section is active
        let currentSection;

        if (currentPage === "index.html") {
            currentSection = "home";
        }
        else if (currentPage === "about.html") {
            currentSection = "about";
        }
        else if (currentPage == "projects.html") {
            currentSection = "projects";
        }
        else if (currentPage === "resources.html") {
            currentSection = "resources";
        }

        else if (currentPage == "writing.html") {
            currentSection = "writing";
        }

        // Apply active class to matching navigation button
        const activeLink = document.querySelector(
            `.navbar [data-section="${currentSection}"]`
        );

        if (activeLink) {
            activeLink.classList.add("active");
        }

    })
    .catch(error => console.error("Navigation failed to load:", error));


// Automatically update copyright year
document.getElementById("copyright-year").textContent =
    new Date().getFullYear();

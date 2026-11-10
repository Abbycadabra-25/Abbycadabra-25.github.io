'use strict';

// Load shared navigation bar
fetch("../../nav.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load nav.html");
        }
        return response.text();
    })
    .then(data => {

        document.getElementById("navbar-container").innerHTML = data;

        // Determine current webpage
        const currentPage = window.location.pathname
            .split("/")
            .pop() || "index.html";

        // Determine active navigation section
        const currentSection = currentPage === "index.html"
            ? "home"
            : currentPage.replace(".html", "");

        // Highlight active navigation button
        const activeLink = document.querySelector(
            `.navbar [data-section="${currentSection}"]`
        );

        if (activeLink) {
            activeLink.classList.add("active");
        }

    })
    .catch(error => console.error("Navigation failed to load:", error));
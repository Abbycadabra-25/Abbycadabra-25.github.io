'use strict';

// Load shared footer
const footerContainer = document.getElementById("footer-container");

if (footerContainer) {
    fetch("../../footer.html")
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;

            // Update copyright year
            const year = footerContainer.querySelector("#copyright-year");

            if (year) {
                year.textContent = new Date().getFullYear();
            }
        })
        .catch(error => console.error("Footer failed to load:", error));
}
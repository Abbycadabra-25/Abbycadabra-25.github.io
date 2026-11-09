// Load shared navigation bar
fetch("nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => console.error("Navigation failed to load:", error));


// Automatically update copyright year
document.getElementById("copyright-year").textContent = new Date().getFullYear();

// script.js

// Function to navigate to a specific week's folder
function navigateTo(week) {
    // Redirect to the weekly folder's index.html
    window.location.href = `/${week}/index.html`;
}

// Example of an additional feature for the main page
function welcomeMessage() {
    alert("Welcome to the Weekly Projects Dashboard!");
}

// Call the welcome message when the page loads
window.onload = function () {
    welcomeMessage();
};

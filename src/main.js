import "./style.css";
/**
 * Main JavaScript file for your personal website
 */

// Wait for the DOM to be fully loaded before running any JavaScript
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully!");

  // Highlight the current page in the navigation
  highlightCurrentPage();

  // Add any animations or effects you want
  addPageTransitionEffects();

  // Optional: Add dark mode toggle functionality
  setupDarkModeToggle();
});

/**
 * Highlights the current page in the navigation bar
 */
function highlightCurrentPage() {
  // Get the current page filename
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Find all navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  // Loop through each link and add the 'active' class to the current page link
  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    // Remove any existing active classes first
    link.classList.remove("active");

    // If this link matches the current page, add the 'active' class
    if (linkHref === currentPage) {
      link.classList.add("active");
    }
  });
}

/**
 * Adds subtle transition effects when the page loads
 */
function addPageTransitionEffects() {
  // Example: Fade in the main content
  const mainContent = document.querySelector("main");
  if (mainContent) {
    // Set initial opacity to 0
    mainContent.style.opacity = "0";
    mainContent.style.transition = "opacity 0.5s ease-in-out";

    // After a small delay, fade in the content
    setTimeout(() => {
      mainContent.style.opacity = "1";
    }, 100);
  }

  // Example: Animate social links on homepage
  const socialLinks = document.querySelectorAll(".social-links a");
  socialLinks.forEach((link, index) => {
    link.style.opacity = "0";
    link.style.transform = "translateY(20px)";
    link.style.transition =
      "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

    // Stagger the animations
    setTimeout(() => {
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    }, 300 + index * 100);
  });
}

/**
 * Optional: Set up dark mode toggle functionality
 * Note: You'll need to add a toggle button in your HTML and CSS for dark mode
 */

function setupDarkModeToggle() {
  const darkModeToggle = document.getElementById("themeToggle");

  // Check for saved user preference in localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // Set initial state based on user preference
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }

  // Add click event listener to toggle button if it exists
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      // Toggle dark mode class on body
      document.body.classList.toggle("dark-mode");

      // Save preference to localStorage
      const currentDarkMode = document.body.classList.contains("dark-mode");
      localStorage.setItem("darkMode", currentDarkMode);
    });
  }
}

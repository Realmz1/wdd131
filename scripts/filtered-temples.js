// Dynamically set the current year in the footer
const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Display the last modified date of the document
const lastModifiedParagraph = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;

// Responsive Hamburger Menu
const navMenu = document.querySelector("nav ul");
const hamburgerButton = document.createElement("button");

// Configure Hamburger Button
hamburgerButton.setAttribute("id", "hamburger");
hamburgerButton.textContent = "☰"; // Default hamburger icon
document.querySelector("header").insertBefore(hamburgerButton, navMenu);

// Toggle Navigation Menu
hamburgerButton.addEventListener("click", () => {
    const isExpanded = hamburgerButton.getAttribute("aria-expanded") === "true";
    hamburgerButton.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("visible");
    hamburgerButton.textContent = isExpanded ? "☰" : "✖"; // Toggle to 'X' when open
});

// CSS Classes for Menu Visibility
const style = document.createElement("style");
style.innerHTML = `
  nav ul {
    display: none; /* Initially hidden for mobile */
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  nav ul.visible {
    display: flex;
  }
  #hamburger {
    display: none;
    background-color: transparent;
    color: white;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    #hamburger {
      display: block; /* Show hamburger in mobile view */
      margin: 1rem;
    }
  }
`;
document.head.appendChild(style);

// Lazy Load Images
document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = document.querySelectorAll("img");

    lazyImages.forEach(image => {
        image.setAttribute("loading", "lazy");
    });
});

// Store submission count in localStorage
if (localStorage.getItem("formSubmissions")) {
    let count = parseInt(localStorage.getItem("formSubmissions"));
    localStorage.setItem("formSubmissions", count + 1);
} else {
    localStorage.setItem("formSubmissions", 1);
}

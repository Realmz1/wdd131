// Lazy Load Images
document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = document.querySelectorAll("img");

    lazyImages.forEach(image => {
        image.setAttribute("loading", "lazy");
    });
});

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Store visit count in localStorage
if (localStorage.getItem("visitCount")) {
    let count = parseInt(localStorage.getItem("visitCount"));
    localStorage.setItem("visitCount", count + 1);
} else {
    localStorage.setItem("visitCount", 1);
}

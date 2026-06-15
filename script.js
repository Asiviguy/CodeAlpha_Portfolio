// =========================
// DARK / LIGHT MODE
// =========================

const toggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

});

// =========================
// SKILL BAR ANIMATION
// =========================

window.addEventListener("scroll", () => {

    const skillsSection = document.querySelector("#skills");

    if (!skillsSection) return;

    const sectionPosition =
        skillsSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {

        const htmlBar = document.querySelector(".html");
        const jsBar = document.querySelector(".js");
        const pythonBar = document.querySelector(".python");
        const cppBar = document.querySelector(".cpp");

        if (htmlBar) htmlBar.style.width = "90%";
        if (jsBar) jsBar.style.width = "75%";
        if (pythonBar) pythonBar.style.width = "85%";
        if (cppBar) cppBar.style.width = "80%";

    }

});

// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
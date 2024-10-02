document.getElementById("hamburger").addEventListener("click", function () {
    const navLinksCenter = document.querySelector(".nav-links-center");
    if (navLinksCenter.style.display === "flex") {
        navLinksCenter.style.display = "none";
    } else {
        navLinksCenter.style.display = "flex";
        navLinksCenter.style.flexDirection = "column";
    }
});

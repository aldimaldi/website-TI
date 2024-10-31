let prevScrollPos = window.pageYOffset;
const navbarTop = document.getElementById("navbarTop");
const navbarBottom = document.getElementById("navbarBottom");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 10) {
        navbarTop.style.display = "none";
        navbarBottom.style.top = "0";
    }else {
        navbarTop.style.display = "flex";
        navbarBottom.style.top = "56px";
    }
}
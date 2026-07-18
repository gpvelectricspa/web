const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        topBtn.style.display = "flex";
    }else{
        topBtn.style.display = "none";
    }
});

topBtn.style.display = "none";

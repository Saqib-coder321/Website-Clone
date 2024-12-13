let btn = document.querySelector("#nogh");
let btn2 = document.querySelector(".fa-xmark");
let kyghd = document.querySelector(".kyghd");

if (btn && kyghd) {
    btn.addEventListener("click", () => {
        kyghd.style.display = "flex";
        kyghd.style.zIndex = "10";
    });
}

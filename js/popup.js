const img = document.querySelector(".title__rectangles");
const close = document.querySelector(".popup__wrapper");
const popup = document.querySelector(".popup-rec");

console.log(popup);

function tooglePopup() {
	document.body.classList.toggle("lock");
	popup.classList.toggle("active");
}

img.addEventListener("click", tooglePopup);

close.addEventListener("click", tooglePopup);

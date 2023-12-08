const day = document.getElementById("day");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const hour = document.getElementById("hour");

// Обратный счетчик

const targetDate = new Date("December 18, 2023 00:00:00");

function counter() {
	const todayDate = Date.now();
	const diff = targetDate.getTime() - todayDate;

	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const seconds = Math.floor(diff / 1000) % 60;

	day.innerHTML = days < 10 ? "0" + days : days;
	minute.innerHTML = minutes < 10 ? "0" + minutes : minutes;
	second.innerHTML = seconds < 10 ? "0" + seconds : seconds;
	hour.innerHTML = hours < 10 ? "0" + hours : hours;
}

setInterval(counter, 1000);

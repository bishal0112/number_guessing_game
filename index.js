"use strict";
const message = document.querySelector(".message");

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector("#submit-btn").addEventListener("click", function () {
	let guessNumber = Number(document.querySelector("#guess-number").value);
	if (guessNumber === randomNumber) {
		message.textContent = "You Win 🥇";
		document.querySelector("body").classList.toggle("win");
		document.querySelector(".display").textContent = randomNumber;
		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}
	} else if (guessNumber < randomNumber) {
		message.textContent = "Too Low 📉";
		score--;
		document.querySelector(".score").textContent = score;
	} else {
		message.textContent = "Too High 📈";
		score--;
		document.querySelector(".score").textContent = score;
	}
});

document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	randomNumber = Math.floor(Math.random() * 20) + 1;
	message.textContent = "Start Guessing....";
	document.querySelector("body").classList.remove("win");
	document.querySelector("#guess-number").value = "";
	document.querySelector(".score").textContent = score;
	document.querySelector(".display").textContent = "?";
});

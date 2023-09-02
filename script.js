"use strict";

let rating;

const cardRating = document.querySelector(".js-card-rating");
const cardThankYou = document.querySelector(".js-card-thank-you");
const ratingBtns = document.querySelectorAll(".js-btn-rating");
const submitBtn = document.querySelector(".js-submit-rating");
const ratingLabel = document.querySelector(".js-rating-score");

window.addEventListener("load", initialize);

ratingBtns.forEach(btn => btn.addEventListener("click", () => toggleSelected(btn)));
submitBtn.addEventListener("click", submitRating);

function toggleSelected(btn) {
    ratingBtns.forEach(btn => btn.classList.remove("selected"));
    btn.classList.add("selected");
    rating = btn.textContent;
}

function initialize() {
    cardThankYou.style.display = "none";
}

function submitRating() {
    cardRating.style.display = "none";
    cardThankYou.style.display = "flex";
    ratingLabel.textContent = `You selected ${rating} out of 5`;
}
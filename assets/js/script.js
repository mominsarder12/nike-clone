"use strict";
/**
 * navbar functionality by vanilla javascript
 */

const addEventOnElem = function (elem, type, callback) {
	if (elem.length > 1) {
		for (let i = 0; i < elem.length; i++) {
			elem[i].addEventListener(type, callback);
		}
	} else {
		elem.addEventListener(type, callback);
	}
};

const navMenu = document.querySelector(".nav-open-btn");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const navClose = document.querySelector(".nav-close-btn");
const navLinks = document.querySelectorAll(".nav-link");

// nav menu click to toggle active class
const navMenuClickToToggle = function () {
	navbar.classList.toggle("active");
	overlay.classList.toggle("active");
};
addEventOnElem(navMenu, "click", navMenuClickToToggle);

// nav close click to Toggle active class
const navCloseClickToToggle = function () {
	navbar.classList.toggle("active");
	overlay.classList.toggle("active");
};
addEventOnElem(navClose, "click", navCloseClickToToggle);

// overlay click to toggle active class
const overlayClickToToggle = function () {
	navbar.classList.toggle("active");
	overlay.classList.toggle("active");
};
addEventOnElem(overlay, "click", overlayClickToToggle);

// click nav link to toggle active
const clickNavLinksToRedirect = function () {
	navbar.classList.remove("active");
	overlay.classList.remove("active");
};
addEventOnElem(navLinks, "click", clickNavLinksToRedirect);

// slider functionality
const slider = document.querySelector("[data-slider]");
const prevBtn = document.querySelector("[data-prev]");
const nextBtn = document.querySelector("[data-next]");

// set slider default position
let sliderPos = 0;

// set the number of total slider ites
const totalSliderItems = 4;

// make next slider btn workable
const slideToNext = function () {
	sliderPos++;
	slider.style.transform = `translateX(-${sliderPos}00%)`;

	sliderEnd();
};
addEventOnElem(nextBtn, "click", slideToNext);
// make prev btn workable
const slideToPrev = function () {
	sliderPos--;
	slider.style.transform = `translateX(-${sliderPos}00%)`;

	sliderEnd();
};
addEventOnElem(prevBtn, "click", slideToPrev);

// check when slide end what btn should do
function sliderEnd() {
	if (sliderPos >= totalSliderItems - 1) {
		nextBtn.classList.add("disabled");
	} else {
		nextBtn.classList.remove("disabled");
	}

	if (sliderPos <= 0) {
		prevBtn.classList.add("disabled");
	} else {
		prevBtn.classList.remove("disabled");
	}
}
sliderEnd();

/**
 * product quantitiy functionality
 */
const totalPriceElem = document.querySelector("[data-total-price]");
const qtyElem = document.querySelector("[data-qty]");
const qtyMinusBtn = document.querySelector("[data-qty-minus]");
const qtyPlusBtn = document.querySelector("[data-qty-plus]");

// product default quantiy
let qty = 1;

// set product default price
let productPrice = 125;

// set initial total price
let totalPrice = 125;

const increaseProductQty = function () {
	qty++;
	totalPrice = qty * productPrice;

	totalPriceElem.textContent = `$${totalPrice}.00`;
	qtyElem.textContent = qty;
};
addEventOnElem(qtyPlusBtn, "click", increaseProductQty);

const decreaseProductQty = function () {
	if (qty > 1) qty--;
	totalPrice = qty * productPrice;
	totalPriceElem.textContent = `$${totalPrice}.00`;
	qtyElem.textContent = qty;
};
addEventOnElem(qtyMinusBtn, "click", decreaseProductQty);

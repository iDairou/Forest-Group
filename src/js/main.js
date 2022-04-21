const nav = document.querySelector(".navbar");
const navBtn = document.querySelector(".menu-btn");
const allNavItems = document.querySelectorAll(".nav-item");

const test = document.querySelector(".footer__box");
// Open/Close navbar & animate burger icon

const handleNav = () => {
	nav.classList.toggle("navbar--active");
	navBtn.classList.toggle("open");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("navbar--active");
			navBtn.classList.remove("open");
		});
	});
	navAnimation();
};

// Delay on navbar links animation

const navAnimation = () => {
	let delay = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-animation");
		item.style.animationDelay = "." + delay + "s";
		delay++;
	});
};

navBtn.addEventListener("click", handleNav);

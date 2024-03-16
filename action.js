const setheight = document.querySelector("#navbar div");
const navbg = document.querySelector("header");
const navfont = document.querySelectorAll("#navbar nav ul li a");
const navsearch = document.querySelector("#navbar nav .search button span");
const navbar = document.querySelector("nav");
const navbuttonone = document.querySelectorAll(
	"#navbar nav .line button div"
)[0];
const navbuttontwo = document.querySelectorAll(
	"#navbar nav .line button div"
)[1];
const handlenav = () => {
	const y = window.scrollY;
	const X = window.screen.width;
	if (y >= 50) {
		setheight.style.width = "5.4%";
		setheight.style.transition = "all 0.5s";
		navbg.style.background = "#fff";
		navbg.style.boxShadow = "0px 0px 6px 3px rgba(0, 0, 0, 0.06)";
		navfont.forEach((ele) => {
			if (!ele.classList.contains("active")) {
				ele.style.color = "#000";
				ele.addEventListener("mouseover", () => {
					ele.style.color = "#b11116";
				});
				ele.addEventListener("mouseout", () => {
					ele.style.color = "#000";
				});
			}
		});
		navsearch.style.color = "#000";
		navbuttonone.style.background = "#000";
		navbuttontwo.style.background = "#000";
		navbar.style.marginTop = "10px";
	} else {
		setheight.style.width = "7.4%";
		setheight.style.transition = "";
		navbg.style.background = "";
		navbg.style.boxShadow = "";
		navfont.forEach((ele) => {
			if (!ele.classList.contains("active")) {
				ele.style.color = "#fff";
				ele.addEventListener("mouseover", () => {
					ele.style.color = "#b11116";
				});
				ele.addEventListener("mouseout", () => {
					ele.style.color = "#fff";
				});
			}
		});
		if (y < 50 && X > 1200) {
			navbar.style.marginTop = "38px";
		}
		navbuttonone.style.background = "#fff";
		navbuttontwo.style.background = "#fff";
		navsearch.style.color = "#fff";
	}
};
// event
window.addEventListener("scroll", handlenav);

// resposivenavbar
const togglenavbar = () => {
	const navbox = document.getElementsByClassName("navbox")[0];
	navbox.classList.remove("remove");
	navbox.style.display = "flex";
	navbox.classList.add("slide");
};
const removenavbar = () => {
	const navbox = document.getElementsByClassName("navbox")[0];
	navbox.classList.remove("slide");
	navbox.classList.add("remove");
	setTimeout(() => {
		navbox.style.display = "none";
	}, 1000);
};
// spotlight slider
const imagecontainer = document.getElementsByClassName("imgcontain");
const timer = document.getElementsByClassName("time")[0];
const numone = document.getElementsByClassName("numone")[0];
const numtwo = document.getElementsByClassName("numtwo")[0];
console.log(numone, numtwo);
const count = imagecontainer.length;
let currentindex = 0;
numtwo.innerHTML = count;
const hello = () => {
	currentindex = (currentindex + 1) % count;
	for (i = 0; i < imagecontainer.length; i++) {
		imagecontainer[i].classList.remove("active");
	}
	imagecontainer[currentindex].classList.add("active");
	numone.innerHTML = currentindex + 1;
};

setInterval(() => {
	if (timer.className.includes("active")) {
		hello();
	} else {
		timer.classList.add("active");
		hello();
	}
}, 10000);

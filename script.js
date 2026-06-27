const cursorGlow = document.querySelector(".cursor-glow");
const navbar = document.getElementById("navbar");
const typingText = document.querySelector(".typing");
const aiCore = document.querySelector(".ai-core");
const hero = document.querySelector(".hero-content");

const roles = [
    "AI Developer",
    "Software Developer",
    "Python Developer",
    "Machine Learning Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

/* ===========================
   Mouse Effects
=========================== */

window.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    if (hero) {

        hero.style.transform = `
            perspective(1200px)
            rotateY(${x / 2}deg)
            rotateX(${-y / 2}deg)
            translate(${x / 3}px, ${y / 3}px)
        `;

    }

    if (aiCore) {

        aiCore.style.transform = `
            translate(${x * 1.5}px, ${y * 1.5}px)
            rotateY(${-x}deg)
            rotateX(${y}deg)
        `;

    }
    const heroLight = document.querySelector(".hero-light");

if(heroLight){

    heroLight.style.transform = `
        translate(${x}px, ${y}px)
        scale(1)
    `;

}

});

/* ===========================
   Navbar
=========================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(5,8,22,.75)";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(5,8,22,.35)";
        navbar.style.boxShadow = "none";

    }

});

/* ===========================
   Smooth Scroll
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

function typeEffect() {

    const current = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();

/* ===========================
   Scroll Reveal
=========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

/* ===========================
   Loader
=========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 800);

});

/* ===========================
   Stars
=========================== */

const starsContainer = document.getElementById("stars");

if (starsContainer) {

    for (let i = 0; i < 300; i++) {

        const star = document.createElement("span");

        star.classList.add("star");

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay = Math.random() * 5 + "s";
        star.style.animationDuration = (2 + Math.random() * 4) + "s";

        starsContainer.appendChild(star);

    }

}
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.18}px, ${y * 0.18}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0px,0px)";

    });

});
const shootingContainer = document.getElementById("shooting-stars");

function createShootingStar(){

    const star=document.createElement("div");

    star.classList.add("shooting-star");

    star.style.top=Math.random()*40+"%";

    star.style.left=100+Math.random()*20+"%";

    star.style.animationDuration=(1.5+Math.random()*1.5)+"s";

    shootingContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },3000);

}

setInterval(createShootingStar,2500);
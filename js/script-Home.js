const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
const heroMove= document.getElementById("hero-move");
const aboutMove=document.getElementById("about-section");

menu.addEventListener('click',function(){
    menu.classList.toggle('menuActive');
    navLinks.classList.toggle('active');
    heroMove.classList.toggle('hero-active');
    aboutMove.classList.toggle('about-active');
})


let heures = 12;
let minutes = 30;
let secondes = 59;

function afficherTemps() {
  let h = heures < 10 ? "0" + heures : heures;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = secondes < 10 ? "0" + secondes : secondes;

  document.getElementById("time").textContent = `${h} : ${m} : ${s}`;
}

function diminuerTemps() {
  if (heures === 0 && minutes === 0 && secondes === 0) {
    clearInterval(timer);
    document.getElementById("time").textContent = "Its time to EVENTLY";
  } else {
    if (secondes > 0) {
      secondes--;
    } else {
      secondes = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
        if (heures > 0) {
          heures--;
        }
      }
    }
    afficherTemps(); 
  }
}

afficherTemps();

const timer = setInterval(diminuerTemps, 1000);

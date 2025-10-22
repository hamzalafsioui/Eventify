const menu = document.getElementById('menu');
const navLinks = document.querySelector('.second-section-header');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  navLinks.classList.toggle('active');
});


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

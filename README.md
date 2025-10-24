# 🎉 Eventify — Site Web d’Événements Culturels

## 🧩 Description

**Eventify** est un site web vitrine dédié à la présentation et à la promotion d’événements culturels et artistiques.  
Le projet repose sur une structure **HTML/CSS/JS** moderne, responsive et élégante, mettant en avant une expérience utilisateur fluide et immersive.

---

## 🖥️ Pages du site

| Page | Description |
|------|--------------|
| **index.html** | Page d’accueil avec une section "Hero" immersive et un aperçu des événements. |
| **event.html** | Liste des événements à venir et passés, avec filtres par catégorie/date. |
| **events-details.html** | Détails d’un événement spécifique (date, lieu, description, images). |
| **blog.html** | Section d’articles et d’actualités liées aux festivals et événements. |
| **FAQ.html** | Foire aux questions : informations pratiques et aide pour les utilisateurs. |

---

## 🎨 Style & Design

Le style global du site repose sur une palette sombre contrastée par des accents rouges et une typographie élégante.

### 🧾 Variables principales
```css
:root {
  --red-color: #961F1F;
  --gray-color: #4F4F4F;
  --main-font: 'lato';
}
```

### ✍️ Typographies
- **Lato** : police principale, utilisée pour le corps du texte.  
- **Playfair Display** : police d’accentuation, utilisée pour les titres et éléments décoratifs.

### 📱 Responsive design
- **Desktop (≥ 1024px)** : disposition complète avec grilles et images larges.  
- **Tablette (768px – 1023px)** : contenu réorganisé et menus centrés.  
- **Mobile (≤ 767px)** : menu hamburger, texte redimensionné, éléments empilés.

---

## ⚙️ Scripts JavaScript

### Menu hamburger
Le menu responsive permet d’ouvrir/fermer la navigation sur mobile.

```js
// Menu 
const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menu.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});
```

### FAQ interactive
Chaque question peut être développée ou refermée individuellement grâce à un effet d’accordéon.

```js
var acc = document.getElementsByClassName("accordin");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
```

---

### blog Scroll vers le haute
un button qui permet de monte à la haute de la page

```js
let span=document.querySelector(".up");

window.onscroll=function () {
    // console.log(this.scrollY);
    if (this.scrollY>=100) {
        span.classList.add("show");
    }else{
        span.classList.remove("show");
    }
};
span.onclick=function () {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
```

---

### Event details changements des images

une changement moderne des images automatique

```js
//  swap images in section event details [images description]

const imagesCollections = document.querySelectorAll(".ed-content-imgs");
imagesCollections.forEach(collect=>{
    const images = collect.querySelectorAll("img");
    // console.log(images);
    let indexNextImg = 1; // 1 refer to second image after first-child

    function swapImage(){
        const prevImg = images[0]; // index 0 refer to first image (first child)
        const nextImg = images[indexNextImg]; 
        // console.log("prev:",prevImg);
        // console.log("next:" ,prevImg);

        const tempSrc = prevImg.src;
        const tempAlt = prevImg.alt;

        prevImg.src = nextImg.src;
        prevImg.alt = nextImg.alt;

        nextImg.src = tempSrc;
        nextImg.alt = tempAlt;

        // moving to next image
        indexNextImg = (indexNextImg == images.length - 1)? 1: indexNextImg + 1;
    }

    setInterval(swapImage,4000);
})
```

---

### home hero section avec une compteur

un compteur dynamique sur un event

```js
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
 setInterval(swapImage,4000);
}
```
---

## 📂 Structure du projet

```
📁 Eventify/
│
├── 📁 assets/
│   ├── 📁 fonts/
│   ├── 📁 images/
│
├── 📁 css/
│   └── style.css
│   └── Blog.css
│   └── event-details.css
│   └── style_FAQ.css
│   └── style.css
│
├── 📁 js/
│   ├── Scroll-To-Top.js
│   └── script.js
│   └── script_FAQ.js
│   └── script-Home.js
│
├── index.html
├── event.html
├── events-details.html
├── blog.html
├── FAQ.html
└── README_Eventify.md
```

---

## 🚀 Technologies utilisées

- **HTML5**
- **CSS3 (Flexbox & Grid)**
- **JavaScript (DOM, interactions)**
- **Google Fonts / Fonts locales**

---


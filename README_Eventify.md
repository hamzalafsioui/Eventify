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
│
├── 📁 js/
│   ├── menu.js
│   └── faq.js
│
├── index.html
├── event.html
├── events-details.html
├── blog.html
├── FAQ.html
└── README.md
```

---

## 🚀 Technologies utilisées

- **HTML5**
- **CSS3 (Flexbox & Grid)**
- **JavaScript (DOM, interactions)**
- **Google Fonts / Fonts locales**

---


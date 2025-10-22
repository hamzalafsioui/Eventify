
// Menu 
const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
console.log(menu);
console.log(navLinks);

menu.addEventListener('click',function(){
    navLinks.classList.toggle('active');
})
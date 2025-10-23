
// Menu 
const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
console.log(menu);
console.log(navLinks);

menu.addEventListener('click',function(){
    navLinks.classList.toggle('active');
})

//  swap images in section event details [images description]

const imagesCollections = document.querySelectorAll(".ed-content-imgs");
imagesCollections.forEach(collect=>{
    const images = collect.querySelectorAll("img");
    console.log(images);
    let indexNextImg = 1; // 1 refer to second image after first-child

    function swapImage(){
        const prevImg = images[0]; // index 0 refer to first image (first child)
        const nextImg = images[indexNextImg]; 
        console.log("prev:",prevImg);
        console.log("next:" ,prevImg);

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
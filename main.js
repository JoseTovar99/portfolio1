//new TypeIt(".first-section .hi", {
//    speed: 50,
//    waitUntilVisible: true,
//  })
//    .type("", { delay: 300 })
//    .go();
//
    
const hamburger = document.getElementById("hamburger");
const aboutList = document.getElementById("about-list");

hamburger.addEventListener('click', () => {
    aboutList.classList.toggle('show');
});


//const [red, green, blue] = [69, 111, 225]
//const section1 = document.querySelector('.container2')
//
//window.addEventListener('scroll', () => {
//  const y = 1 + (window.scrollY || window.pageYOffset) / 150
//  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
//  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
//})
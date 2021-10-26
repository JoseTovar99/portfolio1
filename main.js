//new TypeIt(".first-section .hi", {
//    speed: 50,
//    waitUntilVisible: true,
//  })
//    .type("", { delay: 300 })
//    .go();
//
    
const hamburger = document.getElementsByClassName("hamburger");
const aboutList = document.getElementsByClassName("about-list");

hamburger.addEventListener('click', () => {
    aboutList.classList.toggle('show');
})
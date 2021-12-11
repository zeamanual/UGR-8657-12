let navMenu = document.querySelector('.nav-menu');
let menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click',()=>{
    const visibility = navMenu.getAttribute('data-visible')
        navMenu.classList.toggle('visible')

})
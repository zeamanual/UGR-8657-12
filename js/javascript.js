let navMenu = document.querySelector('.navigation__menu');
let menuButton = document.querySelector('.navigation__button');
menuButton.addEventListener('click',()=>{
        navMenu.classList.toggle('visible')

})

let leftSlider = document.querySelector('.card-container__slider--left-side')
let rightSlider = document.querySelector('.card-container__slider--right-side')
let cardContainer = document.querySelector('.card-container__inner-container')
let position = 0;
leftSlider.addEventListener('click',()=>{
    if(position==0){
    }else{
        position += 30
        cardContainer.style.transform = `translatex(${position}vw)`
    }
})
rightSlider.addEventListener('click',()=>{
    if(position < -30){

    }else{
        position -= 30
        cardContainer.style.transform = `translatex(${position}vw)`
    }
   
})
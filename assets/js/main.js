/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click',() =>{
        modal(i)

    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })  
    })
})

var mixitup = require('mixitup');
var mixerPortfolio = mixitup('.container');
let mixerPortfolio = mixitup(work__container, {
    selectors: {
        target: 'work__card'
    },
    animation: {
        duration: 300
    }

})


const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(i=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))
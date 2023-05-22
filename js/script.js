const open_Btn = document.querySelector(".open-icon");
const close_Btn = document.querySelector(".close-icon")
const header_Class = document.querySelector(".section-hero");
const stickyBar = document.querySelector('.sticky');
const navBar = document.querySelector('section-nav');

open_Btn.addEventListener('click',function(){
    header_Class.classList.add('open-mobile-nav')
});

close_Btn.addEventListener('click',function(){
    header_Class.classList.remove('open-mobile-nav')
});
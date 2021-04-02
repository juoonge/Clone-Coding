const toggleBtn=document.querySelector(".navbar_toggleBtn");
const menu=document.querySelector(".navbar_menu");
const applyBtn=document.querySelector(".applyBtn"); 
const modalbg=document.querySelector(".modal_bg");
const modalwrap=document.querySelector(".modal_wrap");
const submitBtn=document.querySelector(".submitBtn");
const closeBtn=document.querySelector(".modal_closeBtn");

SHOWING="showing";

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
})

applyBtn.addEventListener('click',()=>{
    modalbg.classList.toggle(SHOWING);
    modalwrap.classList.toggle(SHOWING);
})

submitBtn.addEventListener('click',()=>{
    modalwrap.classList.toggle(SHOWING);
    modalbg.classList.toggle(SHOWING);
})

closeBtn.addEventListener('click',()=>{
    modalwrap.classList.toggle(SHOWING);
    modalbg.classList.toggle(SHOWING);
})

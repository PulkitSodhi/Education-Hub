window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll' , window.scrollY >0)
})


const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('#faq_icon ');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className ='fa-solid fa-minus';
        }else{
            icon.className = 'fa-solid fa-plus';
        }
    })
})

// nav
const menu= document.querySelector(".nav_menu");
const menuBtn= document.querySelector("#open-menu-btn");
const closeMenuBtn= document.querySelector("#close-menu-btn");
menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeMenuBtn.style.display="inline-block";
    menuBtn.style.display="none";
})
const closeNav=()=>{
    menu.style.display="none";
    closeMenuBtn.style.display="none";
    menuBtn.style.display="inline-block";
}
closeMenuBtn.addEventListener('click', closeNav)
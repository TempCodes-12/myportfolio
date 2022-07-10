const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})

document.querySelectorAll('.mobo-nav-link').forEach(n => n.
    addEventListener("click",() =>{
        hamburger.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    }))

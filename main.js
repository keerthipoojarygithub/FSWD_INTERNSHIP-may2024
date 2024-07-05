let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}
Window.onscroll = () => {
    navbar.classList.remove('active');
}
let darkmode = document.querySelector('#darkmode');

darkmode.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkmode.querySelector('i').classList.replace('bx-moon', 'bx-sun');
    } else {
        darkmode.querySelector('i').classList.replace('bx-sun', 'bx-moon');
    }
});


const sr = ScrollReveal ({
    origin:'top',
    distance:'40px',
    duration:2000,
    reset:true
});

sr.reveal('.home-text, .home-img, .about-img, .about-text, .box, .s-box, .connect-text, .btn, .contact-box {interval:200}');
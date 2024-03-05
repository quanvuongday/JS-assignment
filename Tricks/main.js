const header = document.querySelector('header');
const backToTop = document.querySelector('#backToTop');
const mobBtn = document.querySelector('.mobile');
const nav = document.querySelector('nav ul');
const menuItem = document.querySelector('nal ul li a');
const modalBtn = document.querySelector('.modalButton');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.closeButton');



const toggleModal= () => {
    overlay.classList.toggle('visible');
};




const toggleMenu = () => {
nav.classList.toggle('responsive');
};

mobBtn. addEventListener('click', toggleMenu);
menuItem.forEach(item => item.addEventListener ('click', toggleMenu));

// document.querySelector('#backToTop').addEventListener('click', () => {
backToTop.addEventListener('click', () => {

    document.body.scrollTop = 0; //for Safari (Macs)
    // document.documentElement.scrollTop = 0;  //Chrome, FF, others
    header.style.backgroundColor = 'pink';
    header.classList.toggle('bg');
});

window.onscroll = function () {
    scrollFunction ();
};

const  scrollFunction = () => {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop >200
    ) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';

    }
};

modalBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);
mobBtn. addEventListener('click', toggleMenu);
menuItem.forEach(item => item.addEventListener ('click', toggleMenu));
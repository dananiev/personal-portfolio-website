// menu show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');


// active and remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navLink.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show')
}

navLink.forEach(link => link.addEventListener('click', linkAction));


// activate projects nav::after when clicking "projects" button
const projectsBtn = document.querySelector('.home__btn');
projectsBtn.addEventListener('click', projectButtonClick);
const projectsLink = document.getElementById('after');

function projectButtonClick() {
    navLink.forEach(link => link.classList.remove('active'));
    projectsLink.classList.add('active');
}


// scroll reveal animation
const scroll = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


// scroll home
scroll.reveal('.home__title', {});
scroll.reveal('.button', {delay: 200});
scroll.reveal('.home__img', {delay: 400});
scroll.reveal('.home__social-icon', {interval: 200});

// scroll about
scroll.reveal('.about__img', {});
scroll.reveal('.about__subtitle', {delay: 400});
scroll.reveal('.about__text', {delay: 400});

// scroll skills
scroll.reveal('.skills__subtitle', {})
scroll.reveal('.skills__text', {})
scroll.reveal('.skills__data', {interval: 200})
scroll.reveal('.skills__img', {delay: 600})

// scroll projects
scroll.reveal('.project__img', {interval: 200});

// scroll contact
scroll.reveal('.contact-items', {interval: 200});
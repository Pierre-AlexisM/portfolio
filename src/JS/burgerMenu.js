const nav = document.getElementById('navBar');
const burgerIcon = document.getElementById('burgerIcon');
const logo = document.getElementById('logo');

burgerIcon.addEventListener('click', function() {
    nav.classList.toggle('is-open')
});

if (nav.classList('is-open')) {
    logo.classList.toggle('is-open')
}
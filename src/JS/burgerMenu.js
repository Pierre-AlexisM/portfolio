const nav = document.getElementById('navBar');
const burgerIcon = document.getElementById('burgerIcon');

burgerIcon.addEventListener('click', function() {
    nav.classList.toggle('is-open')
});
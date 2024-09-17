window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('colorPicker').addEventListener('input', (event) => {
    const navbar = document.getElementById('navbar');
    navbar.style.backgroundColor = event.target.value;
});


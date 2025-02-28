console.log('++++')


const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked'); // Это сообщение должно появляться в консоли
    mobileMenu.classList.toggle('hidden');
});

// ndsklkl
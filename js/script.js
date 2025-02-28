console.log('++++')


const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.onclick = () => {
    mobileMenu.classList.toggle('hidden');
};

const text = "зарабатывайте вместе с нами";
const typingTextElement = document.getElementById('typing-text');

let index = 0;

function type() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150); // Задержка между символами
    }
}

// Задержка перед началом печати (2 секунды)
setTimeout(type, 4000);

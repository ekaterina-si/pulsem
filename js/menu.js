const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('hidden');
})

const links = menu.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', closeMenu);
})

document.addEventListener('click', (event) => {
  if (event.target === menu) {
    closeMenu();
  }
})

function closeMenu() {
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
  document.body.classList.remove('hidden');
}
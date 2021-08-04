const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  nav.classList.toggle('active');
});

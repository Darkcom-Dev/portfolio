const darkModeToggle = document.getElementById('dark-mode-toggle');
const root = document.documentElement;

darkModeToggle.addEventListener('click', () => {
  //toggleIcon.classList.toggle('fa-sun'); // Modo claro
  //toggleIcon.classList.toggle('fa-moon'); // Modo oscuro
  let themeToSet = root.style.getPropertyValue('color-scheme') === 'light' ? 'dark' : 'light'; 
  root.style.setProperty('color-scheme', themeToSet);
});
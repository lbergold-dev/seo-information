document.addEventListener('DOMContentLoaded', () => {
  const colorSwitcher = document.querySelector('[data-color-switcher]');
  const savedTheme = localStorage.getItem('theme') || 'light';

  const setTheme = theme => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    colorSwitcher.classList.toggle('color-switcher--dark', theme === 'dark');
    colorSwitcher.classList.toggle('color-switcher--light', theme === 'light');
  };

  setTheme(savedTheme);

  colorSwitcher.addEventListener('click', () => {
    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
});

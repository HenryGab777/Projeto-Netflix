class ThemeManager {
  constructor() {
    this.body = document.body;
    this.toggleInput = document.getElementById('theme-toggle');
    this.init();
  }

  init() {
    this.toggleInput.addEventListener('change', () => this.toggleTheme());
    const savedTheme = localStorage.getItem('netflix-theme');
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
    this.applyTheme(initialTheme);
  }

  applyTheme(theme) {
    this.body.classList.remove('dark-mode', 'light-mode');
    this.body.classList.add(theme + '-mode');
    localStorage.setItem('netflix-theme', theme);
    this.updateToggle(theme);
  }

  toggleTheme() {
    const nextTheme = this.toggleInput.checked ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  updateToggle(theme) {
    this.toggleInput.checked = theme === 'light';
  }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});
const html = document.documentElement;
const localStorage = window.localStorage;

const themeHelper = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove('dark');
    localStorage.setItem("theme", "light");
  }
}

export { themeHelper };
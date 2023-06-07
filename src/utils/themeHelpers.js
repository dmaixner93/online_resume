const localStorage = window.localStorage;

const themeHelper = () => {
  const themeInStorage = ('theme' in localStorage);
  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem('theme') === 'dark';
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (themeInStorage === 'dark' || prefersDarkTheme) {
    return 'dark'
  } else {
    return 'light'
  }
}

export { themeHelper };
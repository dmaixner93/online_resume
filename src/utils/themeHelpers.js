const localStorage = window.localStorage;

const themeHelper = {
  checkSitePreference() {
    const themeInStorage = ('theme' in localStorage);
    const prefersDarkTheme = localStorage.getItem('theme') === 'dark';

    if (themeInStorage) {
      if (prefersDarkTheme) {
        return {
          theme: 'dark',
          src: 'site'
        }
      }
      return {
          theme: 'light',
          src: 'site'
        }
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return {
        theme: 'dark',
        src: 'system'
      }
    }
    return {
      theme: 'light',
      src: 'system'
    }
  },
}

export { themeHelper };
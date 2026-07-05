export const themeInitScript = `
(function () {
    try {
        var root = document.documentElement;
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var resolved = stored === 'dark' || stored === 'light'
            ? stored
            : prefersDark
              ? 'dark'
              : 'light';

        if (resolved === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    } catch (e) {}
})();
`.trim();

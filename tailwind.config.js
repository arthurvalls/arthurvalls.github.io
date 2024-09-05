
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode based on a class
  theme: {
    extend: {
      fontFamily: {
        'custom': ['ZedMono', 'monospace'],
      },
      colors: {
        // Gruvbox Light Palette
        'gruvbox-light-bg0': '#fbf1c7',
        'gruvbox-light-bg1': '#ebdbb2',
        'gruvbox-light-bg2': '#d5c4a1',
        'gruvbox-light-bg3': '#bdae93',
        'gruvbox-light-bg4': '#a89984',
        'gruvbox-light-fg0': '#282828',
        'gruvbox-light-fg1': '#3c3836',
        'gruvbox-light-fg2': '#504945',
        'gruvbox-light-fg3': '#665c54',
        'gruvbox-light-fg4': '#7c6f64',
        'gruvbox-light-red': '#fb4934',
        'gruvbox-light-green': '#b8bb26',
        'gruvbox-light-yellow': '#b57614',
        'gruvbox-light-blue': '#076678',
        'gruvbox-light-purple': '#d3869b',
        'gruvbox-light-aqua': '#8ec07c',
        'gruvbox-light-orange': '#fe8019',

        // Gruvbox Dark Palette
        'gruvbox-dark-bg0': '#282828',
        'gruvbox-dark-bg1': '#3c3836',
        'gruvbox-dark-bg2': '#504945',
        'gruvbox-dark-bg3': '#665c54',
        'gruvbox-dark-bg4': '#7c6f64',
        'gruvbox-dark-fg0': '#ebdbb2',
        'gruvbox-dark-fg1': '#d5c4a1',
        'gruvbox-dark-fg2': '#bdae93',
        'gruvbox-dark-fg3': '#a89984',
        'gruvbox-dark-fg4': '#928374',
        'gruvbox-dark-red': '#fb4934',
        'gruvbox-dark-green': '#b8bb26',
        'gruvbox-dark-yellow': '#fabd2f',
        'gruvbox-dark-blue': '#83a598',
        'gruvbox-dark-purple': '#d3869b',
        'gruvbox-dark-aqua': '#8ec07c',
        'gruvbox-dark-orange': '#fe8019',
      },
    },
  },
  plugins: [],
}


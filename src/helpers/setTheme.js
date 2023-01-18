export const setTheme = (theme) => {
    localStorage.setItem('theme', theme)
    document.querySelector('html').setAttribute('theme', localStorage.getItem('theme'))
}

export default setTheme

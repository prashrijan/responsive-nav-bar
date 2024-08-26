const menu = document.querySelector('.ri-menu-line')
const sideBar = document.querySelector('.sidebar')
const cross = document.querySelector('.ri-close-line')

const toggleSideBar = () => {
    sideBar.classList.toggle('visible');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    cross.style.display = cross.style.display === 'block' ? 'none' : 'block';
}

if (menu && sideBar && cross) {
    menu.addEventListener('click', toggleSideBar);
    cross.addEventListener('click', toggleSideBar);
}

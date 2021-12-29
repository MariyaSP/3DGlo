const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const handlMenu = () => {
        menu.classList.toggle('active-menu');
    }

    menu.addEventListener('click', (e) => {
            if (e.target.closest('li>a') || e.target.closest('.close-btn'))
            menu.classList.toggle('active-menu');
    })

    menuBtn.addEventListener('click', handlMenu);

}
export default menu;
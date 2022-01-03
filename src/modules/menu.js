const menu = () => {

    const body = document.querySelector('body');

    body.addEventListener('click', (e) => {
        const menu = document.querySelector('menu');

        if (e.target.closest('.menu') ||
            e.target.closest('li>a') ||
            e.target.closest('.close-btn') ||
            (!e.target.classList.contains('active-menu') && menu.classList.contains('active-menu'))) {
            menu.classList.toggle('active-menu');
        }
    })

}
export default menu;
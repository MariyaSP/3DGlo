const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const handlMenu = () => {
        menu.classList.toggle('active-menu');
    }

    menu.addEventListener('click', (e) => {
        if (!e.target.closest('menu')) console.log("мимо");
        
        if (!e.target.classList.contains('active-menu')) console.log("мимо");

        // if (e.target.closest('li>a') || e.target.closest('.close-btn') || e.target.classList.contains('active-menu'))
        //     menu.classList.toggle('active-menu');
    })

    menuBtn.addEventListener('click', handlMenu);

}
export default menu;
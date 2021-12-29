const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');

    console.log(body);

    const handlMenu = () => {
        menu.classList.toggle('active-menu');
    }
    body.addEventListener('click', (e) => {

        if (e.target.closest('.menu') || e.target.closest('li>a') || e.target.closest('.close-btn') || !e.target.classList.contains('active-menu')) 
        handlMenu();
        else console.log("not menu");
    })

}
export default menu;
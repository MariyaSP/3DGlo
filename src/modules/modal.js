const modal = () => {

    const modals = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');

    let sizeW;


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeW = document.documentElement.clientWidth;
            modals.style.transition = `0.5s`;
            modals.style.opacity = 0;
            modals.style.display = 'block';
            console.log(sizeW);

            if (sizeW > 768) {

                setTimeout(() => {
                    modals.style.opacity = 1;
                }, 500);
            }
            else {
                modals.style.transition = `none !important`;
                modals.style.opacity = 1;
            }
        })
    });

    modals.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close'))
            modals.style.display = 'none';
    })
};


export default modal;
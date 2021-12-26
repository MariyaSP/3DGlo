const modal = () => {

    const modals = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modals.querySelector('.popup-close');
    let sizeW;

    // window.addEventListener('resize', () => {
    //     sizeW = document.documentElement.clientWidth;
    //     console.log(sizeW);
    // })

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

    closeBtn.addEventListener('click', () => {
        modals.style.display = 'none';
    });

};


export default modal;
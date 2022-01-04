import { animate } from './helpers'
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
            
            if (sizeW > 768) {

                setTimeout(() => {
                    animate({
                        duration: 100,
                        timing(timeFraction) {
                            return timeFraction;
                        },
                        draw(progress) {
                            modals.style.opacity = progress;
                        }
                    });
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
import { animate } from './helpers';

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');
    total.style.left = "0%"
    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value && calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }
        if (calcCount.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.Value < 10) {
            calcDayValue = 1.5;
        }


        if (calcTypeValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }

        setTimeout(() => {
            animate({
                duration: 2000,
                timing(timeFraction) {
                    return Math.pow(timeFraction, 5)
                },
                draw(progress) {
                    total.style.width = progress * 60 + '%';
                    total.textContent = Math.round(progress * totalValue);

                }
            });
        }, 500);

    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType ||
            e.target === calcSquare ||
            e.target === calcCount ||
            e.target === calcDay)
            countCalc();
    });

};
export default calc;
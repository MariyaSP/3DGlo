import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import cost from "./modules/cost";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";


timer('25 december 2021');
menu();
modal();
cost();
tabs();
calc(100);
slider('.portfolio-content','.portfolio-item', '.portfolio-dots');

const forms = ['form1', 'form2', 'form3']
forms.forEach((form) => {

    sendForm({
        formId: form,
        someElem: [
            {
                type: 'block',
                id: 'total'
            }
        ]
    });
})
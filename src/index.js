import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import cost from "./modules/cost";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";


<<<<<<< HEAD
timer('25 december 2021');
menu();npx
=======
timer('16 january 2022');
menu();
>>>>>>> finish
modal();
cost();
tabs();
calc(100);
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');

<<<<<<< HEAD
// const forms = ['form1', 'form2', 'form3']
// forms.forEach((form) => {

//     sendForm({
//         formId: form,
//         someElem: [
//             {
//                 type: 'block',
//                 id: 'total'
//             }
//         ]
//     });
// })
=======
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
>>>>>>> finish

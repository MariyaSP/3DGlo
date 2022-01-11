const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
<<<<<<< HEAD
    const statusBlock = document.createElement('div');
    
=======
    form.querySelector('input[type="email"]').required = true;

    const statusBlock = document.createElement('div');
    let label = '';
    let str = '';
>>>>>>> finish
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const succesText = 'Данные отправлены';

    const validate = (list) => {
<<<<<<< HEAD
        let success = true;
        let reg;
        list.forEach(inp => {

            switch (inp.name) {
                case 'user_message':
                    reg = /^[а-яА-Я]+(([\?\!\,\. ][а-яА-Я ])?[а-яА-Я]*)*$/;
                    console.log(reg.test(inp.value) + ' собщение');
                    if (!reg.test(inp.value)) 
                    success = false;
                    break;
                case 'user_phone':
                    reg = /[^0-9\-\)\(\+]/;               //формат телефона 8 (999) 123-45-64
                    console.log(reg.test(inp.value) + ' тел');
                    if (!reg.test(inp.value))
                        success = false;
=======
        label = '';
        let success = true;
        let reg;
        list.forEach(inp => {
            
            str = (inp.value).trim();
            switch (inp.name) {
                case 'user_message':
                    reg = /^[а-яА-Я]+(([\?\!\,\. ][а-яА-Я ])?[а-яА-Я]*)*$/;

                    if (!reg.test(inp.value)) {
                        success = false;


                    }

                    break;
                case 'user_phone':
                    reg = /[\d()-]/g;               //формат телефона 8 (999) 123-45-64
                    // console.log(reg.test(inp.value) + ' тел');
                    if (!reg.test(inp.value) || str.length < 11) {
                        success = false;
                        label += ' / слишком короткий номер /';
                    }

>>>>>>> finish
                    break;

                case 'user_name':
                    reg = /^[а-яА-Я]+(([ ][а-яА-Я ])?[а-яА-Я]*)*$/;
<<<<<<< HEAD
                    console.log(reg.test(inp.value)+' имя');
                    if (!reg.test(inp.value))
                        success = false;
=======
                    if (!reg.test(inp.value) || str.length < 2) {
                        success = false;
                        label += ' имя слишком короткое';
                    }

>>>>>>> finish
                    break;

            }
        })
<<<<<<< HEAD
console.log(success+ '   итог');
=======
        
>>>>>>> finish
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElemrnts = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            }
            else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });
<<<<<<< HEAD

        console.log('результат' + validate(formElemrnts));

=======
        
>>>>>>> finish
        if (validate(formElemrnts)) {

            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = succesText;
                    formElemrnts.forEach(input => {
                        input.value = '';
                    });
<<<<<<< HEAD
=======

                    setTimeout(() =>{
                        statusBlock.textContent = '';
                    }, 5000);
>>>>>>> finish
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });

        } else {
<<<<<<< HEAD
            statusBlock.textContent = errorText;
=======
            statusBlock.textContent = label;
>>>>>>> finish

        }
    }


    try {

        if (!form) {
            throw new Error('Верните Вилли');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();

        })
    } catch (error) {
        console.log(error.message);
    }
}

export default sendForm
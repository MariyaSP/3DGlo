const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const succesText = 'Данные отправлены';

    const validate = (list) => {
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
                    break;

                case 'user_name':
                    reg = /^[а-яА-Я]+(([ ][а-яА-Я ])?[а-яА-Я]*)*$/;
                    console.log(reg.test(inp.value)+' имя');
                    if (!reg.test(inp.value))
                        success = false;
                    break;

            }
        })
console.log(success+ '   итог');
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

        console.log('результат' + validate(formElemrnts));

        if (validate(formElemrnts)) {

            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = succesText;
                    formElemrnts.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });

        } else {
            statusBlock.textContent = errorText;

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
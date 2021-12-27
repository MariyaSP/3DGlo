const cost = () => {

    const inputText = document.querySelectorAll('input[name=user_name]');
    const inputEmail = document.querySelectorAll('input[name=user_email]');
    const inputTel = document.querySelectorAll('input[name=user_phone]');
    const inputMes = document.querySelectorAll('input[placeholder="Ваше сообщение"]');
    

    const validateFunc = function (typeVal, e) {
        
        switch(typeVal){
            case 'text': e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, ''); break;
            case 'email':  e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g, ''); break;
            case 'tel':  e.target.value = e.target.value.replace(/[^0-9\-\)\(]/, ''); break;

        }
    }

    inputText.forEach(inp => {
        inp.addEventListener('input', (e) => {validateFunc('text',e )});
    });

    inputEmail.forEach(inp => {
        inp.addEventListener('input', (e) => {validateFunc('email', e)});
    });

    inputTel.forEach(inp => {
        inp.addEventListener('input', (e) => {validateFunc('tel', e)});
    });

    inputMes.forEach(inp => {
        inp.addEventListener('input', (e) => {validateFunc('text', e)});
    });


};

export default cost;
const cost = () => {

    const inputCalc = document.querySelectorAll('.calc-item');
    const inputForm = document.querySelectorAll('form');

    inputCalc.forEach(inp => {
        if (!inp.classList.contains('calc-type')) {
            inp.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^\d]/g, '');
            })
        }
    });

    inputForm.forEach(form => {

        form.querySelector('input[type=text]').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, '');
        });
        form.querySelector('input[type=tel]').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\-\)\(]/, '');
        });
        form.querySelector('input[type=email]').addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/([^A-Za-z0-9_!~\'\-\.])+\@/g, '');
        });

        if(form.querySelector('input[placeholder="Ваше сообщение"]'))
        {
            form.querySelector('input[placeholder="Ваше сообщение"]').addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, '');
            });
        }

    })

};

export default cost;
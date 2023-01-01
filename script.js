const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function(event) {

    if(!event.target.classList.contains('calc-btn')) return;

    const value = event.target.innerHTML;

    switch (value) {
        case 'C':
            result.innerHTML = '';
            break;
        
        case '=':
            if(result.innerHTML.search(/[^0-9*/+-.]/mi) != -1) return;
            
            result.innerText = eval(result.innerHTML)
            break;

        default:
            result.innerHTML += value;
    }

    if(result.innerHTML === "Infinity") {
        result.innerHTML = "Ділити на 0 не можна"
    }  
})
let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('.btn'));
let operators = Array.from(document.querySelectorAll('.operator'));
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');

buttons.map( button => {
    button.addEventListener('click', (e) => {
        display.value += e.target.value;
    })
});

equal.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});

clear.addEventListener('click', () => {
    display.value = '';
});

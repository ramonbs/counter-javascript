var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

const ElementAdicionar = document.getElementById('adicionar');
const ElementSubtrair = document.getElementById('subtrair');

ElementAdicionar.addEventListener("click", increment);

ElementSubtrair.addEventListener("click", decrement);

function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber > 0) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}
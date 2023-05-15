let result = document.getElementById('result');
let resultList = document.getElementById('resultList');
const limparListaBtn = document.getElementById('limparListaBtn');
limparListaBtn.addEventListener('click', limparLista);

function appendToResult(value) {

    if (result.value === '0') {
        result.value = '';
    }

    result.value += value;
}

function clearResult() {
    result.value = '';
    result.value = 0;
}

function deleteLastDigit() {
    if (result.value === "") {
        result.value = 0;
    } else {
        result.value = result.value.slice(0, -1);
    }
}

function calcularSoma() {
    const listaResultados = document.querySelectorAll('#resultList li');
    let soma = 0;

    listaResultados.forEach(item => {
        const resultado = item.textContent.split('=')[1].trim();
        soma += parseFloat(resultado);
    });

    const somaResultElement = document.getElementById('somaResult');
    somaResultElement.textContent = 'Total da soma: ' + soma;
}



function calculadoraResultado() {
    try {
        const resultado = eval(result.value);
        const listItem = document.createElement('li');
        listItem.textContent = `${result.value} = ${resultado}`;
        listItem.classList.add('result-item');
        resultList.appendChild(listItem);
        result.value = resultado;

        calcularSoma();
    } catch (err) {
        result.value = 0;
    }





}


function limparLista() {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
    calcularSoma(); // Recalcula a soma após limpar a lista
}

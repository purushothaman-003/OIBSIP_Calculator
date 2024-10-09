function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
}

function calculateResult() {
    let result = document.getElementById('result').value;
    if (result) {
        document.getElementById('result').value = eval(result);
    }
}

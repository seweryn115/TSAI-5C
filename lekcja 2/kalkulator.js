let a = parseInt(prompt("Podaj liczbe a: "));

let b = parseInt(prompt("Podaj liczbe b: "));

let c = prompt("Podaj działanie (dodawanie, odejmowanie, mnożenie, dzielenie, modulon):");
let wynik = "";
function dodawanie(a, b) {
    return a + b;
}

function odejmowanie(a, b) {
    return a - b;
}

function mnozenie(a, b) {
    return a * b;
}

function dzielenie(a, b) {
    if (b === 0) {
        alert("nie wolno dzielić przez zero")
    } else {
        return a / b;
    }
}

function modulon(a, b) {
    if (b === 0) {
        alert("nie wolno dzielić przez zero")
    } else {
        return a % b;
    }
}

switch (c) {
    case '+':
        wynik = dodawanie(a, b);
        break;
    case '-':
        wynik = odejmowanie(a, b);
        break;
    case '*':
        wynik = mnozenie(a, b);
        break;
    case '/':
        wynik = dzielenie(a, b);
        break;
    case '%':
        wynik = modulon(a, b);
        break;
        default:
            wynik = "ERROR";

}
alert(wynik)
document.getElementById('jeden').style.backgroundColor = 'blue';
document.getElementById('dwa').style.backgroundColor = 'brown';
document.getElementById('trzy').style.backgroundColor = 'yellow';
document.getElementById('cztery').style.backgroundColor = 'pink';


let kwadrat = document.querySelectorAll(".kwadrat")
for(let i=0; i<kwadrat.length; i++){
    console.log(kwadrat[i]);
    kwadrat[i].style.backgroundColor = "yellow";
    kwadrat[i].textContent = 'To jest '
}

let liczba = 0;
function clicker(){
    liczba++
    console.log("To jest " + liczba "kliknięcie")
}
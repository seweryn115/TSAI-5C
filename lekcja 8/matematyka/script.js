document.querySelector("#stozek1").addEventListener("click", () => {
    document.querySelector("#stozek1").computedStyleMap.visibility = "visible";
})
document.querySelector("#kula1").addEventListener("click", () => {
    document.querySelector("#kula1  ").computedStyleMap.visibility = "visible";
})
document.querySelector("#ostroslup1").addEventListener("click", () => {
    document.querySelector("#ostroslup1").computedStyleMap.visibility = "visible";
})

document.querySelector("#stozek1").addEventListener("click", (e) => {
    e.preventDefault();
    let r = document.querySelector("#promien_stozek").value;
    let h = document.querySelector("#wysokosc_stozek").value;
    let l = document.querySelector("#tworząca_stozek").value;
    let v = (1 / 3) * 3.14 * r ** 2 * h
    let pb = 3.14 * r * l;
    const wynik = document.createElement("p");
    wynik.textContent = "Objętość stożka wynosi: "+ v + " a pole powierzchni bocznej wynosi: " + pb
    span.appendChild(wynik)
})

document.querySelector("#kula1").addEventListener("click", (e) => {
    e.preventDefault();
    let r = document.querySelector("#promien_kula").value;
    let v = (4 / 3) * 3.14 * r ** 3;
    let pc = 4 * 3.14 * r ** 2;
    const wynik = document.createElement("p");
    wynik.textContent = "Objętość kuli wynosi: "+ v + " a pole powierzchni wynosi: " + pc
    span.appendChild(wynik)
})

document.querySelector("#ostroslup1").addEventListener("click", (e) => {
    e.preventDefault();
    let a = document.querySelector("#podstawa_ostroslup").value;
    let h = document.querySelector("#wysokosc_ostroslup").value;
    let v = (1 / 3) * a ** 2 * h;
    const wynik = document.createElement("p");
    wynik.textContent = "Objętość ostrosłupa wynosi: "+ v
    span.appendChild(wynik)
})
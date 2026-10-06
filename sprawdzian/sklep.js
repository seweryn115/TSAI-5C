let produkty = ["buty", "koszulka", "spodnie", "piłka"]
let cena = [150, 50, 75, 100]
let lista = []
let wybranie = prompt("wybierz produkty: \n1. buty, \n2. koszulka, \n3. spodnie, \n4. piłka")

wybranie.push(wybrane)

while (wybrane != "QUIT") {
    wybrane = prompt("wybierz produkty: \n1. buty, \n2. koszulka, \n3. spodnie, \n4. piłka lub wpisz QUIT aby wyjść: ")
    if (wybrane === "QUIT") {
        continue
    }
    wybranie.push(wybrane)
    alert(wybrane)
}






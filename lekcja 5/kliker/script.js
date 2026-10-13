        let count = 0;
        const counterElement = document.getElementById("licznik");

        function clickButton() {
            count++;
            counterElement.textContent = count;
        }
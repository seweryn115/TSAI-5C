// function createP() {
//     const newP = document.createElement('p')

//     newP.classList.add('newP')

//     let main = document.querySelector('main')

//     newP.textContent = "To jest stworznoy przez JS praragraf"

//     main.appendChild(newP)

// }


// createP()

btn.addEventListener("click",()=>{

    const newP = document.createElement('p')

    newP.classList.add('newP')

    let main = document.querySelector('main')

    newP.textContent = "To jest stworznoy przez JS praragraf"

    main.appendChild(newP)

})
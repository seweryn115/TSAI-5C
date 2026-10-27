let playersDeck = document.querySelectorAll('.player')
let enemyDeck = document.querySelectorAll('.enemy')
let playerTable = document.querySelector('.player-side')
let enemyTable = document.querySelector('.enemy-side')

playersDeck.forEach((playerCard)=>{
    playerCard.addEventListener('click', ()=>{
        playerCard.classList.add('picked');
        playerTable.appendChild(playerCard)
        selectedPlayerCard = playerCard
        compareCards()
    })
})
 
enemyDeck.forEach((enemyCard)=>{
    enemyCard.addEventListener('click', ()=>{
        enemyCard.classList.add('picked');
        enemyTable.appendChild(enemyCard)
        selectedEnemyCard = enemyCard
        compareCards()
    })
})
  


console.log("PC:", selectedEnemyCard)
console.log("EC:", selectedPlayerCard)
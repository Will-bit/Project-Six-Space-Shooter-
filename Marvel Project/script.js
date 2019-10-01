var shooter = document.getElementById("player-controlled-ship");
var gameArea = document.getElementById("gameArea");



// Determines if the ship will move out of play area | Top & Bottom
function moveUp(){
    /// To fetch styles written in the css file, computed was used.
    let topPosition = window.getComputedStyle(shooter).getPropertyValue('top')
    if (shooter.style.top === "0px") {
        return
    } else {
        let position = parseInt(topPosition)
        position -=4
        shooter.style.top = `${position}px`
    }
}
function moveLeft(){
    let topPosition = window.getComputedStyle(shooter).getPropertyValue('left')
    if (shooter.style.left === "0px"){
        return
    } else {
        let position = parseInt(topPosition)
        position -= 4
        shooter.style.left = `${position}px`
    }
}


function moveRight(){
    let topPosition = window.getComputedStyle(shooter).getPropertyValue('left')
    if (shooter.style.left === "560px"){
        return
    } else {
        let position = parseInt(topPosition)
        position += 4
        shooter.style.left = `${position}px`
    }
}


function moveDown(){
    let topPosition = window.getComputedStyle(shooter).getPropertyValue('top')
    if (shooter.style.top === "560px"){
        return
    } else { 
        let position = parseInt(topPosition)
        position += 4
        shooter.style.top = `${position}px`
    }
}
////  Assigning UP, Down, And Space.  Call functions.
    function shipFlight(event) {
        if (event.key === "ArrowUp"){
            event.preventDefault()
                moveUp()
             } else if (event.key === "ArrowDown") {
                 event.preventDefault()
                 moveDown()
             } else if (event.key === " ") {
                 event.preventDefault()
                 fireLaser()
             } else if (event.key === "ArrowLeft"){
                 event.preventDefault()
                 moveLeft()
             } else if (event.key === "ArrowRight"){
                 event.preventDefault()
                 moveRight()
             }
    }
window.addEventListener("keydown", shipFlight)


function fireLaser() {
    let laser = createLaserElement()
    gameArea.appendChild(laser)
    moveLaser(laser)
  }

  function magicBlast(){
      let magic = createMagicElement()
          gameArea.appendChild(magic)
          moveMagic(magic)
      
  }

  function moveMagic(magic){
      let magicInterval = setInterval(() =>{
          let xPosition = parseInt(magic.style.left)
          if (xPosition === 560){
              magic.remove()
          } else {
              magic.style.left = `${xPosition + 4}px`
          }
      }, 20)
  }

  function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(shooter).getPropertyValue('left'))
    let yPosition = parseInt(window.getComputedStyle(shooter).getPropertyValue('top'))
    let newLaser = document.createElement('img')
    newLaser.src = 'images/laser.png'
    newLaser.classList.add('laser')
    newLaser.style.left = `${xPosition}px`
    newLaser.style.top = `${yPosition - 10}px`
    return newLaser
  }
  
  //  Currently moving at 4 px, 10 mili seconds.
  function moveLaser(laser) {
      let laserInterval = setInterval(() => {
          let xPosition = parseInt(laser.style.left) 
          if (xPosition === 340) {
              laser.remove()
             } else {
                 laser.style.left = `${xPosition + 4}px`
             }
      } ,10)
  }

  
/// spawn aliens and move function

//const monster = "monsters/monster-1.png";


/*Eventually will implement various monsters.

["monsters/monster-1.png", "monsters/monster-2.png", "monsters/monster-3.png"]
[Math.floor(Math.random() * monsterImgs.length)]
*/
function createMonster() {
    let newMonster = document.createElement('img');      
    newMonster.src = "monster.png"
    newMonster.classList.add('monster')
   /* newMonster.classList.add('monster-transition')*/
    newMonster.style.left = '360px'
    newMonster.style.top = `${Math.floor(Math.random() * 330) + 30}px`
    gameArea.appendChild(newMonster)
    moveMonster(newMonster)
  }

  /*
  function spawnMonster(){
      let newMonster = document.createElement("img")
      newMonster.src = "monster.png"
      newMonster.classList.add("monster")
      newMonster.y = "470px"
      newMonster.x =  "0"
      gameArea.appendChild(newMonster)
      moveMonster(newMonster)
  }
  /*
  function moveMonster(monster) {
    let moveMonsterInterval = setInterval(() => {
      let xPosition = parseInt(window.getComputedStyle(monster).getPropertyValue('left'))
      if (xPosition <= 50) {
        if (Array.from(monster.classList).includes("dead-monster")) {
          monster.remove()
        } else {
          gameOver()
        }
      } else {
        monster.style.left = `${xPosition - 4}px`
      }
    }, 30)
  
  }

*/

function moveMonster(monster) {
    let moveMonsterInterval = setInterval (() => {
        let xPosition = parseInt(window.getComputedStyle(monster).getPropertyValue("left"))
        if (xPosition <= 50) {
            monster.remove()
        } else {
            monster.style.left = `${xPosition - 4}px`
        }
    }, 30)
} 

///////  Trouble spawning Enemy Monsters


















































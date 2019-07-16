const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

// Play function 
function playGame(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);

}

// Computer Random player
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// get winner
function getWinner(p1, p2) {
    if (p1 === p2) {
        return 'draw';
    } else if (p1 === 'rock') {
        if (p2 === 'paper') {
            return 'computer';
        } else {
            return "player";
        }
    }
    else if (p1 === 'paper') {
        if (p2 === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    }
    else if (p1 === 'scissors') {
        if (p2 === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

//show winner dialog
function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        scoreboard.player++;
        result.innerHTML = `
           <h1 class="text-win">You Win</h1>
           <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer choice <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `;
    }
    else if (winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `
           <h1 class="text-lose">You Lose</h1>
           <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer choice <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `;

    } else {
        result.innerHTML = `
           <h1 >It's a draw</h1>
           <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer choice <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `;
    }

    // show the score 
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;
    modal.style.display = 'block';
}
// Clear Modal to pick up another choice.
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

//Restart Game
function restartGame(){
    scoreboard.player = 0 ;
    scoreboard.computer = 0;
    restart.style.display = 'none';
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;
}
// Event listener 
choices.forEach(choice => choice.addEventListener('click', playGame));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
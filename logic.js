let Score = JSON.parse(localStorage.getItem('Score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

updateScoreElement();

function pickComputerMove()
{
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 0.33) {
    computerMove = 'Rock';}
    else if (randomNumber < 0.66) {
    computerMove = 'Paper';}
    else {
    computerMove = 'Scissors';}

    return computerMove;
}


function updateScoreElement()
{
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${Score.wins} Losses: ${Score.losses} Ties: ${Score.ties}`;
}


function playGame(playerMove)
{
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Rock'){
        if (computerMove === 'Rock'){
            result = 'it is a tie!'}
            else if (computerMove === 'Paper') {
            result = 'you lose!'}
            else {
            result = 'You win!'}
    }

    else if (playerMove === 'Paper') {
        if (computerMove === 'Paper'){
            result = 'it is a tie!'}
            else if (computerMove === 'Scissors') {
            result = 'you lose!'}
            else {
            result = 'You win!'}
    }

    else if(playerMove === 'Scissors') {
        if (computerMove === 'Scissors'){
            result = 'it is a tie!'}
            else if (computerMove === 'Rock') {
            result = 'you lose!'}
            else {
            result = 'You win!'}
    }

    if (result === 'You win!'){
      Score.wins += 1;
    }
    else if (result === 'you lose!'){
      Score.losses += 1 ;
    }
    else if(result === 'it is a tie!'){
      Score.ties += 1 ;
    }

    localStorage.setItem('Score', JSON.stringify(Score));

    updateScoreElement(); 

    document.querySelector('.js-result')
      .innerHTML = `${result}`;
    
    document.querySelector('.js-player-move')
      .innerHTML = `You 
      <img src="${playerMove}.png" alt="" class="icons">
      <img src="${computerMove}.png" alt="" class="icons">
      Computer`;

    document.querySelector('.js-computer-move')
      .innerHTML = `Computer's Move: ${computerMove}`;

    /*alert(`You chose ${playerMove}. Computer chose ${computerMove}. \n ${result} \nWins: ${Score.wins} Losses: ${Score.losses} Ties: ${Score.ties}`);*/
}
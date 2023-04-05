/*
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) +1;
console.log(dice);

document.querySelector('#current-' + activePlayer).textContent = dice;

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';
*/

var scores, roundScore, activePlayer, gamePlaying;
var lastDice;

init();

//dice = Math.floor(Math.random() *6) +1;




document.querySelector('.btnroll').addEventListener('click', function() {
    if (gamePlaying) {
            //random number operator
    var dice = Math.floor(Math.random() *6) +1;

    // dice rolling
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // Update score if rolled number is not one

    if (dice === 6 && lastDice === 6) {
        document.querySelector('#para-' + activePlayer).textContent = '0';
        nextplayer();
    } else if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextplayer();
    }

    lastDice = dice;
    }



});

document.querySelector('.btnhold').addEventListener('click', function() {

    if (gamePlaying) {
            //add scores
    scores[activePlayer] += roundScore;

    //updateui
    document.querySelector('#para-' + activePlayer).textContent = scores[activePlayer];

    //checcck the player that won
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'YOU WON';
        document.querySelector('.dice').style.display = 'none;'
        gamePlaying = false;
    } else {
        nextplayer();
    }

    }    

});

function nextplayer() {
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.dice').style.display = 'none';

}


document.querySelector('.btnnew').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;   
 
    document.querySelector('.dice').style.display = 'none';
    gamePlaying = true;

    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.getElementById('para-0').textContent = '0';
    document.getElementById('para-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

}
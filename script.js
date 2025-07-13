'use strict';
const player0El = document.querySelector('.player--0') 
const player1El = document.querySelector('.player--1') 
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

  const scores = [0, 0];
  let activeplayer = 0;
 score0.textContent = 0;
 score1.textContent = 0;
 let currentScore= 0;
 let playing = true;
  diceEl.classList.add('hidden');

  const switchPlayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore = 0;
   activeplayer = activeplayer  === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

  };

btnRoll.addEventListener('click', function(){
  if(playing){
  const dice = Math.trunc(Math.random() * 6) + 1;
 
  diceEl.classList.remove('hidden');
  diceEl.src =`dice-${dice}.png`;


  if (dice !== 1){
    currentScore += dice; 
    document.getElementById(`current--${activeplayer}`).textContent = currentScore;
  } else {
   
    switchPlayer()
  }
}
});

btnHold.addEventListener('click', function(){
  if(playing){
  scores[activeplayer] += currentScore;
  document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
  }

  if(scores[activeplayer] >= 20){
    playing = false;
document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
document.querySelector(`.player--${activeplayer}`).classList.remove('activeplayer');
diceEl.classList.add('hidden');

}else{
  switchPlayer()
}
 
})
btnNew.addEventListener('click', function(){
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  diceEl.classList.add('hidden'); 
  

})





















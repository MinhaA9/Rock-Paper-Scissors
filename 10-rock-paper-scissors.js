
let score= JSON.parse(localStorage.getItem('score')) || { wins:0, loss:0,tie:0};

updateScoreElement();

function pickComputerMove(){
  const randNum = Math.random();
  let compMove ='';
  if(randNum>=0 && randNum<1/3){
      //console.log('rock');
      compMove='rock';
  }
  else if(randNum>=1/3 && randNum<2/3){
    //console.log('paper');
    compMove='paper';
  }
  else if(randNum>=2/3 && randNum<1){
    //console.log('scissors');
    compMove='scissors';
  }
  console.log(compMove);
  return compMove;
}

function playGame(playerMove, compMove){
  let result='';
  if(playerMove==='scissors'){
    if(compMove === 'rock'){
      result='You Lose';
    }
    else if(compMove === 'paper'){
      result = 'You Win';
    }
    else if(compMove === 'scissors'){
      result = 'Tie';
    }
  }
  else if(playerMove==='paper'){
    if(compMove === 'rock'){
      result='You Win';
    }
    else if(compMove === 'paper'){
      result = 'Tie';
    }
    else if(compMove === 'scissors'){
      result = 'You Lose';
    }
  }
  else if(playerMove==='rock'){
    if(compMove === 'rock'){
      result='Tie';
    }
    else if(compMove === 'paper'){
      result = 'You Lose';
    }
    else if(compMove === 'scissors'){
      result = 'You Win';
    }
  }
  if(result === 'You Win'){
    score.wins++;
  }
  else if(result === 'You Lose'){
    score.loss++;
  }
  else if(result === 'Tie'){
    score.tie++;
  }
  
  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();
  document.querySelector('.js-result').innerHTML= result;

  document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${compMove}-emoji.png"class="move-icon">Computer`;

  // console.log(result);
  // alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result}\nWins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.tie}`);  
}
function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.tie}`;  
}

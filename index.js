const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
      return userInput;
    } else {
      console.log('error')
    }
  } ;
  
  const getComputerChoice = () => {
    let number = Math.floor(Math.random()*3);
    switch (number) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        return 'error';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game was a tie!'
    }
  
    if (userChoice === 'bomb') {
      return '*Explosion!!!* You used the secret code and won! Nice job!'
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won :('
      } else {
        return 'Congrats, you won!'
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won :('
      } else {
        return 'Congrats, you won!'
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won :('
      } else {
        return 'Congrats, you won!'
      }
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
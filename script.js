let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Good
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const getAbsoluteDistance = (numOne, numTwo) => {
    return Math.abs(numOne - numTwo)
}

// Good
const compareGuesses = (humanGuess, computerGuess, target) => {
    /*
    let humanDifference = Math.abs(target - humanGuess)
    let computerDifference = Math.abs(target - computerGuess)
    */
    let humanDifference = getAbsoluteDistance(humanGuess, target)
    let computerDifference = getAbsoluteDistance(computerGuess, target)

    console.table({humanDifference, computerDifference, target})
    
    if (humanDifference <= computerDifference) {
        return true
    } else {
        return false
    }
}

// Good
const updateScore = winner => {
    if (winner === 'human') {
        ++humanScore
    } else {
        ++computerScore
    }
    // console.table({winner, humanScore, computerScore})
}

// Good
const advanceRound = () => {
    ++currentRoundNumber
}

console.log(getAbsoluteDistance(1, 2))
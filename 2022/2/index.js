
const fs = require('fs');
const LOSS_SCORE = 0;
const DRAW_SCORE = 3;
const WIN_SCORE = 6;
const ROCK_SCORE = 1;
const PAPER_SCORE = 2;
const SCISSORS_SCORE = 3;

let totalScore = 0;

let input = fs.readFileSync('./score-input.txt', 'utf-8');
let rounds = input.split('\n');

const scoreByShape = {
    'A': { // ROCK
        'X': ROCK_SCORE + DRAW_SCORE,
        'Y': PAPER_SCORE + WIN_SCORE,
        'Z': SCISSORS_SCORE + LOSS_SCORE
    },
    'B': { // PAPER
        'X': ROCK_SCORE + LOSS_SCORE,
        'Y': PAPER_SCORE + DRAW_SCORE,
        'Z': SCISSORS_SCORE + WIN_SCORE
    },
    'C': { // SCISSORS
        'X': ROCK_SCORE + WIN_SCORE,
        'Y': PAPER_SCORE + LOSS_SCORE,
        'Z': SCISSORS_SCORE + DRAW_SCORE
    }
};

rounds.forEach(currentRound => {
    const roundShapes = currentRound.split(' ');
    totalScore += scoreByShape[roundShapes[0]][roundShapes[1]];
});

console.log(`#1: Total score: ${totalScore}`);

// Part 2:
totalScore = 0;

const scoreByResult = {
    'A': { // ROCK
        'X': SCISSORS_SCORE + LOSS_SCORE,
        'Y': ROCK_SCORE + DRAW_SCORE,
        'Z': PAPER_SCORE + WIN_SCORE
    },
    'B': { // PAPER
        'X': ROCK_SCORE + LOSS_SCORE,
        'Y': PAPER_SCORE + DRAW_SCORE,
        'Z': SCISSORS_SCORE + WIN_SCORE
    },
    'C': { // SCISSORS
        'X': PAPER_SCORE + LOSS_SCORE,
        'Y': SCISSORS_SCORE + DRAW_SCORE,
        'Z': ROCK_SCORE + WIN_SCORE
    }
};

rounds.forEach(currentRound => {
    const roundShapes = currentRound.split(' ');
    totalScore += scoreByResult[roundShapes[0]][roundShapes[1]];
});

console.log(`#2: Total score: ${totalScore}`);

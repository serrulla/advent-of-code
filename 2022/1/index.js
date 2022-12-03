
const fs = require('fs');
const result = [0, 0, 0];

let input = fs.readFileSync('./input.txt', 'utf-8');
let splittedEntries = input.split('\n\n');

splittedEntries.forEach(calories => {
    let foodCalories = calories.split('\n').reduce((totalCalories, thisCalories) => parseInt(thisCalories) + parseInt(totalCalories));

    for (let topCaloriesIndex in result) {
        if (foodCalories > result[topCaloriesIndex]) {
            result[topCaloriesIndex] = parseInt(foodCalories);
            break;
        }
    }
})
const total = result.reduce((totalCalories, thisCalories) => parseInt(thisCalories) + parseInt(totalCalories));
console.log(`#1: Elf with most calories carries ${result[0]}`)
console.log(`#2: Total of top 3 elves calories is ${total}`);

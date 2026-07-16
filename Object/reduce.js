const matchHistory = [
    { opponent: 'Bob', myScore: 5, opponentScore: 2 },
    { opponent: 'Alice', myScore: 3, opponentScore: 5 },
    { opponent: 'Dave', myScore: 5, opponentScore: 4 }
];


const totalPointsScored = matchHistory.reduce((accumulator, currentMatch) => {
    return accumulator + currentMatch;
}, 0);



const number = [10, 20, 30];

const sum = number.reduce((acc, num) => {
    return acc + num;
}, 1)

console.log(sum);

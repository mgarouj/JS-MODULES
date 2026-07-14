const matchmakingqueue = ['player_a', 'player_b', 'player_c'];

matchmakingqueue.push('player_d');
console.log(matchmakingqueue);


const player1 = matchmakingqueue.shift();
console.log(player1);
console.log(matchmakingqueue);

const player2 = matchmakingqueue.shift();
console.log(player2);
console.log(matchmakingqueue);
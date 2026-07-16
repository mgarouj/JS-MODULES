const lobby = [
    { player: 'Alice', isReady: 10 },
    { player: 'Bob', isReady: 10 },
    { player: 'Charlie', isReady: 10 }
];


const conStartGame = lobby.every((player) => player.isReady === 10);

console.log(conStartGame);

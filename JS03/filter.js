const friendsList = [
    {login: 'alice', status: 'online'},
    {login: 'bob', status: 'offline'},
    {login: 'chalie', status: 'in-game'}
];

const activeFriend = friendsList.filter((friend) =>{
    return friend.status === 'online' || friend.status === 'in-game'

});

console.log(activeFriend);
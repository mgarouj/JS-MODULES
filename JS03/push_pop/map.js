const dbUsers = [
    { id: 1, login: 'userA', xp: 500, passwordHash: 'abc...' },
    { id: 2, login: 'userB', xp: 1200, passwordHash: 'xyz...' }
];


// strip out sensitive data before sending to the frontend
const publicProfiles = dbUsers.map((user) => {
    return {
        login: user.login,
        level: Math.floor(user.xp / 1000)
    };
});
console.log(publicProfiles);
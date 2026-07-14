const userAchievements = [
    { title: 'First Win', unlocked: false },
    { title: 'Flawless Victory', unlocked: false },
    { title: 'Tournament Champion', unlocked: false }
];


const hasAnyAchievement = userAchievements.some((ach) => ach.unlocked === true);

console.log(hasAnyAchievement);
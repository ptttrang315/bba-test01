// Task 1
function createCharacters() {
    const characters = [
        {name: "Anna", level: 2, health: 300},
        {name: "Will", level: 5, health: 600},
        {name: "Lucy", level: 3, health: 700},
        {name: "Vick", level: 1, health: 300}
    ];
    const charactersPowerUp = characters.map(character => ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    }));
    return charactersPowerUp;
}
console.log(createCharacters());

let possibleWinners = createCharacters().filter(character => character.health > 1000);
console.log(possibleWinners);

// Task 2
function printLeaderBoard() {
    const players = [
        {name: "Mario", score: 1000},
        {name: "Tracy", score: 600},
        {name: "Vicky", score: 700},
        {name: "Ducky", score: 300}
    ];
    let sortPlayers = players.sort((a,b) => b.score - a.score);

    let medalPlayers = sortPlayers.map(player => 
    {
        let medal = "";
        if (player.score === sortPlayers[0].score) {
            medal = "🥇";
        } else if (player.score === sortPlayers[1].score) {
            medal = "🥈";
        } else if (player.score === sortPlayers[2].score) {
            medal = "🥉";
        } else {
            medal = "  ";
        }

        return {
        ...player,
        medal
        };
    }
    ); 
    let order = 1;

    for(let player of medalPlayers) {
        console.log(`${player.medal} ${order}. ${player.name} - ${player.score} pts`);
        order++; 
    }
}
printLeaderBoard();


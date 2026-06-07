let playerName = "Mario";
let currentLives = 3;
const coins = [
    {"level" : 1, "coin" : 25},
    {"level" : 2, "coin" : 30},
    {"level" : 3, "coin" : 45}
]

let total = 0;

for (let coinEachLevel of coins) {
    total = total + coinEachLevel.coin;
}
let average = total / 3;
let remainder = total % 3;
console.log(total);
console.log(average);
console.log(remainder);

let powerUp = "mushroom";
let effect = null;

if (powerUp === "mushroom") {
    effect = "Mario becomes Super!";
} else {
    if (powerUp === "flower") {
        effect = "Mario can shoot fireballs!";
    } else {
        if (powerUp === "star") {
            effect = "Mario is invicible!";
        } else {
            if (powerUp === "none") {
                effect = "Mario is norml";
            } else {
                effect = "Unknown power-up";                
            }
    }
    }
}
console.log(effect);
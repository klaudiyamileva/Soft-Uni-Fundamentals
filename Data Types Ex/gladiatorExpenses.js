function gladiatorExpenses(lostGames,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    let helmetCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let armorCounter = 0;
    let sum = 0;
    for (let i = 1; i <= lostGames; i++) {
        if (i % 2  === 0) {
            helmetCounter++;
        } 
        if (i % 3 === 0) {
            swordCounter++;
        } 
        if (i % 6  === 0) {
            shieldCounter++;
        }
        if(i % 12 === 0) {
            armorCounter++;
        }
    }

    sum = (helmetCounter * helmetPrice) + (swordCounter * swordPrice) + (shieldCounter * shieldPrice) + (armorCounter * armorPrice);
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    );
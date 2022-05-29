function dungeonestDark(input) {
    let rooms = input[0].split('|');
    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let coinsCounter = 0;
    let isFinished = true; 
    if(rooms.length === 0) {
        console.log(`You've made it!`);
    console.log(`Coins: ${allCoins}`);
    console.log(`Health: ${health}`); 
    return;
    }
    for(let i = 0; i < rooms.length; i++) {
        coins = 0;
        roomCounter++;
        let room = rooms[i].split(' ');
        let itemOrMonster = room[0];
        let number = room[1];
        number = Number(number);
        if(itemOrMonster === 'potion') {
               if(health <= 100) {
                   if(health + number >= 100) {
                       number = 100 - health;
                       health = 100; 
                   } else {
                       health += number;
                   }
               }
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
        } else if(itemOrMonster === 'chest') {
            coins = number;
            coinsCounter += coins;
            console.log(`You found ${coins} coins.`);
        } else {
            health -= number;
            if(health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.` );
                console.log(`Best room: ${roomCounter}`)
                isFinished = false;
                break;
            }
        }
    }
    if(isFinished) {
        console.log(`You've made it!\nCoins: ${coinsCounter}\nHealth: ${health}`);
    }
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
// dungeonestDark(["potion 30|cat 10|orc 50|chest 10|snake 50|chest 110"]); 

//You healed for 0 hp.
// Current health: 100 hp.
//You slayed cat.
// You slayed orc.
// You found 10 coins
//You died! Killed by snake.
// Best room 5



dungeonestDark(["Cat 20"]);

// You found 150 coins
//You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 coins
// You healed for 30 hp.
// Current health: 80 hp
// You've made it!
// Coins: 160
// Health: 80
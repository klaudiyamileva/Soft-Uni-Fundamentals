function bitcoinMinning(input) {
    let index = 0;
    let gramsGoldEachDay = 0;
    let moneyFromGold = 0;
    let totalMoney = 0;
    let dayCount = 0;
    let firstDayOfBitcoin = 0;
    let bitcoinCounter = 0;

    for (let i = 1; i <= input.length; i++) {
        gramsGoldEachDay = Number(input[index]);
        dayCount++;
        if (dayCount % 3 === 0) {
            gramsGoldEachDay -= gramsGoldEachDay * 30 / 100;
        }

        moneyFromGold = gramsGoldEachDay * 67.51;
        totalMoney += moneyFromGold;

        while (totalMoney >= 11949.16) {
            if (totalMoney >= 11949.16) {
                totalMoney -= 11949.16;
                bitcoinCounter++;
            }

            if (bitcoinCounter === 1) {
                firstDayOfBitcoin = dayCount;
            }
        }
        index++;
    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (bitcoinCounter !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayOfBitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}
bitcoinMinning([3124.15, 504.212, 2511.124]);
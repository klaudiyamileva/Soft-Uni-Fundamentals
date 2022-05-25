function spiceMustFlow(flowFirstDay) {
    let expectedFlow = flowFirstDay;
    let current = 0;
    let total = 0;
    let daysCounter = 0;

    while(expectedFlow >= 100) {
        daysCounter++;
        current = expectedFlow;
        if(current >= 26) {
            current -= 26;
            total += current;
        } else {
            break;
        }
        expectedFlow -= 10;
    }

    if(total >= 26) {
        total -= 26;
    }
    console.log(daysCounter);
    console.log(total)
}
spiceMustFlow(111);
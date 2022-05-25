function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    let sumAsString = String(sum);
    isItFloat = false;

    for (let i = 0; i < sumAsString.length; i++) {
        if(sumAsString[i] === '.') {
            isItFloat = true;
        }
    }

    if(isItFloat === true) {
        console.log(`${sum} - Float`);
    } else {
        console.log(`${sum} - Integer`);
    }

}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
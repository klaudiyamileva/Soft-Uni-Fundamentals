function amazingNumbers(num) {
    let numStrings = String(num);
    let sum = 0;

    for(let i = 0; i < numStrings.length; i++) {
        sum += Number(numStrings[i]);
    }

    let result = String(sum).includes('9');

    console.log(result ?
        `${num} Amazing? True` :
        `${num} Amazing? False`)
}
amazingNumbers(1233);
amazingNumbers(999);
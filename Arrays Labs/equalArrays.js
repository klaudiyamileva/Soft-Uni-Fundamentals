function equalArrays(array1, array2) {
    let sum = 0;
    let isIdentical = true;
    let index = 0;
    for (let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i]);
        array2[i] = Number(array2[i]);
        if (array1[i] === array2[i]) {
            sum += array1[i];
        } else {
            isIdentical = false;
            index = i;
            break;
        }
    }
    console.log(isIdentical
        ? `Arrays are identical. Sum: ${sum}`
        : `Arrays are not identical. Found difference at ${index} index`)
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);
function reverseAnArrayOfNumbers(n, array) {
    let output = [];
    for (let j = n - 1; j >= 0; j--) {
        output.push(array[j]);
    }
    console.log(output.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
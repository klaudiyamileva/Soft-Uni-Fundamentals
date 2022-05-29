function magicSum(array, num) {
    for(let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            let numOne = array[i];
            let numTwo = array[j];
            if(numOne + numTwo === num) {
                console.log(`${numOne} ${numTwo}`)
            }
        }
    }
}
//magicSum([1, 7, 6, 2, 19, 23], 14);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
//magicSum([1, 2, 3, 4, 5, 6], 6);
function evenAndOddSubtraction(array) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let currentNum of array) {
        if(currentNum % 2 === 0) {
            sumEven += currentNum;
        } else {
            sumOdd += currentNum;
        }
    }
    let difference = sumEven - sumOdd;
    console.log(difference);
}
evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);
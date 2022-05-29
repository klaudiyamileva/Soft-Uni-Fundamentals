function maxSequenceOfEqualElements(array) {
    let newArray = [];
    let finalArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
        if(newArray[0] === array[i + 1]) {
            newArray.push[array[i + 1]];
        } else {
            if(newArray.length > finalArray.length) {
                finalArray = newArray;
            }
            newArray = [];
        }
    }
    console.log(finalArray.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
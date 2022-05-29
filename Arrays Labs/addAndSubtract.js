function addAndSubtract(array) {
    let sum1 = 0;
    let sum2 = 0;
    let newValue = 0;
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        sum1 += array[i];
        if(array[i] % 2 === 0) {
            newValue = array[i] + i;
        } else {
            newValue = array[i] - i;
        }
        sum2 += newValue;
        newArray.push(newValue);
    }
    console.log(newArray);
    console.log(sum1);
    console.log(sum2);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
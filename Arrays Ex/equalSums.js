function equalSums(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        if (array.length <= 1) {
            break;
        }
        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }
        if (i < array.length) {
            for (let k = i + 1; k < array.length; k++) {
                rightSum += array[k];
            }
        } else {
            rightSum = 0;
        }
        if (leftSum === rightSum) {
            result = i;
            break;
        }
    }
    if(array.length === 1 || result != 0) {
        console.log(result);
    } else {
        console.log('no');
    }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
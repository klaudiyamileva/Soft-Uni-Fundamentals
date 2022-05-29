function maxNumber(array) {
    let topInteger = [];
    let isTopInteger = '';
    for(let i = 0; i < array.length; i++) {
        isTopInteger = true;
        if(array[i] <= array[i + 1]) {
            isTopInteger = false;
        }
        if(isTopInteger) {
            topInteger.push(array[i]);
        }
    }
    let finalInt = [];
    for (let i = 0; i < topInteger.length; i++) {
        if(topInteger[i + 1] < topInteger[i]) {
            finalInt.push(topInteger[i])
        }
        if(i === topInteger.length - 1) {
            finalInt.push(topInteger[i])
        }
    }
    console.log(finalInt.join(' '))
}
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
maxNumber([1, 4, 3, 2]);


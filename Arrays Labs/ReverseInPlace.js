function ReverseInPlace(array) {
    for(let i = 0; i < array.length / 2; i++) {
        let k = (array.length - 1) - i;
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }
    console.log(array.join(' '));
}
ReverseInPlace(['a', 'b', 'c', 'd', 'e']);
ReverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
ReverseInPlace(['33', '123', '0', 'dd']);
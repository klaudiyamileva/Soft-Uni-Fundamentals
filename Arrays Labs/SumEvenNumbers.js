function SumEvenNumbers(array) {
    let sum = 0;
    for(let num of array) {
        num = Number(num);
        if(num % 2 === 0) {
            sum += num;
        }
    }
    console.log(sum)
}
SumEvenNumbers(['1','2','3','4','5','6']);
SumEvenNumbers(['3','5','7','9']);
SumEvenNumbers(['2','4','6','8','10']);
function sumOfOddNumbers (n){
    let odd = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += odd;
        console.log(odd);
        odd += 2;
    }

    console.log (`Sum: ${sum}`);
}
sumOfOddNumbers(3);
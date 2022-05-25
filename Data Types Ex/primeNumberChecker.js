function primeNumberChecker(num) {
    let isPrime = true;

    for (let i = 2; i <= 3; i++) {
        if (num % i === 0) {
            isPrime = false;
        }
    }
    if (num === 1) {
        isPrime = true;
    } else if(num === 2) {
        isPrime = false;
    }

    if(isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }

}
primeNumberChecker(7);
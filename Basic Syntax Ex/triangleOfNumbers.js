function triangleOfNumbers(num) {

    for(let i = 1; i <= num; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i;

            if (j !== i) {
                row += " ";
            }
        }
        console.log(row);
    }
}
triangleOfNumbers(5);

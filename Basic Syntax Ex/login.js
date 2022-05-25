function login(input) {
    let userName = input[0];
    let count = 0;

    for(let index = 1; index <= input.length; index++) {
        count++;
        if(count === 4) {
            console.log(`User ${userName} blocked!`);
        }
    }

}
login(['Acer','login','go','let me in','recA']);
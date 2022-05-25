function lowerOrUpper(char) {
    if (char >= String.fromCharCode(65) && char <= String.fromCharCode(90)) {
        console.log('upper-case');
    } else {
        console.log('lower-case')
    }
}
lowerOrUpper('L');
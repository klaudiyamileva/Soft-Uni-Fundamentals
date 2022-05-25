function rightPlace (word, char, wordTwo) {
    let result = "";

    for(let i = 0; i < word.length; i++) {
        if(word[i] === '_') {
            result += char;
        } else {
            result += word[i];
        }
    }

    if(result === wordTwo) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
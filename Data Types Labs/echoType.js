function echoType (parameter) {
    let type = typeof(parameter);
    console.log(type);
    if (typeof(parameter) === 'string' || typeof(parameter) === 'number') {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType('Hello, JavaScript!');
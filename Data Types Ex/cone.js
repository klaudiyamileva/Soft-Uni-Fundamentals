function cone(radius, height) {
    let p = 3.1415926535898
    let v = volume(p, radius, height)
    let s = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let l = p * radius * s;
    let b = p * Math.pow(radius, 2);
    let totalSurface = l + b;
    let result = `volume = ${v.toFixed(4)}` + `\n` + `area = ${totalSurface.toFixed(4)}`;
    return result;
}

function volume(p, radius, height) {
    let result = (1 / 3) * p * Math.pow(radius, 2) * height;
    return result
}
console.log(cone(3, 5));


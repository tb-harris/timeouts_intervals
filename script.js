function randomInt(n) {
    return Math.floor(Math.random() * n);
}

function randomRGB() {
    let num1 = randomInt(255);
    let num2 = randomInt(255);
    let num3 = randomInt(255);

    return "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";
}
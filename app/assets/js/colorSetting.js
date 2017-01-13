var red = {value: 0}, green = {value: 1}, blue = {value: 1};
var colorArray = [red, green, blue];
var changeValue = 0.1;
function upRGB() {
    if (colorArray[0].value < 1) {
        colorArray[0].value += changeValue;
    } else if (colorArray[1].value < 1) {
        colorArray[1].value += changeValue;
    } else if (colorArray[2].value < 1) {
        colorArray[2].value += changeValue;
    } else {
        shuffle(colorArray);
    }
}
function downRGB() {
    if (colorArray[0].value > 0) {
        colorArray[0].value -= changeValue;
    } else if (colorArray[1].value > 0) {
        colorArray[1].value -= changeValue;
    } else if (colorArray[2].value > 0) {
        colorArray[2].value -= changeValue;
    } else {
        shuffle(colorArray);
    }
}
function shuffle(array) {
    var n = array.length, t, i;
    while (n) {
        i = Math.floor(Math.random() * n--);
        t = array[n];
        array[n] = array[i];
        array[i] = t;
    }
    return array;
}

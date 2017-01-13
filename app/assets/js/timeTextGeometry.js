var hourTextArray = [], minTextArray = [], secTextArray = [], colonText;
function createTextArray() {
    createHourTextArray();
    createMinTextArray();
    createSecTextArray();
    createColonText();
}
function createColonText() {
    colonText = createText(':');
}
function createHourTextArray() {
    hourTextArray.push(createText(zeroPadding('0')));
    hourTextArray.push(createText(zeroPadding('1')));
    hourTextArray.push(createText(zeroPadding('2')));
    hourTextArray.push(createText(zeroPadding('3')));
    hourTextArray.push(createText(zeroPadding('4')));
    hourTextArray.push(createText(zeroPadding('5')));
    hourTextArray.push(createText(zeroPadding('6')));
    hourTextArray.push(createText(zeroPadding('7')));
    hourTextArray.push(createText(zeroPadding('8')));
    hourTextArray.push(createText(zeroPadding('9')));
    hourTextArray.push(createText(zeroPadding('10')));
    hourTextArray.push(createText(zeroPadding('11')));
    hourTextArray.push(createText(zeroPadding('12')));
    hourTextArray.push(createText(zeroPadding('13')));
    hourTextArray.push(createText(zeroPadding('14')));
    hourTextArray.push(createText(zeroPadding('15')));
    hourTextArray.push(createText(zeroPadding('16')));
    hourTextArray.push(createText(zeroPadding('17')));
    hourTextArray.push(createText(zeroPadding('18')));
    hourTextArray.push(createText(zeroPadding('19')));
    hourTextArray.push(createText(zeroPadding('20')));
    hourTextArray.push(createText(zeroPadding('21')));
    hourTextArray.push(createText(zeroPadding('22')));
    hourTextArray.push(createText(zeroPadding('23')));
}
function createMinTextArray() {
    minTextArray.push(createText(zeroPadding('0')));
    minTextArray.push(createText(zeroPadding('1')));
    minTextArray.push(createText(zeroPadding('2')));
    minTextArray.push(createText(zeroPadding('3')));
    minTextArray.push(createText(zeroPadding('4')));
    minTextArray.push(createText(zeroPadding('5')));
    minTextArray.push(createText(zeroPadding('6')));
    minTextArray.push(createText(zeroPadding('7')));
    minTextArray.push(createText(zeroPadding('8')));
    minTextArray.push(createText(zeroPadding('9')));
    minTextArray.push(createText(zeroPadding('10')));
    minTextArray.push(createText(zeroPadding('11')));
    minTextArray.push(createText(zeroPadding('12')));
    minTextArray.push(createText(zeroPadding('13')));
    minTextArray.push(createText(zeroPadding('14')));
    minTextArray.push(createText(zeroPadding('15')));
    minTextArray.push(createText(zeroPadding('16')));
    minTextArray.push(createText(zeroPadding('17')));
    minTextArray.push(createText(zeroPadding('18')));
    minTextArray.push(createText(zeroPadding('19')));
    minTextArray.push(createText(zeroPadding('20')));
    minTextArray.push(createText(zeroPadding('21')));
    minTextArray.push(createText(zeroPadding('22')));
    minTextArray.push(createText(zeroPadding('23')));
    minTextArray.push(createText(zeroPadding('24')));
    minTextArray.push(createText(zeroPadding('25')));
    minTextArray.push(createText(zeroPadding('26')));
    minTextArray.push(createText(zeroPadding('27')));
    minTextArray.push(createText(zeroPadding('28')));
    minTextArray.push(createText(zeroPadding('29')));
    minTextArray.push(createText(zeroPadding('30')));
    minTextArray.push(createText(zeroPadding('31')));
    minTextArray.push(createText(zeroPadding('32')));
    minTextArray.push(createText(zeroPadding('33')));
    minTextArray.push(createText(zeroPadding('34')));
    minTextArray.push(createText(zeroPadding('35')));
    minTextArray.push(createText(zeroPadding('36')));
    minTextArray.push(createText(zeroPadding('37')));
    minTextArray.push(createText(zeroPadding('38')));
    minTextArray.push(createText(zeroPadding('39')));
    minTextArray.push(createText(zeroPadding('40')));
    minTextArray.push(createText(zeroPadding('41')));
    minTextArray.push(createText(zeroPadding('42')));
    minTextArray.push(createText(zeroPadding('43')));
    minTextArray.push(createText(zeroPadding('44')));
    minTextArray.push(createText(zeroPadding('45')));
    minTextArray.push(createText(zeroPadding('46')));
    minTextArray.push(createText(zeroPadding('47')));
    minTextArray.push(createText(zeroPadding('48')));
    minTextArray.push(createText(zeroPadding('49')));
    minTextArray.push(createText(zeroPadding('50')));
    minTextArray.push(createText(zeroPadding('51')));
    minTextArray.push(createText(zeroPadding('52')));
    minTextArray.push(createText(zeroPadding('53')));
    minTextArray.push(createText(zeroPadding('54')));
    minTextArray.push(createText(zeroPadding('55')));
    minTextArray.push(createText(zeroPadding('56')));
    minTextArray.push(createText(zeroPadding('57')));
    minTextArray.push(createText(zeroPadding('58')));
    minTextArray.push(createText(zeroPadding('59')));
}
function createSecTextArray() {
    secTextArray.push(createText(zeroPadding('0')));
    secTextArray.push(createText(zeroPadding('1')));
    secTextArray.push(createText(zeroPadding('2')));
    secTextArray.push(createText(zeroPadding('3')));
    secTextArray.push(createText(zeroPadding('4')));
    secTextArray.push(createText(zeroPadding('5')));
    secTextArray.push(createText(zeroPadding('6')));
    secTextArray.push(createText(zeroPadding('7')));
    secTextArray.push(createText(zeroPadding('8')));
    secTextArray.push(createText(zeroPadding('9')));
    secTextArray.push(createText(zeroPadding('10')));
    secTextArray.push(createText(zeroPadding('11')));
    secTextArray.push(createText(zeroPadding('12')));
    secTextArray.push(createText(zeroPadding('13')));
    secTextArray.push(createText(zeroPadding('14')));
    secTextArray.push(createText(zeroPadding('15')));
    secTextArray.push(createText(zeroPadding('16')));
    secTextArray.push(createText(zeroPadding('17')));
    secTextArray.push(createText(zeroPadding('18')));
    secTextArray.push(createText(zeroPadding('19')));
    secTextArray.push(createText(zeroPadding('20')));
    secTextArray.push(createText(zeroPadding('21')));
    secTextArray.push(createText(zeroPadding('22')));
    secTextArray.push(createText(zeroPadding('23')));
    secTextArray.push(createText(zeroPadding('24')));
    secTextArray.push(createText(zeroPadding('25')));
    secTextArray.push(createText(zeroPadding('26')));
    secTextArray.push(createText(zeroPadding('27')));
    secTextArray.push(createText(zeroPadding('28')));
    secTextArray.push(createText(zeroPadding('29')));
    secTextArray.push(createText(zeroPadding('30')));
    secTextArray.push(createText(zeroPadding('31')));
    secTextArray.push(createText(zeroPadding('32')));
    secTextArray.push(createText(zeroPadding('33')));
    secTextArray.push(createText(zeroPadding('34')));
    secTextArray.push(createText(zeroPadding('35')));
    secTextArray.push(createText(zeroPadding('36')));
    secTextArray.push(createText(zeroPadding('37')));
    secTextArray.push(createText(zeroPadding('38')));
    secTextArray.push(createText(zeroPadding('39')));
    secTextArray.push(createText(zeroPadding('40')));
    secTextArray.push(createText(zeroPadding('41')));
    secTextArray.push(createText(zeroPadding('42')));
    secTextArray.push(createText(zeroPadding('43')));
    secTextArray.push(createText(zeroPadding('44')));
    secTextArray.push(createText(zeroPadding('45')));
    secTextArray.push(createText(zeroPadding('46')));
    secTextArray.push(createText(zeroPadding('47')));
    secTextArray.push(createText(zeroPadding('48')));
    secTextArray.push(createText(zeroPadding('49')));
    secTextArray.push(createText(zeroPadding('50')));
    secTextArray.push(createText(zeroPadding('51')));
    secTextArray.push(createText(zeroPadding('52')));
    secTextArray.push(createText(zeroPadding('53')));
    secTextArray.push(createText(zeroPadding('54')));
    secTextArray.push(createText(zeroPadding('55')));
    secTextArray.push(createText(zeroPadding('56')));
    secTextArray.push(createText(zeroPadding('57')));
    secTextArray.push(createText(zeroPadding('58')));
    secTextArray.push(createText(zeroPadding('59')));
}
function zeroPadding(num) {
    return ('0' + num).slice(-2);
}
function createText(target) {
    textGeometry = new THREE.TextGeometry(target, params);
    textGeometry.computeBoundingBox();
    textGeometry.computeVertexNormals();
//    material = new THREE.MeshLambertMaterial({color: 0x00ff00});
    material = new THREE.MultiMaterial( [
        new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
        new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
    ] );
    text = new THREE.Mesh(textGeometry, material);
    return text;
}
function updateText() {
    updateHourText();
    setColonText();
    updateMinText();
    updateSecText();
}
function updateHourText() {
    group.remove(hourText);
    hourText = hourTextArray[date.getHours()];
    hourText.position.x = -85;
    group.add(hourText);
}
function setColonText() {
    group.remove(colonText);
    colonText.position.x = -30;
    group.add(colonText);
}
function updateMinText() {
    group.remove(minText);
    minText = minTextArray[date.getMinutes()];
    minText.position.x = -20;
    group.add(minText);
}
function updateSecText() {
    group.remove(secText);
    secText = secTextArray[date.getSeconds()];
    secText.position.x = 35;
    group.add(secText);
}
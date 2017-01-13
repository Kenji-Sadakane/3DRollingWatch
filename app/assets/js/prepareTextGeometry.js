function prepareTextGeometry() {
    createTextGeometryParameters();
    createTextArray();
}
function createTextGeometryParameters() {
    params = THREE.TextGeometryParameters = {
        font: new THREE.Font(loadLocalJsonFile('json/helvetiker_regular.typeface.json')),
        size: 30,
        height: 5,
        curveSegments: 4,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 3,
        bevelEnabled: true,
        material: 0,
        extrudeMaterial: 1
    };
}
function loadLocalJsonFile(filepath) {
    var result;
    //非同期から同期にする
    $.ajaxSetup({ async: false });
    $.getJSON(filepath , function(json) {
        result = json;
    });
    // 非同期に戻す
    $.ajaxSetup({ async: true });
    return result;
}

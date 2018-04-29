const ReactorModule = (function () {
    
    let offV = 0;
    let offH = 0;
    let heatingV = 100;
    let heatingH = 100;
    let inc = 100;
    let dec = 100;

    function standardTempV() {
        return heatingV = 100;
    }

    function standardTempH() {
        return heatingH = 100;
    }

    function variableTempV() {
        return heatingV;
    }

    function variableTempH() {
        return heatingH;
    }

    function heatUpV() {
        return heatingV = heatingV + inc;
    }

    function heatUpH() {
        return heatingH = heatingH + inc;
    }

    function coolDownV() {
        return heatingV = heatingV - dec;
    }

    function coolDownH() {
        return heatingH = heatingH - dec;
    }

    return {
        standardTempV,
        standardTempH,
        variableTempV,
        variableTempH,
        heatUpV,
        heatUpH,
        coolDownV,
        coolDownH
    }
}());
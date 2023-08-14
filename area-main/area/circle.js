let area;

document.getElementById("submitFormulaPr2").onclick = function(area){

    let r;

    r = document.getElementById("inputRadius").value
    r = Number(r)
    area = formulaRadius(r)
    area = Number(area)
    document.getElementById("areaRadius").innerHTML = `The area is ${area}²`
}

document.getElementById("submitFormulaCirc").onclick = function(area){
    let c;
    c = document.getElementById("inputCirc").value
    c = Number(c)
    area = formulaCircumference(c)
    area = Number(area)
    document.getElementById("areaCirc").innerHTML = `The area is ${area}²`
}

function formulaRadius(r){
    return (Math.PI*(Math.pow(r, 2)))
}

function formulaCircumference(c){
    return (Math.pow(c, 2))/(4*Math.PI)
}

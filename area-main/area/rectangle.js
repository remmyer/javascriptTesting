let area;

document.getElementById("submitFormulaRec").onclick = function(area){

    let b;
    let h;

    b = document.getElementById("inputBase").value
    b = Number(b)
    h = document.getElementById("inputHeight").value
    h = Number(h)
    area = formulaRectangle(b, h)
    area = Number(area)
    document.getElementById("areaRect").innerHTML = `The area is ${area}²`
}

document.getElementById("submitFormulaSqr").onclick = function(area){
    let a;
    a = document.getElementById("inputSide").value
    a = Number(a)
    area = formulaSquare(a)
    area = Number(area)
    document.getElementById("areaSqr").innerHTML = `The area is ${area}²`
}

function formulaRectangle(b, h){
    return b * h
}

function formulaSquare(a){
    return Math.pow(a, 2)
}

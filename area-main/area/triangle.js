let area;

document.getElementById("submitFormulaTri").onclick = function(area){

    let b;
    let h;

    b = document.getElementById("inputBase").value
    b = Number(b)
    h = document.getElementById("inputHeight").value
    h = Number(h)
    area = formulaTriangle(b, h)
    area = Number(area)
    document.getElementById("areaTri").innerHTML = `The area is ${area}²`
}

document.getElementById("submitFormulaTriE").onclick = function(area){
    let a;
    a = document.getElementById("inputSide").value
    a = Number(a)
    area = formulaTriangleEq(a)
    area = Number(area)
    document.getElementById("areaTriE").innerHTML = `The area is ${area}²`
}

function formulaTriangle(b, h){
    return (b * h)/2
}

function formulaTriangleEq(a){
    return (Math.pow(a, 2))*(Math.sqrt(3, 2))/4
}

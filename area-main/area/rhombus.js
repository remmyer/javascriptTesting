let area;

document.getElementById("submitFormulaRh").onclick = function(area){

    let d1;
    let d2;

    d1 = document.getElementById("inputD1").value
    d1 = Number(d1)
    d2 = document.getElementById("inputD2").value
    d2 = Number(d2)
    area = formulaRhombus(d1, d2)
    area = Number(area)
    document.getElementById("areaRh").innerHTML = `The area is ${area}²`
}

function formulaRhombus(d1, d2){2
    return (d1 * d2)/2
}


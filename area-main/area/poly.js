let area;

document.getElementById("submitFormulaPg").onclick = function(area){

    let P;
    let a;

    P = document.getElementById("inputP").value
    P = Number(P)
    a = document.getElementById("inputSide").value
    a = Number(a)
    area = formulaPolygon(P, a)
    area = Number(area)
    document.getElementById("areaPg").innerHTML = `The area is ${area}²`
}

function formulaPolygon(P, a){2
    return (P * a)/2
}


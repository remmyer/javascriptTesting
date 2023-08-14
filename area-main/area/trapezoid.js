let area;

document.getElementById("submitFormulaTra").onclick = function(area){

    let a;
    let b;
    let h;

    a = document.getElementById("inputSideA").value
    a = Number(a)
    b = document.getElementById("inputSideB").value
    b = Number(b)
    h = document.getElementById("inputHeight").value
    h = Number(h)
    area = formulaTra(a, b, h)
    area = Number(area)
    document.getElementById("areaTra").innerHTML = `The area is ${area}²`
}

function formulaTra(a, b, h){
    return ((a * b)/2) * h
}


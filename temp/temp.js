
document.getElementById('submitUnit').onclick = function(){

    let temp;

    if(document.getElementById('cButton').checked){
        temp = document.getElementById('textBox').value
        temp = Number(temp)
        temp = toCelsius(temp)
        document.getElementById('tempLabel').innerHTML = `${temp}°C`
    }

    else if(document.getElementById('fButton').checked){
        temp = document.getElementById('textBox').value
        temp = Number(temp)
        temp = toFahrenheit(temp)
        document.getElementById('tempLabel').innerHTML = `${temp}°F`
    }

    else{
        document.getElementById('tempLabel').innerHTML = "Please select a unit!"
    }

}

function toCelsius(temp){
    return (temp - 32) * (5/9)
}

function toFahrenheit(temp){
    return temp * 9/5 + 32;
}
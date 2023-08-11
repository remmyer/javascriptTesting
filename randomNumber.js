let min 
let max
let x

document.getElementById("rollButton").onclick = function(){

   min = document.getElementById('minInput').value
   min = Number(min)
   max = document.getElementById('maxInput').value
   max = Number(max)

    x = Math.floor(Math.random() * (max - min + 1) + min);

    document.getElementById('xLabel').innerHTML = x;
}
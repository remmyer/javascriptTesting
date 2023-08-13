//COUNTER PROGRAM//

let count = 0;

document.getElementById("decreaseButton1").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("decreaseButton5").onclick = function(){
    count -= 5;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("decreaseButton10").onclick = function(){
    count -= 10;
    document.getElementById("countLabel").innerHTML = count;
}
 
document.getElementById('resetButton').onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById('increaseButton1').onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById('increaseButton5').onclick = function(){
    count += 5;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById('increaseButton10').onclick = function(){
    count += 10;
    document.getElementById("countLabel").innerHTML = count;
}
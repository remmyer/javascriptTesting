let max;
let min;

document.getElementById('submitMinMax').onclick = function(max, min){
    max = document.getElementById('maximum').value
    max = Number(max)
    min = document.getElementById('minimum').value
    min = Number(min)
    if(max <= min ){
        alert("Your maximum number cannot be smaller or equal to your minimum number!")
    }
else{
    document.getElementById('guessId').style.display = "inline-block"
    const answer = Math.floor(Math.random() * (max - min + 1) + min)
let guesses = 0

console.log(answer)

document.getElementById('submitBtn').onclick = function(){
   let guess = document.getElementById('guessField').value
   guess = Number(guess)
   guesses += 1

   if (guess == answer){
    document.getElementById('guessOutput').innerHTML = `${answer} is the number. It took you ${guesses} guess(es)!`
    } 
    else if(guess < answer){
        document.getElementById('guessOutput').innerHTML = "Too small!"
    }
    else{
        document.getElementById('guessOutput').innerHTML = "Too large!"
    }

}
}
}

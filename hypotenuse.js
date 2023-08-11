/*
console.log("Woah it works"); //basicallt the print function but its longer for no reason
console.log("Youpii!!!!");

// window.alert("HELLO WORLD!"); // this gives a little pop up alert window

//TEST!!!!!! This is a comment

/*


multiline comment

*/

/*let firstName = "Mohima"; //let is like storing a variable i guess, one of 3 way >> var, let and const, anwyays thus is a string 
let age; //this is a number variable ti stores numbers obv, it works in arithmetic expressinons, not liek strings
age = 14; //i can either write it like thus or do let age = 15; and it wuld b tje same thing
let student = true //and this is a boolean, either true or false

age = age + 1; //this adds 1 to my age, if my age were a string it would literally add 1 to the end of the num,ber instead of to the number


console.log("Hello", firstName) //DONT FORGET COMMA!!! basocally it adds that string before the variable, looks like it auto adds a string
console.log("You are", age, "years old")
console.log(student)
console.log(12)//numbers r like their own variable, it shows what it is

document.getElementById("p1").innerHTML = "Hello " + firstName //takes the ID from the HTML document  [Dont forget the space]
document.getElementById("p2").innerHTML = "You are " + age + " years old" //document = the document, getElementById = getting element by its ID,
.innerHTML = adds to HTML
document.getElementById("p3").innerHTML = "Student: " + student */


//HYPOTENUSE CALCULATOR//
document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value
    a = Number(a)

    b = document.getElementById("bTextBox").value
    b = Number(b)

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c
}


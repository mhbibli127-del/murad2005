let examResult = prompt("Enter your exam result:");

if (examResult >=85 && examResult <=100) {
    console.log ("Your result is good");
}
else if (examResult >= 50 && examResult <85){
    console.log ("Your result is average");
}
else if ( examResult <  50){
    console.log ("Your result is poor");
} 



let temrature = prompt ("Enter the temperature:");

if (temprature > 25) {
    console.log ("The temprature is hot");
}

else if ( temprature < 25 && temprature >= 10){
    console.log("The temprature is normal");
}

else if (temprature < 10){
    console.log("The temprature is cold");
}




let number = prompt("Enter a number:");

if (number % 2 == 0) {
    console.log("The number is even");
}
else if (number % 2 != 0){
    console.log("The number is odd");
}


let UserName = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (Username == "Murad" && password == "200520") {
    console.log("Login successful");
}
else {
    console.log("Login failed");
}
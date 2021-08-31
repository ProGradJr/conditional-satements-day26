// Task1:

// Let's find whether the given two person are eligible for voting

//To do so, first let's create the two variables for storing the person's age

var ageOfPerson1 = 29
var ageOfPerson2 = 17

// Then let's make a conditional statement to check whether the person is eligible for voting

if(ageOfPerson1 > 18){
    console.log("You're eligible for voting")
} else{
    console.log("You're not eligible for voting")
}

//Replace the variable ageOfPerson1 with ageOfPerson2 to find the second person's eligibility


// Task2:

//Let's play a game, if the given number is odd we should say "this is a odd number"
//Similarly, we should say if a number is even number
//And if a number is mutiple of 10, then let's say as "It's a magic number"

//Let's start with creating variable

var myNumber = 12

if(myNumber % 2 == 0 && myNumber % 5 == 0){
    console.log("It's a magic number")
}
else if(myNumber % 2 == 0){
    console.log("It's an even number")
}
else{
    console.log("It's an odd number")
}

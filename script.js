// Lecture: let and const

// ES5 
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
var age5 = 23;
//name6 = 'Jane Miller';
age5 = 24;
console.log(age5);

//ES 5
// var has a function scope
function driverLicence5(passedTest){
    if(passedTest){
        var firstName = 'Jeena';
        var yearOfBirth = '1991';
    }
    console.log(firstName + 
        ', born in' +
        yearOfBirth + 
        ' ,is now officially allowed to drive a car');
}

driverLicence5(true);


//ES 6
//let and const have a block scope
function driverLicence6(passedTest){
    if(passedTest){
        let firstName = 'Jeena';
        const yearOfBirth = '1991';
    }
    console.log(firstName + 
        ', born in' +
        yearOfBirth + 
        ' ,is now officially allowed to drive a car');
}

driverLicence6(true);

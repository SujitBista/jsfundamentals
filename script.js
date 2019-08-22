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
    let firstName;
    const yearOfBirth = '1991';
    if(passedTest){
        firstName = 'Jeena';
    }
    console.log(firstName + 
        ', born in' +
        yearOfBirth + 
        ' ,is now officially allowed to drive a car');
}

driverLicence6(true);

//here i is two completely different variables
// let i = 23;
// for(let i = 0; i<5; i++){
//     console.log(i);
// }
// console.log(i);

// here i is a single variable and is overidden
var i = 23;
for(var i = 0; i<5; i++){
    console.log(i);
}
console.log(i);

//Es5
(function(){
    var c = 0;
})();
//cannot be accessed c is blocked scope
//console.log(c);

//Es6
{
    var e = 0;
}
// variable e is blocked scope
console.log(e);

//Lecture Strings
let firstName = 'Jeena';
let lastName = 'Thapa';
const yearOfBirth = 1991;

function calcAge(year){
    return 2019 - year;
}
//Es5
console.log('This is ' + 
            firstName +
            ' '+
            lastName+
            '. She was born in ' +
            yearOfBirth +
            '. She is now ' + calcAge(yearOfBirth) + ' years old.');

//Es6
console.log(`This is ${firstName} ${lastName}. She was born in ${yearOfBirth}. She is now ${calcAge(yearOfBirth)} years old.`)

//Lecture: Arrow function

const years = [1990,1953,1967,1943];

//Es5
var age5 = years.map(function(el) {
    return 2016 - el;
});
console.log(age5);

//Es6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);

//Es5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this; //self variable points to the variable this
        document.querySelector('.green').
        addEventListener('click', function (){
            var str = 'This is a box number '
            + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
} 

//box5.clickMe();

//Es6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').
        addEventListener('click', 
            () => {
            var str = 'This is a box number '
            + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
} 

box6.clickMe();
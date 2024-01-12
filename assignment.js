//Code #1

let score = 8;

console.log("Mid Level Skills:" + (score > 0 && score < 10))


//code#2

let timeRemaining = 0;
let energy = 10;

console.log(`Game Over: ${timeRemaining == 0 || energy == 0}`)

//code#3

let num1 = 2;
let num2 = 5;

let test1 = num1 % 2;

let test2 = num2 % 2;

let result1 = test1 == 0;
let result2 = test2 == 0;

console.log(`Is ${num1} an even number? ${result1}`);
console.log(`Is ${num2} an even number? ${result2}`);

//code#4
//addition

console.log(5 + 10);


//code#5

let now = "now in";
let three = 3;
let d = "D!";

console.log(`${now} ${three} ${d}`);


//code#6

let counter = 0;

counter += 5;

counter += 3;

console.log(counter);

//code#7

var age = 10;

if (age >= 65) {
    console.log("You get your income from your pension");
}
else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
}
else if (age < 18) {
    console.log("You get an allowance");
}
else {
    console.log("The value of the age variable is not numerical");
}

//code#8

let day = "Sunday";

switch (day) {
    case "Monday":
        {
            console.log("Today is Monday");
            break;
        }
    case "Tuesday":
        {
            console.log("Today is Tuesday");
            break;
        }
    case "Wednesday":
        {
            console.log("Today is Wednesday");
            break;
        }
    case "Thursday":
        {
            console.log("Today is Thursday");
            break;
        }
    case "Friday":
        {
            console.log("Today is Friday");
            break;
        }
    case "Saturday":
        {
            console.log("Today is Saturday");
            break;
        }
    case "Sunday":
        {
            console.log("Today is Sunday");
            break;
        }
    default:
        {
            console.log("invalid day");
            break;
        }
}
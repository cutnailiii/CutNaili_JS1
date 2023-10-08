//if
var age = 15;

if (age < 17) {
    console.log("Sorry, you are not yet old enough to apply for an ID card in Indonesia.");
}
/* The result will be that the program prints the message "Sorry, you are not yet old enough to apply for an ID card in Indonesia." to the console. This means that because the age (age) is less than 17 years (age 15), someone is not yet old enough to apply for an identity card (KTP) in Indonesia. */


//else
var age = prompt("How old are you?");
if (age >= 17) {
    console.log("Can make an ID card.");
} else {
    console.log("Cannot make an ID card yet.");
}
/* This is because the condition age >= 17 is true when age is equal to 17, so it executes the code inside the if block and logs "Can make an ID card."
You can also try entering your age in the prompt of index.html file and observe the outcome in the console.*/

//nested if
var age = 18;
var height = 170;

if (age < 17) {
    if (height < 160) {
        console.log("You are not allowed to enter.");
    } else {
        console.log("You are allowed to enter.");
    }
} else {
    console.log("You are allowed to enter.");
}

/* The code checks if the age is less than 17. Since the age is 18, it proceeds to the "else" block. Inside the "else" block, it prints "You are allowed to enter" to the console. Thus, the final output is "You are allowed to enter. */


//nested if(2)
var age = 16;
var height = 155;

if (age < 17) {
    if (height < 160) {
        console.log("You are not allowed to enter.");
    } else {
        console.log("You are allowed to enter.");
    }
} else {
    console.log("You are allowed to enter.");
}
/*The code checks the age and height. In this case, since the age is 16 (less than 17) and the height is 155 (less than 160), it prints "You are not allowed to enter" to the console.*/

//switch case
var beverage = prompt("Choose a beverage (coffee or tea):");

switch (beverage) {
    case 'coffee':
        console.log("You chose coffee");
        break;
    case 'tea':
        console.log("You chose tea");
        break;
    default:
        console.log("You haven't made a valid selection yet");
        break;
}

//for statement 
for (var i = 1; i < 17; i++) {
    console.log("Age that is not eligible for an ID card in Indonesia yet.");
    console.log(i);
}
/*
Output:

Age that is not eligible for an ID card in Indonesia yet.
1
Age that is not eligible for an ID card in Indonesia yet.
2
Age that is not eligible for an ID card in Indonesia yet.
3
Age that is not eligible for an ID card in Indonesia yet.
4
Age that is not eligible for an ID card in Indonesia yet.
5
Age that is not eligible for an ID card in Indonesia yet.
6
Age that is not eligible for an ID card in Indonesia yet.
7
Age that is not eligible for an ID card in Indonesia yet.
8
Age that is not eligible for an ID card in Indonesia yet.
9
Age that is not eligible for an ID card in Indonesia yet.
10
Age that is not eligible for an ID card in Indonesia yet.
11
Age that is not eligible for an ID card in Indonesia yet.
12
Age that is not eligible for an ID card in Indonesia yet.
13
Age that is not eligible for an ID card in Indonesia yet.
14
Age that is not eligible for an ID card in Indonesia yet.
15
Age that is not eligible for an ID card in Indonesia yet.
16
*/

//for statement array(2)
const adulthood = ['happy', 'free', 'confused', 'lonely'];

for (let i = 0; i < adulthood.length; i++) {
    console.log(adulthood[i]);
}
/*The result of the code above is to print each element in the fruits array to the console one by one in the specified order. The output will be as follows:
watermelon
apple
cherry
banana
The code uses a for loop to iterate through all the elements in the array and print them to the console. */

// while
var i = 0;
while (i<3) {
  console.log("Warning, Please verify your identity!");
  i++;
}
/* 
The above example will keep printing "Warning, please verify your identity!" until it reaches three iterations.

Output: 
Warning, Please verify your identity!
Warning, Please verify your identity!
Warning, Please verify your identity!
*/


//do while
var i = 0;

do {
  console.log("Warning, Please verify your identity!");
  i++;
} while (i < 3);
/* 
The code will print "Warning, Please verify your identity!" to the console three times because it uses a do...while loop to execute the statement inside the loop body at least once before checking the condition.

Output: 
Warning, Please verify your identity!
Warning, Please verify your identity!
Warning, Please verify your identity!
*/


//function (for checkLength of password)
function checkLength(str) {
    var strLength = str.length;
    if (strLength >= 5 && strLength <= 12) {
        return "Password accepted";
    } else {
        return "Enter characters between 5 and 12";
    }
}
console.log(checkLength("cutnaili"));
console.log(checkLength("nai"));
console.log(checkLength("cutnailijieun"));

/*
The checkLength function checks the length of the input string. If the length is between 5 and 12 characters (inclusive), it returns "Password accepted." Otherwise, it returns "Enter characters between 5 and 12."
Output:
1. checkLength("cutnaili") returns "Password accepted" because the string length is 8, which is within the specified range.
2. checkLength("nai") returns "Enter characters between 5 and 12" because the string length is 3, which is below the minimum requirement.
3. checkLength("cutnailijieun") returns "Enter characters between 5 and 12" because the string length is 14, which exceeds the maximum allowed length.
*/


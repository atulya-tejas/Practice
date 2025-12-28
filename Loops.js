//1 
let i=1;
let sum=0;
while(i<=5){
    sum = sum + i;
    i++;
}
console.log(sum);

/*
2. Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
*/

let countdown = [];
let j = 5;
while (j>=1){
    countdown.push(j);
    j--;

}
console.log(countdown);

/*
3. Write a 'do while, loop that prompts a user to enter their favorite tea type until they enter '"stop"'.
Store each tea type in an array named 'teaCollection'
*/

// let teaCollection=[];
// let tea ;
// do {
//     tea =prompt("Enter your fav tea ( Enter stop to stop ) :")
//     if (tea !== "stop") {
//         teaCollection.push(tea);
//     }
// } while (tea !== "stop");


/*
4. Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'
*/

num=1;
total=0;
do {
    total += num;
    num++;
} while (num < 4);
console.log(total);

/*
5. Write a 'for' loop that multiplies each element in the array '[2, 4, 6]' by 2 and stores the results in a new array named "multipliedNumbers".
*/
let multipliedNumbers = [];
let numbers=[2,4,6];

for (let l = 0;l < numbers.length;l++) {
    multipliedNumbers.push(numbers[l] * 2);
}
console.log(multipliedNumbers);


/*
6. Write a 'for' loop that lists all the cities in the array '["Paris", "New York", "Tokyo", "London"]' and stores each city in a new array named 'citylist'
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let citylist = [];

for (let c = 0; c < cities.length; c++) {
    citylist.push(cities[c]);
}
console.log(citylist);

// Average using if-else
let a = 5;
let b = 8;
let c = 25;

let sum = a+b+c;
let average;

if(sum > 0){
    average = sum / 3;
}else{
    average = 0;
}

console.log("Average using if-else:",parseFloat(average.toFixed(2)));

// // Average using for loop

let numbers = [a,b,c];
sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
average = sum/numbers.length;
console.log("Average using for loop:",parseFloat(average.toFixed(2)));

// // Average using while loop

sum = 0;
let count = 0;
while(count < numbers.length){
    sum += numbers[count];
    count ++
}
average = sum / numbers.length;
console.log("Average using while loop:",parseFloat(average.toFixed(2)));

// // Average using do-while loop

sum = 0;
count = 0;
do{sum += numbers[count];
    count++;
}while(count < numbers.length);
    
average = sum / numbers.length;
console.log("Average using do-while loop:",parseFloat(average.toFixed(2)));



function calculateAverage(a,b,c){
    let sum = a + b + c;
    let average = sum / 3;
    return average;
}
average = calculateAverage(a,b,c);
console.log("Average using:", parseFloat(average.toFixed(2)));

//  Average part is complete

// Now start is a triangle part


let base = 32;
let height = 25;
let area;
if (base > 0 && height > 0){
    area = (base * height) / 2;
}else{
    area = 0;
}
console.log("Area of the triangle using if-else:",area);



// for loop
area = 0;
for (let i = 0; i < 1; i++){
    area = (base * height) / 2;
}
console.log("Area of the triangle using for loop:",area);

//  for ...in
area = 0;
for (let prop in {base : b, height : c}){
    area = (b * c) / 2;
}
console.log("Area of the triangle using for...in loop:",area);
let num = 266219;

console.log(num);
num = String(num).split('');
let numbers = 1; 
for (let i = 0; i <= num.length - 1; i++) {
    numbers *= num[i];
}
console.log(numbers);

numbers = numbers ** 3;
console.log(numbers);
numbers = String(numbers);
alert(numbers.substring(0, 2));
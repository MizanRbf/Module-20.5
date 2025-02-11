// reverse
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
console.log(colors);
colors.reverse();
console.log(colors);

// reverse without use .reverse

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const revColors = [];

for(const num of colors){
  revColors.unshift(num);
}
console.log(revColors);

// another task 

const fruits = ['orange', 'apple', 'banana', 'grape', 'nut'];
const revFruit = [];

for(const fruit of fruits) {
  revFruit.unshift(fruit);

}
console.log(revFruit);
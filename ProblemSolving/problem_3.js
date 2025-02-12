// এইয়ারের ভেতর থেকে শুধু জোড় সংখ্যা গুলোকে নিয়ে আরেকটা এরে তৈরি করতে হবে

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = [];
for(let i = 1; i <= 11; i++){
  if(i % 2 === 0){
    evenNumbers.push(i);
  }
}
console.log(evenNumbers);
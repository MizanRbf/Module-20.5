let statement = 'I am a hard working person';
let words = statement.split(" ");

let reverse = "";
 
for(let i = words.length-1; i >= 0; i--){
  let element = words[i];
  // console.log(element);
  reverse += element;
  if(i > 0){
    reverse += " ";
  }
}
console.log(`'${reverse}'`);

// another one
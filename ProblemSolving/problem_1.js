// ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো 

let newNum = [];
for(let i = 1; i <= 50; i++){
  if(i % 3 == 0 && i % 5 == 0){
    newNum.push(i);
  }
}
console.log(newNum);
// 1. উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let bigFriend = friends[0];

for(let i = 0; i < friends.length; i++){
  const element = friends[i];
  if(element.length > bigFriend.length){
    bigFriend = element;
  }
}
console.log(bigFriend);

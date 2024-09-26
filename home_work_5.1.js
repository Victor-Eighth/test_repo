for (let i = 10; i >= 0; i--) {
    if (i % 2 === 0) console.log(i);
  }

//   let i = 10;
// while (i >= 0) {
//   if (i % 2 === 0){
//     console.log(i);
//   }
//   i--;
// }

let j = 0;
let newSmile = ":)"
let smile = ":)"
while (j < 5) {
  console.log(smile);
  smile = newSmile + smile;
  j++;
}

let text = "hello, I'm a JS student!"
console.log(text.replaceAll(" ", "1"));;
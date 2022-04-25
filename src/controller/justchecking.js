// let a= 5;

// {
//   var a= 10;
//   console.log(a)
// }

// console.log(a)


for ( var i =0 ; i< 5 ;i++){
  setTimeout( ()=> console.log(i),1000)
}

for ( let i =0 ; i< 5 ;i++){
  setTimeout( ()=> console.log(i),1000)
}

// function outer ( a,b) {
//   let d;
//   function inner () {
//       d;
//   }
//   return inner;
// }

// function outer ( a,b) {

//   function inner () {
//     let d,e;
//   }
// }
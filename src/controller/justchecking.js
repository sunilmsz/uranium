// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
  //     }, 2000);
  //   });
  // }
  
  // const myFunc =async ( ) => {

  //   async function asyncCall() {
  //       console.log('calling');
  //       const result = await resolveAfter2Seconds();
  //       const result2 = await resolveAfter2Seconds();
  //       // console.log(result);
  //       console.log("first")
  //       console.log("second")
  //       console.log("third")
  //       return 123;
  //       // expected output: "resolved"
  //     }
      
  //     asyncCall().then(val=> console.log(val))
    
  //     console.log("outer call")
  //     return 123;

  // }

  // console.log(myFunc())

  function timeout(ms) {
    return new Promise(resolve => {
      setTimeout(()=>{
        console.log("job done")
        resolve()
      }, ms)
      
    });
  }

   async function outer() {

    async function useOfAwait ()
  {
    console.log("inner calling")
    await  timeout(5000)
   return "after job done "
  }
  useOfAwait();
 
  console.log("outer calling")

  }

  outer()
//  useOfAwait().then( dataRecvied => {
//      console.log(dataRecvied)
//   })

  // console.log(d)




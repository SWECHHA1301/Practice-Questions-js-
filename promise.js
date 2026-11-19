//1. Create a Promise that resolves after 2 seconds with the message "Success!". Log the result
//using .then().
//Chain two .then() methods:
//First .then() returns a number 5.
//Second .then() multiplies it by 10 and logs the result

// let promise = new Promise ((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("success!")
//     },2000)
    
// })

// promise.then((success)=> {
//     console.log(success)
// })
// .catch((error) => {
//     console.log(error);
// });


//---------2.------------
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Failed!");
//     }, 1000);
// });
// promise
// .then((success) => {
//     console.log(success);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Operation completed.");
// });

//--------5.--------------
function divide(a, b) {
    return new Promise((resolve, reject) => {

        if (b === 0) {
            reject("Division by zero");
        }
        else {
            resolve(a / b);
        }

    });
}

divide(13, 0)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
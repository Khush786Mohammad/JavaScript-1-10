//1. callback --> callback is function which is passed as a argument to another function.
    //   callback generally used in asynchronous code

/*
function someFunction(callback){
    console.log("This is inside a someFunction");
    setTimeout(callback,3000);
    console.log("This is after setTime out");
}

someFunction(anotherFunction);

function anotherFunction(){
    console.log("This is inside a anotherFunction");
}

*/
//now passing anotherFunction to someFunction as a callback

//2. Promises --> handles async task contains to para(resolve and reject) represent completion of async operation or complete failure

const pr = new Promise((resolve,reject)=>{
    resolve(setTimeout(()=>{
        document.body.innerHTML='i love promises'
    },3000));
    reject("error");
});

pr.then(()=>{console.log("You have a message")}).catch(error=>{console.log(error)});


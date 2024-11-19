//1. callback --> callback is function which is passed as a argument to another function.
    //   callback generally used in asynchronous code


//remove the multi-line comment 
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

//Callback example 2

const userLeft = false;
const userWatchingMeme = false;

//remove the multi-line comment;
/*

function watchCallbackTutorial(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: 'User left',
            message: ':('
        });
    }
    else if(userWatchingMeme){
        errorCallback({
            name: 'User watching meme',
            message: 'callback < meme'
        });
    }
    else{
        callback(('watching callback'));
    }
}

watchCallbackTutorial((message)=>{
    console.log('Success ' + message);
}, (error)=>{
    console.log(error.name + " "+ error.message);
})

*/

//now passing anotherFunction to someFunction as a callback

//2. Promises --> handles async task contains to para(resolve and reject) represent completion of async operation or complete failure


//Example1 on Promises
/*
const pr = new Promise((resolve,reject)=>{
    resolve(setTimeout(()=>{
        document.body.innerHTML='i love promises'
    },3000));
    reject("error");
});

pr.then(()=>{console.log("You have a message")}).catch(error=>{console.log(error)});
*/

//Example2 on Promises

/*
const p = new Promise((resolve,reject)=>{
    let a = 1+1;
    if(a == 2){
        resolve('success');
    }
    else{
        reject('failed');
    }
});

p.then((message)=>{
    console.log('your promise is '+ message);
}).catch((error)=>{
    console.log('your promise is '+ error);
});

*/

//EXAMPLE3 AS A PROMISE

/*
function watchPromise(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name: 'User left',
                message: ':('
            }
            );
        }
        else if(userWatchingMeme){
            reject({
                name: 'User watching meme',
                message: 'callback < meme'
            });
        }
        else{
            resolve('watching callback');
        }
    });
}

watchPromise().then((message)=>{
    console.log('Success ' + message);
})
.catch((error)=>{
    console.log(error.name+" "+error.message);
});

*/

// PROMISE EXAMPLE 4 USING promise.all and promise.race

/*
const video1 = new Promise((resolve,reject)=>{
    resolve('Video1 recorded');
    reject('Failed to record video1');
});

const video2 = new Promise((resolve,reject)=>{
    resolve('Video2 recorded');
    reject('Failed to record video2');
});
const video3 = new Promise((resolve,reject)=>{
    resolve('Video3 recorded');
    reject('Failed to record video3');
});

//Promise.all return all promise when either fulfilled or rejected

Promise.all([
    video1,
    video2,
    video3
]).then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

// Promise. race will give the first promise out of all Promise which either get resolve or rejected
Promise.race([
    video1,
    video2,
    video3
]).then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

*/

// Promise.race example

/*

const p1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Promise 1 after 3s");
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Promise 2 after 2s");
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"Promise 3 after 1s");
})

Promise.race([
    p1,p2,p3
]).then((message)=>{
    console.log(message);
});

*/

// ASYNC AND AWAIT

function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making request to ${location}`);
        if(location === 'Google'){
            resolve('Google says hi')
        }
        else{
            reject('We can only talk to Google');
        }
    });
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log("Processing response");
        resolve(`Extra Information + ${response}`);
    })
}

//using js promises way
// makeRequest('Facebook').then((response)=>{
//     console.log('Response recieved');
//     return processRequest(response);
// }).then((processedResponse)=>{
//     console.log(processedResponse);
// }).catch(error=>{
//     console.log(error);
// })

async function doWork(){
    try{
        const response = await makeRequest('Google');
        console.log('Response recieved');

        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    }
    catch(error){
        console.log("There is a error: "+error);
    }
}

doWork();
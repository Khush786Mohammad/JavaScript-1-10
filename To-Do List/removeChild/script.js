const content = document.querySelector('.content');
const childElement = document.querySelector('.cls1');

// console.log(childElement);
setTimeout(()=>{
    content.removeChild(childElement);
},5000);
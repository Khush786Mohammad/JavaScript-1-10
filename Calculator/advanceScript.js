// let display = document.querySelector(".display");
// let btn = document.querySelectorAll(".btn");

// let clear = document.querySelector("#clear");
// let deleteText = document.querySelector("#deleteTxt");

// const expression = new RegExp("^[+-.%/*]$");
// const validFirst = new RegExp("^[-+.]$");

// let flag = true;

// function removeZero(){
//     display.innerHTML = "";
// }

// btn.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         let number = parseInt(button.innerHTML);
//         if(number == 0 && parseInt(display.innerHTML) == 0 && flag)
//             display.innerHTML = "0";

//         else if(number >= 0 && number <= 9){
//             if(flag){
//                 removeZero();
//                 flag = false;
//             }
//             display.innerHTML = display.innerHTML + button.innerHTML;
//         }
//         else if(button.innerHTML === "00"){
//             display.innerHTML = display.innerHTML + "00";
//         }
//         else{
//             flag = false;
//             if(validFirst.test(button.innerHTML)){
//                 let txt = display.innerHTML;
//                 if(txt.length == 1 && (button.innerHTML == '+' || button.innerHTML == '-')){
//                     display.innerHTML = button.innerHTML;
//                 }
//                 else if(txt.length == 1 && button.innerHTML == '.'){
//                     display.innerHTML = display.innerHTML + ".";
//                 }
//             }
//         }
//     });
// });

// //clear the display menu
// function setToZero(){
//     display.innerHTML = "0";
//     flag = true;
//     console.log('zeo');
// }
// clear.addEventListener('click',setToZero);

// //delete one txt at a time
// deleteText.addEventListener('click',()=>{
//     let txt = display.innerHTML;
//     //check if txt is not empty;

//     if(txt.length == 1 && txt.charAt(0) == 0){
//         console.log("yes");
//     }
//     (txt.length == 1) ? (setToZero()):(display.innerHTML = txt.slice(0,txt.length-1));
// });
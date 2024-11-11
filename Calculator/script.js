let display = document.querySelector(".display");
let btn = document.querySelectorAll(".btn");
let evaluate = document.querySelector(".evaluate");
const expression = new RegExp("^[+-.%/*]$");

btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        let number = parseInt(button.innerHTML);
        if(button.innerHTML === "00")
            display.value += "00";
        else if(number >= 0 && number <= 9)
            display.value += number;
        else if(expression.test(button.innerHTML)){
            display.value += button.innerHTML;
        }
    });
});

let clear = document.querySelector("#clear");
clear.addEventListener('click',allClear);

function allClear(){
    display.value = "";
}

let deleteText = document.querySelector("#deleteTxt");
deleteText.addEventListener('click',deleteTxt);

function deleteTxt(){
    let txt = display.value;
    txt = txt.slice(0,txt.length-1);
    display.value = txt;
}


evaluate.addEventListener('click',()=>{
    console.log("evaluating");
    try{
        display.value = eval(display.value);
    }
    catch(e){
        display.value = "Error";
    }
});
var questionArray = [
    {
        question:"1. Which language is a Scripting Language?",
        opt1:"JavaScript",
        opt2:"Cascade Sheet Style",
        opt3:"HTML",
        opt4:"MySQL",
        
        key:"JavaScript"
    },

    {
        question:"What is the full form of CSS?",
        opt1:"Cascade Style Sheet",
        opt2:"Cascade Sheet Style",
        opt3:"Cascading Style Sheet",
        opt4:`Cascading Styling Sheet`,
        
        key:"Cascading Style Sheet"
    },
    {
        question:`What is the output of "Volvo"+16+4"?`,
        opt1:"Volvo20",
        opt2:"Undefined",
        opt3:"Nan",
        opt4:"Volvo164",
        
        key:"Volvo164"
    },
    {
        question:`Who invented C++?`,
        opt1:"Michael Johnson",
        opt2:"Alan Turing",
        opt3:"Bjarne Stroustrup",
        opt4:"James Gosling",
        
        key:"Bjarne Stroustrup"
    }
];

const result = document.querySelector('.result');
const quizzes = document.querySelector(".quizzes");
let question = document.querySelector(".question");
let option1 = document.querySelector("#opt1");
let option2 = document.querySelector("#opt2");
let option3 = document.querySelector("#opt3");
let option4 = document.querySelector("#opt4");
let labels = document.querySelectorAll("label");
let radios = document.querySelectorAll(`input[type="radio"]`);
const button = document.querySelector(".nxt-btn");

let n = questionArray.length;
let counter = 0;
let score = 0;
let flag = true;

result.classList.toggle('hide');

button.addEventListener('click',addQuestion);

addQuestion();

function addQuestion(){
    if(flag){
        flag = false;

        if(counter == n){
            quizzes.classList.remove('hide');
            result.classList.toggle('hide');
            counter = 0;
            score = 0;
            button.textContent = "Next";
            button.setAttribute('style','margin: auto');
        }
    
        //reset cursor type on labels and enables the radio buttons;
    
        radios.forEach(radio=>{
            radio.disabled = false;
            radio.checked = false;
        });
    
        labels.forEach(label=>{
            label.classList.remove('cursorType');
        });
    
        if(counter < n){
            const obj = questionArray[counter];
            question.textContent = obj["question"];
            option1.textContent = obj["opt1"];
            option2.textContent = obj["opt2"];
            option3.textContent = obj["opt3"];
            option4.textContent = obj["opt4"];
        }
    }    
    else{
        window.alert("Please select a option");
    }
}

quizzes.addEventListener('click',(event)=>{
    if(event.target.matches(`input[type="radio"]`)){
        const key = questionArray[counter].key;
        const id = event.target.id;

        const labelElement = quizzes.querySelector(`label[for=${id}]`);

        if(labelElement.textContent === key){
            if(document.body.classList.contains('changeColor')){
                document.body.classList.remove('changeColor');
            }
            score++;
        }
        else{
            document.body.classList.add('changeColor');
        }
        
        //block radio buttons for further selection

        disableRadioButton();
        changeCursorType();
        counter++;
        flag = true;

        if(counter == n){
            displayResult();
        }
    }
});

function disableRadioButton(){
    radios.forEach((radio)=>{
        radio.disabled = true;
    });
}

function changeCursorType(){
    labels.forEach(lab=>{
        lab.classList.add('cursorType');
    });
}

function displayResult(){
    quizzes.classList.add('hide');
    result.classList.toggle('hide');
    result.textContent = `Your Score is ${score}/${n}`;
    button.textContent = "Reset";
    button.setAttribute('style','margin: 0');
}

let input = document.querySelector("#input-text");
let addBtn = document.querySelector(".add-btn");
let tasks = document.querySelector(".tasks");

let counter = 1;

loadTask();

function createTask(text){
    //check if enter text is not empty
    if(text.length != 0){

        //create a div Element
        let newChild = document.createElement('div');
        newChild.setAttribute('class',`addedTask addedTask${counter}`) //set class
        newChild.setAttribute("id",`task${counter}`); // set newChild id

        //create a radio button
        const radioBtn = `<input type="radio" id=${counter}>`;
        const parser = new DOMParser();
        const newRadioDoc = parser.parseFromString(radioBtn, 'text/html');   
        const newRadio = newRadioDoc.body.firstChild;

        //create a label tag for text
        const label = document.createElement('label');
        label.setAttribute('for',`${counter}`)
        label.textContent = text;

        //create the cross
        const cross = document.createElement('img');
        cross.src = './images/cross.svg';
        cross.setAttribute("alt","delete");
        cross.setAttribute("id",`cross${counter}`);
        cross.setAttribute('class',`cross addedTask${counter}`);
        cross.style.width='30px';

        //proper alignment

        const leftPart = document.createElement('div');
        leftPart.className = 'leftPart';
        leftPart.appendChild(newRadio);
        leftPart.appendChild(label);

        const rightPart = document.createElement('div');
        rightPart.className = 'rightPart';
        rightPart.appendChild(cross);

        newChild.appendChild(leftPart);
        newChild.appendChild(rightPart);

        tasks.appendChild(newChild);
        // sessionStorage.setItem(counter,JSON.stringify(newChild));

        counter++;
        input.value = "";

        saveTask();
    }
}

//creating tasks when add button is clicked
addBtn.addEventListener('click',()=>{
    createTask(input.value);
});

//creating task when user press enter button 

input.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        createTask(e.target.value);
    }
})

//save task to local storage

function saveTask(){
    let tasklist = [];
    tasks.querySelectorAll('label').forEach(function(item){
        tasklist.push(item.textContent);
    });
    localStorage.setItem('task',JSON.stringify(tasklist));
}

//load task from local storage

function loadTask(){
    const taskList = JSON.parse(localStorage.getItem('task')) || [];
    taskList.forEach(tk=>{
        createTask(tk);
    })
}

//Event Delegation ---> events on dynamically added elements or on a specific level

tasks.addEventListener('click',(event)=>{

    // event for deleting tasks
    if(event.target.matches('img')){
        //get the second classname of the class like class="cross addedTask1"
        let cls = event.target.classList[1];// cls -> addedTask1
        let getClass = document.querySelector(`.${cls}`);
        tasks.removeChild(getClass);

        //after deleting a particular task save the remaining task to local storage again.
        saveTask();
    }

    //event for showing status of task (compele/incomplete)
    
    if(event.target.matches(`input[type="radio"]`)){
        let inp = event.target;
        console.log(inp);
        inp.addEventListener('click',()=>{
            if(inp.checked){
                inp.checked = false;
            }
            else{
                inp.checked=true;
            }
        });

        // localStorage.clear();

        // tasks.querySelectorAll(`input[type="radio"]`).forEach((e)=>{
        //     console.log(e);
        // });
    }
});



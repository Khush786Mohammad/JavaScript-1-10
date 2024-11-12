let input = document.querySelector("#input-text");
let addBtn = document.querySelector(".add-btn");
let tasks = document.querySelector(".tasks");

let idCounter = 1;
let radioId = 1;
let crossValue = 1;

addBtn.addEventListener('click',()=>{
    const txt = input.value;
    //check if enter text is not empty
    if(txt.length != 0){

        //create a div Element
        let newChild = document.createElement('div');
        //set the element class and its id
        newChild.className = 'addedTask';
        newChild.setAttribute("id",`task${idCounter}`);

        //create a radio button
        const radioBtn = `<input type="radio" id=${radioId}>`;
        const parser = new DOMParser();
        const newRadioDoc = parser.parseFromString(radioBtn, 'text/html');
        
        const newRadio = newRadioDoc.body.firstChild;

        //create a label tag for text
        const label = document.createElement('label');
        label.setAttribute('for',`${radioId}`)
        label.textContent = txt;

        //create the cross
        const cross = document.createElement('img');
        cross.src = './images/cross.svg';
        cross.setAttribute("alt","");
        cross.setAttribute("id",`cross${crossValue}`);
        cross.className = 'cross';
        cross.style.width='30px';

        //proper alignment

        const leftPart = document.createElement('div');
        leftPart.className = 'leftPart';
        const rightPart = document.createElement('div');
        rightPart.className = 'rightPart';

        leftPart.appendChild(newRadio);
        leftPart.appendChild(label);
        rightPart.appendChild(cross);

        newChild.appendChild(leftPart);
        newChild.appendChild(rightPart);

        tasks.appendChild(newChild);

        radioId++;
        idCounter++;
        crossValue++;
        input.value = "";
    }
});

//Also add event on button when enter key is pressed
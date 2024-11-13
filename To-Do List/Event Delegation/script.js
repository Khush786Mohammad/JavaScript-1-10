const btn = document.querySelector("[data-add-box]");
const grid = document.querySelector('.grid');

btn.addEventListener('click',()=>{
    const box = document.createElement('div');
    box.classList = 'box';
    grid.appendChild(box);
});

let boxes = document.querySelectorAll('.box');

//event delegation on document

// document.addEventListener('click',(event)=>{
//     // console.log(event.target);
//     if(event.target.matches('.box')){
//         event.target.classList.toggle('clicked');
//     }
// });

function eventDelegation(type,selector,callback){
    grid.addEventListener(type,(e)=>{
        if(e.target.matches(selector)){
            callback(e);
        }
    });
}

eventDelegation('click','.box',(event)=>{
    event.target.classList.toggle('clicked');
})
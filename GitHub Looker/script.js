const url = 'https://api.github.com/users/';

const currTheme = document.querySelector('.theme-icon');
const currThemeTxt = document.querySelector('.theme-text');
const inputField = document.querySelector('#inputField');
const submitButton = document.querySelector('.search-btn');
const displayContainer = document.querySelector('.display-container');
const errorMsg = document.querySelector('.error-msg');

currTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('darkMode');

    if(document.body.classList.contains('darkMode')){
        currTheme.src=`./Images/sun.png`;
        currTheme.alt='moon-logo';
        currThemeTxt.textContent = 'Light';
    }
    else{
        currTheme.src='./Images/moon.png';
        currTheme.alt='sun-logo';
        currThemeTxt.textContent = 'Dark';
    }
});

getFromSessionStorage();

inputField.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter' && inputField.value != ""){
        const userEnterName = inputField.value;
        inputField.value = '';
        fetchApi(url+userEnterName);
    }
});

submitButton.addEventListener('click',()=>{
    if(inputField.value != ''){
        const userEnterName = inputField.value;
        inputField.value = '';
        fetchApi(url+userEnterName);
    }
});

async function fetchApi(url){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            sessionStorage.setItem('url',url);
            errorMsg.style.display='none';
            if(displayContainer.classList.contains('hide')){
                displayContainer.classList.remove('hide');
            }
            displayData(data);
        }
        else{
            displayContainer.classList.add('hide');
            errorMsg.style.display = 'block';
            sessionStorage.clear();
            window.alert('No user found');
        }
    }
    catch(error){
        window.alert("error"+ error);
    }
}

function getFromSessionStorage(){
    let url = sessionStorage.getItem('url');
    if(url != null){
        fetchApi(url);
    }
    else{
        fetchApi('https://api.github.com/users/khush786Mohammad');
    }
}

const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function displayData(data){
    const dp = document.querySelector('.left-part');
    const userName = document.querySelector("#user-name");
    const created = document.querySelector('#user-joined');
    const userId = document.querySelector('#user-id');
    const userBio = document.querySelector('#user-bio');
    const noRepos = document.querySelector('#noRepos');
    const noFollowers = document.querySelector('#noFollowers');
    const noFollowing = document.querySelector('#noFollowing');
    const location = document.querySelector('#location');
    const blog = document.querySelector('#blog');
    const twitterId = document.querySelector('#twitter-id');
    const companyName = document.querySelector("#company");

    const urlId = data?.avatar_url;
    dp.style.backgroundImage = `url(${urlId})`;
    if(data?.name)
    userName.textContent = data?.name;
    else
    userName.textContent = 'Bot';
    const joined = data?.created_at.slice(0,10);
    if(joined){
        var date = joined.split('-');
        console.log(date);
    }
    created.innerHTML=`Joined` + " " + `${date[2]}` + " " + `${month[parseInt(date[1])-1]}` + " "+`${date[0]}`;
    userId.innerHTML = data?.login;
    userId.href = data?.html_url;
    if(data?.bio){
        userBio.innerHTML = data?.bio;
    }
    else{
        userBio.innerHTML = 'The user has no bio';
    }
    noRepos.innerHTML = data?.public_repos;
    noFollowers.innerHTML = data?.followers;
    noFollowing.innerHTML = data?.following;
    if(data?.location){
        location.innerHTML = data?.location;
    }
    else{
        location.innerHTML = 'Unknown';
    }

    if(data?.blog){
        blog.innerHTML = 'https://www.'+data?.name + '.com';
        blog.href=data?.blog;
    }
    else{
        blog.innerHTML = 'Not Available';
    }

    if(data?.twitter_username){
        twitterId.innerHTML = data?.twitter_username;
        twitterId.href=`https://x.com/${data?.twitter_username}`;
    }
    else{
        twitterId.innerHTML = 'Not Available';
    }

    if(data?.company){
        companyName.innerHTML = data?.company;
    }
    else{
        companyName.innerHTML = 'Not Available';
    }
}
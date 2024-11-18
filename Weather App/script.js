const formField = document.querySelector("[formField]");
const inputField = document.querySelector('[inputField]');
const searchButton = document.querySelector('.search-btn');

const APIKEY = '38adb73c425d1de52e3b28d432897579';

formField.addEventListener('submit',(event)=>{
    event.preventDefault();
    let city = inputField.value;
    fetchApi(city);
});

searchButton.addEventListener('click',()=>{
    let city = inputField.value;
    fetchApi(city);
});

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function fetchApi(city){
    const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
    console.log(response);
}
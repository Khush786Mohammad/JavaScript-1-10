const APIKEY = '38adb73c425d1de52e3b28d432897579';

const formField = document.querySelector("[formField]");
const inputField = document.querySelector('[inputField]');
const searchButton = document.querySelector('.search-btn');
const displayClass = document.querySelector(".displayClass");
const error = document.querySelector('.error');

displayClass.style.display='none';
error.classList.add('display');

formField.addEventListener('submit',(event)=>{
    event.preventDefault();
    let city = inputField.value;
    inputField.value="";
    fetchApi(city);

});

searchButton.addEventListener('click',()=>{
    let city = inputField.value;
    inputField.value="";
    fetchApi(city);
});

async function fetchApi(city){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`);
        if(response.ok){
            const data = await response.json();
            displayData(data);
        }
        else{
            displayClass.style.display='none';
            if(error.classList.contains('display'))
            error.classList.remove('display');
            window.alert("Not a valid City Name");
        }
    }
    catch(error){
        console.log("Error"+error);
    }
}

function displayData(data){
    displayClass.style.display = 'flex';
    error.classList.add('display');
    const temperature = document.querySelector('.temperature');
    const cityName = document.querySelector('.cityName');
    const humidity = document.querySelector('.humidity');
    const windSpeed = document.querySelector('.wind-speed');
    const iconImage = document.querySelector('.icon-image');
    const temp = data?.main?.temp.toFixed(2);
    temperature.innerHTML = `${temp}<sup>o</sup><span id="celcius">C</span>`;
    cityName.innerHTML = data?.name;
    humidity.innerHTML = data?.main?.humidity+"%";
    windSpeed.innerHTML = `${data?.wind?.speed}`+"km/h";
    const iconType = data?.weather[0]?.icon;

    iconImage.src = "http://openweathermap.org/img/w/" + iconType + ".png";
}
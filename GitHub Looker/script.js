const url = 'https://api.github.com/users/Khush786Mohammad';

async function fetchApi(){
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        console.log(data);
        console.log(data?.company);
    }
}

fetchApi();
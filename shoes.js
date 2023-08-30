function selling()
{
        num1 = parseInt(document.getElementById("firstNumber").value);
        num2 = parseInt(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 / (num2 + 1);
}

const api_key = 'be02d007e075aaf48620067a44ed0104';
const base_url = `http://api.weatherstack.com/current?access_key=be02d007e075aaf48620067a44ed0104`;

const btn = document.querySelector('.api-button');
const queryElement = document.querySelector('.api-input');
const container = document.querySelector('.container');

btn.addEventListener('click', getWeather);

//get weather search
async function getWeather(e){
    e.preventDefault();

    let url = base_url;
    
    if(queryElement.value){
        url += `&query=${queryElement.value}`;
        queryElement.value ='';
    }

    //throws error for nothing found or invalid url
    console.log(url);
    try{
        const response = await fetch(url);
        if(!response.ok)
            throw Error(`Error: ${response.url} ${response.statusText}`);
        const weather = await response.json();
        addWeather(weather);
    }catch{
        console.log(error.message);
    }
}
//add weather temperature in C, city, country, and icon
async function addWeather(weather){
    //console.log(gifs);
    container.innerHTML = '';

        //if invalid place throws error
        if(weather['success'] === false){
        const error = document.createElement('h1');
        error.textContent = 'Please enter a valid city or country!';
        container.append(error);
        }
        else{
        const city = document.createElement('h1');
        city.textContent = weather.current['temperature']+'C° '+ weather.location['name'] + ', ' + weather.location['country'];
        container.append(city);

        const time = document.createElement('h2');
        time.textContent = weather.location['localtime'];
        container.append(time);


        const icon = document.createElement('img');
        icon.src = weather.current['weather_icons'];
        container.append(icon);

        }


//         const image = document.createElement('img');
//     image.src = element.images.fixed_height.url;
//     image.alt = element.title;
        
    

    
}





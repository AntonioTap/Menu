const ApiKey = '0a5ef593880fce0be164a4cea2d6fe84';
const UrlBase = 'https://api.openweathermap.org/data/2.5/weather';

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const btnCity = document.querySelector('#btnCity');
const inputCity = document.querySelector('#city');


const fetchapi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon, apiKey) {
    const url = `${ UrlBase }?lat=${ lat }&lon=${ lon }&appid=${ apiKey }`;
    const clima = await fetchapi(url);
    console.log(clima);
    const temperature = (clima.main.temp - 273.15).toFixed(2)
    document.querySelector('h2').innerHTML = temperature + '°C ' + clima.name;
    pintaFondo(temperature);
    pintaEmoji(temperature);
}

async function getClimabyCity(city, apiKey) {
    const url = `${ UrlBase }?q=${city }&appid=${apiKey}`;
    const clima = await fetchapi(url);
    const temperature = (clima.main.temp - 273.15).toFixed(2)
    document.querySelector('h2').innerHTML = temperature + '°C ' + clima.name;
    pintaFondo(temperature);
    pintaEmoji(temperature);
}

function pintaFondo(temp) {
    const fondo = document.querySelector('body');
    if (temp < 13) {
        fondo.style.background = 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)';
    } else if(temp < 22){
        fondo.style.background = 'linear-gradient(90deg, #fcff9e 0%, #c67700 100%)';
    }else{
        fondo.style.background = 'linear-gradient(90deg, #d53369 0%, #daae51 100%)';
    }
}

function pintaEmoji(temp) {
    const emo = document.querySelector('#emoji');
    if (temp < 13) {
        emo.innerHTML =  '🥶';
    } else if(temp < 22){
        emo.innerHTML = '😀';
    }else{
        emo.innerHTML = '🥵';
    }
}

//Obtener geolocalización///
navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getClima(lat, lon, ApiKey);
  });

  function buttonAction() {
    const city = inputCity.value;
    if (city) {
        getClimabyCity(city, ApiKey);
    }
  }

  btnCity.addEventListener('click',buttonAction);
  
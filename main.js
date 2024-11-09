
const button = document.querySelector('.button');
const input = document.querySelector('.input'); 

button.addEventListener('click',async () => {
    const location = document.querySelector('.location')
    const city = input.value;
    const apiKey = '19ba8ab464ff4579d588462c639c781e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=19ba8ab464ff4579d588462c639c781e`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod == 200) {   
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            
            document.getElementById('weatherResult').innerHTML =
             `
             <div class="flex font-bold items-center justify-center bg-white text-blue-950 rounded-lg p-4"> 
                <h3 class="text-xl font-bold" >Weather in <br> ${data.name}</h3>
                </div>
             <div class="flex font-bold items-center justify-center bg-white text-blue-950 rounded-lg p-4"> 
                    <img id="weather-icon" src=${iconUrl} alt="">
                </div>
                <div class="flex font-bold items-center justify-center flex-col rounded-lg bg-white p-4 text-blue-950">
                <p>Temperature: <br> ${data.main.temp} °C</p>
                </div>
                <div class="flex font-bold items-center justify-center bg-white rounded-lg p-4 text-blue-950">
                <p>Humidity: <br> ${data.main.humidity}%</p>
                </div>
                <div class="flex font-bold items-center justify-center bg-white rounded-lg p-4 text-blue-950  ">
                <p>Sky conditions: <br> ${data.weather[0].description}</p>
                </div>
            `;
            
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Error fetching data!</p>`;
    }
});



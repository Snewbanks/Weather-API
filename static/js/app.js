async function getapi( formplace ) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ formplace }&appid=bfff8f0e6fb75a3c6bb2c0c40c56e76b&units=imperial`);

    let data = await response.json();
    console.log(data);
    show(data);
}

let weatherData = document.querySelector('#weatherData');
weatherData.addEventListener('submit', function(e) {
    
    e.preventDefault();

    let place = document.getElementById("place").value;

    getapi(place );
})

function show(data) {
    let tab =
        `<tr>
            <th>Name</th>
            <th>Feels Like</th>
            <th>High</th>
            <th>Low</th>
            <th>Wind Direction</th>
            <th>Wind Speed</th>
            <th>Forecast</th>
            <th>Humidity</th>
        </tr>`;
    
  
        console.log(data)
        
        tab += `<tr> 
            <td>${data.name} </td>
            <td>${data.main.temp_max}</td>          
            <td>${data.main.temp_min}</td>
            <td>${data.main.feels_like}</td>
            <td>${data.wind.deg}</td>
            <td>${data.wind.speed}</td>
            <td>${data.weather[0].main}</td>
            <td>${data.main.humidity}</td>
        </tr>`;
    
    document.getElementById("weather").innerHTML = tab;
}
// Uses openweathermap api to return weather temperature
async function getWeatherInfo(latitude, longitude) {
    const apiKey = 'YOUROPENWEATHERMAPAPIKEYHERE';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
    let response = await fetch(apiUrl);
    let jsonData = await response.json();

    return jsonData['main']['temp'];
}

// Updates date and weather fields on page load
async function updateItems() {
    // Add you own latitude and longitude to display weather information
    const latitude = 0;
    const longitude = 0;
    
    let dateString = new Date().toDateString();
    let tempData = await getWeatherInfo(latitude, longitude);

    // Write data to site
    document.getElementById('temp').innerHTML = `Home Temperature is ${tempData}° F`;
    document.getElementById("date").innerHTML = `Today is ${dateString}`;

}

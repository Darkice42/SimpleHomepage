// Uses openweathermap api to return weather temperature
async function getWeatherInfo(latitude, longitude) {
    const apiKey = '74931d3bf884baaeb59e569ec12f7a33';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
    let response = await fetch(apiUrl);
    let jsonData = await response.json();

    return jsonData['main']['temp'];
}

// Updates date and weather fields on page load
async function updateItems() {
    // Probably shouldn't upload this anywhere...
    const latitude = 44.986;
    const longitude = -93.228;
    
    let dateString = new Date().toDateString();
    let tempData = await getWeatherInfo(latitude, longitude);

    // Write data to site
    document.getElementById('temp').innerHTML = `Home Temperature is ${tempData}° F`;
    document.getElementById("date").innerHTML = `Today is ${dateString}`;

}
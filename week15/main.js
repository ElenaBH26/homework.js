const cities = ['Новосибирск', 'Москва', 'Липецк', 'Тула'];
const temperatureInCities = [];

for(let i = 0; i < cities.length; i++) {
let temperature = prompt(`Введите температуру для города ${cities[i]}:`);

const temperatureNumber = Number(temperature);
temperatureInCities.push(temperatureNumber)
}

const list = document.getElementById('list'); 
for(let i = 0; i < cities.length; i++) {
    const listItem = document.createElement('li');
    let temperatureText = temperatureInCities[i] + "°C";
    listItem.textContent = `${cities[i]}: ${temperatureText}`;
    list.appendChild(listItem);
    listItem.style.listStyleType = 'none';

}
let maxTemp = -Infinity;
let minTemp = Infinity;


for (let i = 0; i < temperatureInCities.length; i++) {
        if (temperatureInCities[i] > maxTemp) {
            maxTemp = temperatureInCities[i];
        }
        if (temperatureInCities[i] < minTemp) {
            minTemp = temperatureInCities[i];
        }
    }

    const maxTempParagraph = document.getElementById('maxTemperature');
    const minTempParagraph = document.getElementById('minTemperature');

if(maxTempParagraph){
    maxTempParagraph.textContent = `Максимальная температура: ${maxTemp}°C;`
    maxTempParagraph.style.fontWeight = 'bold'
}
if(minTempParagraph){
    minTempParagraph.textContent = `Минимальная температура: ${minTemp}°C;`
    maxTempParagraph.style.fontWeight = 'bold'
}








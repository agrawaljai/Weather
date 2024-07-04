const baseUrl = "https://api.weatherapi.com/v1/current.json?key=dad2c970f2e046408bb162934240407"

export const getWeatherDataForCity = async(city) => {
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
    return await response.json();
};

export const getWeatherDataForLocation = async(lat, lon) => {
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
};
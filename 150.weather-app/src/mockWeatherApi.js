const mockWeatherData = {
  london: { city: 'London', temp: 15, condition: 'Cloudy' },
  newyork: { city: 'New York', temp: 22, condition: 'Sunny' },
  tokyo: { city: 'Tokyo', temp: 28, condition: 'Rainy' },
  sydney: { city: 'Sydney', temp: 25, condition: 'Sunny' },
};

export const fetchWeather = (city) => {
  console.log(`API: Fetching weather for "${city}"...`);
  const sanitizedCity = city.toLowerCase().replace(/\s+/g, '');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockWeatherData[sanitizedCity]) {
        resolve(mockWeatherData[sanitizedCity]);
      } else {
        reject(new Error('City not found'));
      }
    }, 500);
  });
};
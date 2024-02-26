const baseUrl =
  "https://api.weatherapi.com/v1/current.json?key=fda664274c134c168f6120150241302";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseUrl}&q=${city}&aqi=${"yes"}`);
  return await response.json();
};

export const getCurrentLocation = async (lat, lon) => {
  const response = await fetch(`${baseUrl}&q=${lat}&q=${lon}`);
  return await response.json();
};

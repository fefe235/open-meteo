import geoData from "./geoData.json";
export default async function handler(req, res) {
  // const { cityInput } = req.body;
  // const geoRes = await fetch(
  //   `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&count=1`
  // );
  // const geoData = await geoRes.json();
  // if (!geoData.results) {
  //   console.log("2Ville non trouvée");
  // }
  const geodata = geoData;
  const { latitude, longitude, name, country } = geodata.results[0];
  const WeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await WeatherData.json();
  const result = {
    weather: data,
    geodata: geodata,
  };
  res.status(200).json(result);
}

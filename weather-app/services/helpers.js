import {
  isoToLocalTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  unitSystem == "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

export const getTime = (unitSystem, currentTime, timezone) =>
  unitSystem == "metric"
    ? isoToLocalTime(currentTime, timezone)
    : timeTo12HourFormat(isoToLocalTime(currentTime, timezone));

export const getAMPM = (unitSystem, currentTime, timezone) =>
  unitSystem === "imperial"
    ? isoToLocalTime(currentTime, timezone).split(":")[0] >= 12
      ? "PM"
      : "AM"
    : "";
// weatherHelper.js

// Mapping des codes météo Open-Meteo
// weatherHelperHTML.js

const weatherCodesHTML = {
  0: { description: "Ciel dégagé", emoji: "☀️", color: "#FFD700" },
  1: { description: "Principalement clair", emoji: "🌤️", color: "#FFEA85" },
  2: { description: "Partiellement nuageux", emoji: "⛅", color: "#FFEFA5" },
  3: { description: "Nuageux", emoji: "☁️", color: "#B0C4DE" },
  45: { description: "Brouillard", emoji: "🌫️", color: "#C0C0C0" },
  48: { description: "Brouillard givrant", emoji: "🌫️❄️", color: "#A0A0A0" },
  51: { description: "Bruine légère", emoji: "🌧️", color: "#87CEFA" },
  53: { description: "Bruine modérée", emoji: "🌧️", color: "#7EC0EE" },
  55: { description: "Bruine dense", emoji: "🌧️", color: "#6CA6CD" },
  56: {
    description: "Pluie verglaçante légère",
    emoji: "🌧️❄️",
    color: "#5F9EA0",
  },
  57: {
    description: "Pluie verglaçante dense",
    emoji: "🌧️❄️",
    color: "#4682B4",
  },
  61: { description: "Pluie légère", emoji: "🌦️", color: "#00BFFF" },
  63: { description: "Pluie modérée", emoji: "🌧️", color: "#1E90FF" },
  65: { description: "Pluie forte", emoji: "🌧️🌧️", color: "#104E8B" },
  66: {
    description: "Pluie verglaçante légère",
    emoji: "🌧️❄️",
    color: "#1874CD",
  },
  67: {
    description: "Pluie verglaçante forte",
    emoji: "🌧️❄️",
    color: "#104E8B",
  },
  71: { description: "Neige légère", emoji: "🌨️", color: "#ADD8E6" },
  73: { description: "Neige modérée", emoji: "🌨️", color: "#87CEEB" },
  75: { description: "Neige forte", emoji: "❄️❄️", color: "#4682B4" },
  77: { description: "Grains de neige", emoji: "🌨️", color: "#B0E0E6" },
  80: {
    description: "Averses de pluie légères",
    emoji: "🌦️",
    color: "#00BFFF",
  },
  81: {
    description: "Averses de pluie modérées",
    emoji: "🌧️",
    color: "#1E90FF",
  },
  82: {
    description: "Averses de pluie fortes",
    emoji: "🌧️🌧️",
    color: "#104E8B",
  },
  85: {
    description: "Averses de neige légères",
    emoji: "🌨️",
    color: "#B0E0E6",
  },
  86: {
    description: "Averses de neige fortes",
    emoji: "❄️🌨️",
    color: "#4682B4",
  },
  95: { description: "Orage", emoji: "⛈️", color: "#FFA500" },
  96: {
    description: "Orage avec grêle légère",
    emoji: "⛈️🌨️",
    color: "#FF8C00",
  },
  99: {
    description: "Orage avec grêle forte",
    emoji: "⛈️🌨️",
    color: "#FF4500",
  },
};

function getWeatherJSX(code) {
  const weather = weatherCodesHTML[code] || {
    description: "Code inconnu",
    emoji: "❓",
    color: "#808080",
  };
  return (
    <span style={{ color: weather.color, fontWeight: "bold" }}>
      {weather.emoji} {weather.description}
    </span>
  );
}

export { getWeatherJSX };

import SearchBox from "./SearchBox";

import InfoBox from "./InfoBox";
import { useState } from "react";
function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    feelsLike: 30,
    temp: 30,
    tempMin: 20,
    tempMax: 40,
    humidity: 47,
    description: "Haze",
  });

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>WeatherApp</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;

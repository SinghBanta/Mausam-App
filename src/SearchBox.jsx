 
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import './SearchBox.css';
import PropTypes from 'prop-types';
import { useState } from "react";


function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="7070589d48694d3d6fdb789ab37a7a2b";

    let getWeatherInfo=async()=>{
      try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data=await response.json();
        console.log(data);
        let result={
            city:city,
            temp:data.main.temp,
            tempMin:data.main.temp_min,
            tempMax:data.main.temp_max,
            humidity:data.main.humidity,
            feelsLike:data.main.feels_like,
            description:data.weather[0].description,
            icon:data.weather[0].icon
        };
        console.log(result);
        return result;
      }catch{
        throw new Error("City Not Found");
      }
  };


    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async(event)=>{
      try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
      }catch{
        setError(true);
      }
    }



  return (
    <div className="SearchBox">
     
      <form onSubmit={handleSubmit}>
        <TextField id="City" label="City Name"  variant="outlined" required value={city}
            onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">
        Search
      </Button>
      {error && <p style={{color:"red"}}>No such place exist</p>}
      </form>
    </div>
  );
}

SearchBox.propTypes = {
    updateInfo: PropTypes.func.isRequired,
};

export default SearchBox;


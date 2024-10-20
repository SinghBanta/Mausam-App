/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./InfoBox.css";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const COLD_URL =
    "https://images.unsplash.com/photo-1534324482290-e147f564f5b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGR8ZW58MHx8MHx8fDA%3D";

  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhaW55fGVufDB8fDB8fHww";

  const CLOUD_URL =
    "https://plus.unsplash.com/premium_photo-1664112065598-77832fcd9b8f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5fGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : info.temp < 10
                ? COLD_URL
                : CLOUD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {info.city} {
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <LightModeIcon/>
                : info.temp < 10
                ? <AcUnitIcon/>
                : <LightModeIcon/>
            }
            </Typography>
            <Typography variant="body2" component={"span"}>
              <p>Temperature={info.temp}&deg;C </p>
              <p>Humidity={info.humidity}</p>
              <p>Min Temperature={info.tempMin}&deg;</p>
              <p>Max Temperature={info.tempMax}&deg;</p>
              <p>
                The Weather can be described as <i>{info.description}</i> and
                feels like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;

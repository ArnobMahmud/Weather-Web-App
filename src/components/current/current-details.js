import React, { useState } from "react";
import { CurrentInfoDetailsStyle } from "../../config/palette";
import axios from "axios";
import { FaThermometerFull } from "react-icons/fa";
import { BsThermometerSnow } from "react-icons/bs";
import { MdThermostatAuto } from "react-icons/md";
import { WiCloudyWindy } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindyCloudy } from "react-icons/ti";

const CurrentInfoDetails = () => {
  const [data, setData] = useState("");

  const api = "de3d0e38c72be60cdab4754400c25189";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Jamalpur&appid=${api}`;

  axios.get(url).then((res) => {
    setData(res.data);
    console.log(res.data);
  });

  return (
    <CurrentInfoDetailsStyle>
      <div className="card desc row">
        <div className="col-xl-2 infocard">
          <h1>40 °C</h1>
          <br></br>
          <h3>
            <FaThermometerFull className="icon" />
          </h3>{" "}
          <br></br>
          <h4>Max Temp</h4>
        </div>
        <div className="col-xl-2 infocard">
          <h1>40 °C</h1> <br></br>
          <h3>
            <BsThermometerSnow className="icon" />
          </h3>{" "}
          <br></br>
          <h4>Min Temp</h4>
        </div>
        <div className="col-xl-2 infocard">
          <h1>40 °C</h1> <br></br>
          <h3>
            <MdThermostatAuto className="icon" />
          </h3>{" "}
          <br></br>
          <h4>Feels Like</h4>
        </div>
        <div className="col-xl-2 infocard">
          <h1>3 kmph</h1> <br></br>
          <h3>
            <WiCloudyWindy className="icon" />
          </h3>{" "}
          <br></br>
          <h4>Wind Speed</h4>
        </div>
        <div className="col-xl-2 infocard">
          <h1>40 %</h1> <br></br>
          <h3>
            <WiHumidity className="icon" />
          </h3>{" "}
          <br></br>
          <h4>Humidity</h4>
        </div>
        <div className="col-xl-2 infocard">
          <h1>10 Pa</h1> <br></br>
          <h3>
            <TiWeatherWindyCloudy className="icon" />
          </h3>
          <h4>Pressure</h4>
        </div>
      </div>
    </CurrentInfoDetailsStyle>
  );
};

export default CurrentInfoDetails;

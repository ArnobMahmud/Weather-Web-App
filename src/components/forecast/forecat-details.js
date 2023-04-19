import React, { useState, useEffect } from "react";
import { ForecastInfoDetailsStyle } from "../../config/palette";
import axios from "axios";
import Haze from "../../images/haze.png";
import Clear from "../../images/sun.png";
import Clouds from "../../images/cloud.png";
import Rain from "../../images/rain.png";
import ThunderStorm from "../../images/thunderstorm.png";
import Mist from "../../images/mist.png";
import Snow from "../../images/snow.png";
import Drizzle from "../../images/drizzle.png";

const ForecastInfoDetails = () => {
  const [data, setData] = useState([]);

  const api = "a51750ca2e43be5d10539279aa353247";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=Jamalpur&appid=${api}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <ForecastInfoDetailsStyle>
      <div className="card desc row">
        {data.list?.map((info, key) => {
          return (
            <div key={key} className="col-xl-2 infocard">
              <h4>{Math.round(info.main.temp - 273)} °C</h4>
              <br></br>
              {info.weather ? (
                info.weather[0].main === "Clear" ? (
                  <img className="foreimage" src={Clear} />
                ) : info.weather[0].main === "Haze" ? (
                  <img className="foreimage" src={Haze} />
                ) : info.weather[0].main === "Clouds" ? (
                  <img className="foreimage" src={Clouds} />
                ) : info.weather[0].main === "Rain" ? (
                  <img className="foreimage" src={Rain} />
                ) : info.weather[0].main === "Drizzle" ? (
                  <img className="foreimage" src={Drizzle} />
                ) : info.weather[0].main === "Thunderstorm" ? (
                  <img className="foreimage" src={ThunderStorm} />
                ) : info.weather[0].main === "Snow" ? (
                  <img className="foreimage" src={Snow} />
                ) : info.weather[0].main === "Mist" ? (
                  <img className="foreimage" src={Mist} />
                ) : null
              ) : null}
              <br></br>
              <br></br>
              <p>{info.dt_txt}</p>
            </div>
          );
        })}
      </div>
    </ForecastInfoDetailsStyle>
  );
};
export default ForecastInfoDetails;

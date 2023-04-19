import React, { useState, useEffect } from "react";
import { GiThermometerHot } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { BsCloudHaze2 } from "react-icons/bs";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { CurrentInfoStyle } from "../../config/palette";
import axios from "axios";
import Clear from "../../images/sun.png";
import Haze from "../../images/haze.png";
import Rain from "../../images/rain.png";
import Clouds from "../../images/cloud.png";
import Drizzle from "../../images/drizzle.png";
import Mist from "../../images/mist.png";
import ThunderStorm from "../../images/thunderstorm.png";
import Snow from "../../images/snow.png";

const CurrentInfo = () => {
  const [data, setData] = useState("");

  const api = "a51750ca2e43be5d10539279aa353247";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${api}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <CurrentInfoStyle>
      <div className="card justify-content-space-between">
        <h2>{data.name}</h2>
        <h1>
          <GiThermometerHot />
          {data.main ? Math.round(data.main.temp - 273) : null} °C
        </h1>
        <p className="align-items-center">
          <BsCloudHaze2 className="icons" />{" "}
          {data.weather ? data.weather[0].main : null}
        </p>
        <h5>
          <TiWeatherWindyCloudy className="icons" />
          Feels Like :{" "}
          {data.main ? Math.round(data.main.feels_like - 273) : null} °C
        </h5>
        <h5>
          <WiHumidity className="icons" />
          Humidity : {data.main ? Math.round(data.main.humidity) : null}%
        </h5>
        {data.weather ? (
          data.weather[0].main === "Haze" ? (
            <img className="image" src={Haze} />
          ) : data.weather[0].main === "Clouds" ? (
            <img className="image" src={Clouds} />
          ) : data.weather[0].main === "Rain" ? (
            <img className="image" src={Rain} />
          ) : data.weather[0].main === "Thunderstorm" ? (
            <img className="image" src={ThunderStorm} />
          ) : data.weather[0].main === "Mist" ? (
            <img className="image" src={Mist} />
          ) : data.weather[0].main === "Drizzle" ? (
            <img className="image" src={Drizzle} />
          ) : data.weather[0].main === "Clear" ? (
            <img className="image" src={Clear} />
          ) : data.weather[0].main === "Snow" ? (
            <img className="image" src={Snow} />
          ) : null
        ) : null}
      </div>
    </CurrentInfoStyle>
  );
};

export default CurrentInfo;

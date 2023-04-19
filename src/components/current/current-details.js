import React, { useState, useEffect } from "react";
import { CurrentInfoDetailsStyle } from "../../config/palette";
import axios from "axios";
import { FaThermometerFull } from "react-icons/fa";
import { BsThermometerSnow } from "react-icons/bs";
import { MdOutlineAir } from "react-icons/md";
import { WiCloudyWindy } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

const CurrentInfoDetails = () => {
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
    <CurrentInfoDetailsStyle>
      <div className="card desc row justify-content-around">
        <div className="col-xl-3 infocard">
          <h1>{data.main ? Math.round(data.main.temp_max - 273) : null} °C</h1>
          <br></br>
          <h3>
            <FaThermometerFull className="icon" />
          </h3>{" "}
          <br></br>
          <h4>Max Temp</h4>
        </div>
        <div className="col-xl-3 infocard">
          <h1>{data.main ? Math.round(data.main.temp_min - 273) : null} °C</h1>{" "}
          <br></br>
          <h3>
            <BsThermometerSnow className="icons" />
          </h3>{" "}
          <br></br>
          <h4>Min Temp</h4>
        </div>

        <div className="col-xl-3 infocard">
          <h1>
            {data.wind ? Math.round(data.wind.speed * 2.23694) : null} mph
          </h1>{" "}
          <br></br>
          <h3>
            <WiCloudyWindy className="icons" />
          </h3>{" "}
          <br></br>
          <h4>Wind Speed</h4>
        </div>
        <div className="col-xl-3 infocard">
          <h1>{data.main ? Math.round(data.main.pressure / 10) : null} hPa</h1>{" "}
          <br></br>
          <h3>
            <MdOutlineAir className="icons" />
          </h3>
          <br></br>
          <h4>Pressure</h4>
        </div>
      </div>
    </CurrentInfoDetailsStyle>
  );
};

export default CurrentInfoDetails;

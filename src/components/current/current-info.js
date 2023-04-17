import React, { useState } from "react";
import { GiThermometerHot } from "react-icons/gi";
import { BsFillSunriseFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";
import { CurrentInfoStyle } from "../../config/palette";
import axios from "axios";

const CurrentInfo = () => {
  const [data, setData] = useState("");

  const api = "30bc4e2dd2360016ee9862cee893db4d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Jamalpur&appid=${api}`;

  axios.get(url).then((res) => {
    setData(res.data);
    console.log(res.data);
  });

  return (
    <CurrentInfoStyle>
      <div className="card">
        <h2>Jamalpur</h2>
        <h1>
          <GiThermometerHot />
        </h1>

        <p className="align-items-center">
          <BsFillSunriseFill /> Sun rise :
        </p>
        <p>
          {" "}
          <BsFillSunsetFill /> Sun set :
        </p>
      </div>
    </CurrentInfoStyle>
  );
};

export default CurrentInfo;

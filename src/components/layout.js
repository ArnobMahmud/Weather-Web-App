import React from "react";
import styled from "styled-components";
import CurrentInfo from "./current/current-info";
import ForecastInfo from "./forecast/forecast-info";
import CurrentInfoDetails from "./current/current-details";
import ForecastInfoDetails from "./forecast/forecat-details";

const Layout = () => {
  return (
    <Interface>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          {/* <div className="inputs">
            <div className="form-input">
              <input type="text" placeholder="Search here..." />
            </div>
          </div> */}
          <div className="col-xl-4 col-md-6 col-sm-12">
            <CurrentInfo />
            <ForecastInfo />
          </div>
          <div className="col-xl-8 col-md-6 col-sm-12">
            <CurrentInfoDetails />
            <ForecastInfoDetails />
          </div>
        </div>
      </div>
    </Interface>
  );
};

export default Layout;

const Interface = styled.div``;

import React from "react";
import CurrentInfo from "./current/current-info";
import CurrentInfoDetails from "./current/current-details";
import ForecastInfoDetails from "./forecast/forecat-details";

const Layout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-4 col-md-6 col-sm-12">
            <CurrentInfo />
          </div>
          <div className="col-xl-8 col-md-6 col-sm-12">
            <CurrentInfoDetails />
            <ForecastInfoDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

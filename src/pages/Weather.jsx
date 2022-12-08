import React, { useState, useEffect } from "react";
import state from "../state";

import { useSelector, useDispatch } from "react-redux";

import { getWeatherData } from "../store/WeatherAyncActions";

const Weather = () => {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.user.weather);

  const [cityName, setCityName] = useState("Andhra Pradesh");

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  useEffect(() => {
    dispatch(getWeatherData(cityName));
  }, [cityName]);

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
      }}
      className="mt-4 p-5 text-center"
    >
      <div>
        <p>Select State</p>

        <select onChange={handleChange}>
          {state.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </div>

      <div className="weather mt-5 row mx-auto">
        <div className="col">
          <p>Temperature</p>
          <p className="fs-1">
            {Math.floor(`${weather?.main?.temp}` - 273.15)} *C
          </p>
        </div>
        <div className="col">
          <p>Humidity</p>
          <p className="fs-1">{weather?.main?.humidity}</p>
        </div>
        <div className="col">
          <p>Pressure</p>
          <p className="fs-1">{weather?.main?.pressure}</p>
        </div>
      </div>
    </section>
  );
};

export default Weather;

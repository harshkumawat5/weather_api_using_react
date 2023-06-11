import React, { useEffect, useState } from "react";
import axios from "axios";
import Apikey from './apiKey';

const Box = ({ CityName }) => {
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("");
  const [isValidCity, setIsValidCity] = useState(true); // New state variable for city validity

  useEffect(() => {
    const getData = async (city) => {
      if (!city) return;
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=` + Apikey
        );
        // console.log(res);

        setHumidity(res.data.main.humidity);
        setPressure(res.data.main.pressure);
        setCountry(res.data.sys.country);
        setCity(res.data.name);
        setTemperature(res.data.main.temp);
        setIsValidCity(true); // City is valid if API request is successful
      } catch (err) {
        // console.log(err);
        setIsValidCity(false); // City is not valid if API request fails
      }
    };

    getData(CityName);
  }, [CityName]);

  return (
    <div className="col-md-12 text-center mt-5 mb-5">
      {isValidCity ? ( // Render weather box if city is valid
        <div className="shadow rounded resultBox">
          <img
            className="weatherIcon"
            src="https://cdn.jim-nielsen.com/ios/1024/weather-2019-02-07.png"
            alt="Weather Icon"
          />
          <h5 className="Weathercity">City: {city}</h5>
          <h4>Country: {country}</h4>
          <h6 className="Weathertemperature">
            Temperature: {(temperature - 273.15).toFixed(2)}°C
          </h6>
          <h6>Pressure: {humidity} g.m<sup>-3</sup></h6>
          <h6>Humidity: {pressure}Pa</h6>
        </div>
      ) : (
        // Render invalid city message if city is not valid
        <h5 className="Weathercity">City Name not valid</h5>
      )}
    </div>
  );
};

export default Box;

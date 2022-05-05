import "./weather.css";
import React, { useEffect, useState } from "react";
import DisplayWeather from "../DisplayWeather/DisplayWeather";
import FetchPlace from '../FecthPlace/FetchPlace';

function Weather() {
  const [weather, setWeather] = useState([]);
  
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [city, setCity] = useState("");

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await FetchPlace(city);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
    // res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };
    
  const APIKEY = "ff502a0349301ec9aca290f9a1d8af85";
  async function weatherData(e) {
    e.preventDefault();
    if (city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},fr,&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }


  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          list="places"
          type="text"
          placeholder="Ville"
          name="city"
          onChange={handleCityChange}
        />
        <datalist id="places">
              {autocompleteCities.map((city, i) => (
                <option key={i}>{city}</option>
              ))}
            </datalist>
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
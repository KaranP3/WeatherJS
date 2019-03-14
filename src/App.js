// Imports
import React, { Component } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Titles from "./components/Titles";
import logo from "./logo.svg";
import "./App.css";

// OpenWeatherMap API Key
const API_KEY = "6fc51d5439371ec920a755421879f7f8";

// App component
class App extends Component {
  // Initialize state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  // getWeather() method that asynchronously fetches weather data
  // from the OpenWeatherMap API
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    // Check for errors in input data & assign the data we need to state using setState
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"
      });
    }
  };
  // Render method
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-5 title-container">
                  <Titles />
                </div>
                <div className="col-7 form-container">
                  <Search getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

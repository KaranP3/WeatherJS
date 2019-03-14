// Imports
import React from "react";

// Weather component
const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key animated flipInX">
        Location:{" "}
        <span className="weather__value">
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key animated flipInX">
        Temperature:{" "}
        <span className="weather__value"> {props.temperature} °C</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key animated flipInX">
        Humidity: <span className="weather__value"> {props.humidity}%</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key animated flipInX">
        Conditions: <span className="weather__value"> {props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__key">{props.error}</p>}
  </div>
);

// Export
export default Weather;

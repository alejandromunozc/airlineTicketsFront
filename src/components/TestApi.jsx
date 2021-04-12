import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

const TestApi = () => {
  const [flights, setFlights] = useState([]);
  const config = {
    method: "get",
    url: "https://airlineticketsapi.herokuapp.com/api/flights/",
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then((response) => {
        setFlights(response.data.flights);
      })
      .catch(() => {
        
      });
  }, []);

  return (
    <>
      {flights.map((flight) => (
        <h2>{flight.origin}</h2>
      ))}
    </>
  );
};

export default TestApi;

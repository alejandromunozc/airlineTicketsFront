import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

const TestApi = () => {
  const [flights, setFlights] = useState([]);
  const config = {
    method: "get",
    url: "http://localhost:3000/api/flights/",
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.flights));
        setFlights(response.data.flights);
      })
      .catch((error) => {
        console.log(error);
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

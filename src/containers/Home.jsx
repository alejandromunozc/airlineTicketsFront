import React, { useEffect, useContext } from "react";
import axios from "axios";
import requests from "../requests";
import AppContext from "../context/AppContext";
import Flights from "../components/Flights";

const Home = () => {
  const { state, updateFlights } = useContext(AppContext);
  const { flights } = state;
  const config = {
    method: "get",
      url: "https://airlineticketsapi.herokuapp.com/api/flights/",

    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then((response) => {
        updateFlights(response.data.flights);
      })
      .catch(() => {
        
      });
  }, []);
  return (
    <>
      <Flights flights={flights} />
    </>
  );
};

export default Home;

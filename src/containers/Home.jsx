import React, { useEffect, useContext } from "react";
import axios from "axios";
import requests from "../requests";
import AppContext from "../context/AppContext";
import Flights from "../components/Flights";

const Home = () => {
  const { state, updateFlights } = useContext(AppContext);
  const { flights } = state;
  // console.log(requests.getFlights());
  // useEffect(async() => {
  //   await updateFlights(requests.getFlights());
  // },[]);
  const config = {
    method: "get",
    url: "http://localhost:3000/api/flights/",
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then((response) => {
        updateFlights(response.data.flights);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Flights flights={flights} />
    </>
  );
};

export default Home;

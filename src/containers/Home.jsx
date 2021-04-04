import React from "react";
import Flights from "../components/Flights";
import "bootstrap/dist/css/bootstrap.min.css";
import initialState from "../initialState";

const Home = () => {
  return <Flights flights={initialState.flights} />;
};

export default Home;

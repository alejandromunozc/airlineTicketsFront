import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Flight from "./Flight";
import AppContext from "../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

const Flights = () => {
  const { state, viewDetail } = useContext(AppContext);
  // const { flights } = state;
  const [flights, setFlights] = useState([]);
  const config = {
    method: "get",
    url: "http://localhost:3000/api/flights/",
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then((response) => {
        setFlights(response.data.flights);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleViewDetail = (flight) => () => {
    viewDetail(flight);
  };

  return (
    <>
      <div className="row p-3">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to="/new-flight">
            <button type="button" className="btn btn-outline-success btn-sm">
              New flight
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        {flights.map((flight) => (
          <Flight
            key={flight._id}
            flight={flight}
            arrayFlights={flights}
            handleViewDetail={handleViewDetail}
          />
        ))}
      </div>
    </>
  );
};

export default Flights;

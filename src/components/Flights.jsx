import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Flight from "./Flight";
import AppContext from "../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

const Flights = ({ flights }) => {
  const { viewDetail } = useContext(AppContext);

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
            key={flights._id}
            flight={flight}
            handleViewDetail={handleViewDetail}
          />
        ))}
      </div>
    </>
  );
};

export default Flights;

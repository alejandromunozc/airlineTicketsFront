import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Flight = ({ flight, handleViewDetail }) => {
  return (
    <div className="col-md-6">
      <div className="card border-secondary mb-3">
        <div className="card-header d-flex">
          <div>
            <strong>{flight.date}</strong>
          </div>
          <div className="new-passenger">
            <a type="button" className="btn btn-outline-success btn-sm">
              Add passenger
            </a>
          </div>
        </div>
        <div className="card-body text-secondary">
          <div className="row">
            <div className="origin col-sm-6">
              <h5>Origin</h5>
              <img
                className="origin-flag"
                src="https://restcountries.eu/data/col.svg"
                alt=""
              />
              <p>{flight.origin}</p>
            </div>
            <div className="destination col-sm-6">
              <h5>Destination</h5>
              <img
                className="destination-flag"
                src="https://restcountries.eu/data/mex.svg"
                alt=""
              />
              <p>{flight.destination}</p>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex">
          <div className="capacity p-2">
            <span>
              Capacity: {flight.occupiedSeats}/{flight.capacity}
            </span>
          </div>
          <div className="btn-group-sm options-flight" role="group">
            <Link to="/details">
              <button
                onClick={handleViewDetail(flight)}
                type="button"
                className="btn btn-outline-success btn-sm m-1"
              >
                View details
              </button>
            </Link>
            <button type="button" className="btn btn-outline-danger btn-sm m-1">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;

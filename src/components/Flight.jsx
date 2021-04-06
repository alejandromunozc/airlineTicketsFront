import React from "react";
import { Link } from "react-router-dom";
import DeleteConfirm from "./DeleteConfirm";
import AddPassenger from "./AddPassenger";
import "bootstrap/dist/css/bootstrap.min.css";

const Flight = ({ flight, arrayFlights, handleViewDetail }) => {
  return (
    <div className="col-md-6">
      <div className="card border-secondary mb-3">
        <div className="card-header d-flex">
          <div>
            <strong>{flight.date.substring(0, 16)}</strong>
          </div>
          <div className="new-passenger">
            <AddPassenger flight={flight} />
          </div>
        </div>
        <div className="card-body text-secondary">
          <div className="row">
            <div className="origin col-sm-6">
              <h5>Origin</h5>
              <img className="origin-flag" src={flight.originFlag} alt="" />
              <p>{flight.origin}</p>
            </div>
            <div className="destination col-sm-6">
              <h5>Destination</h5>
              <img
                className="destination-flag"
                src={flight.destinationFlag}
                alt=""
              />
              <p>{flight.destination}</p>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex">
          <div className="capacity p-2">
            <span>
              Capacity: {flight.tickets.length}/{flight.capacity}
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
            <DeleteConfirm
              title="flight"
              id={flight._id}
              arrayFlights={arrayFlights}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;

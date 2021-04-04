import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContext from "../context/AppContext";

const Details = () => {
  const { state } = useContext(AppContext);
  const flight = state.flight[0];
  console.log(flight);
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <Link to="/">
            <button type="button" className="btn btn-outline-primary btn-sm">
              Back
            </button>
          </Link>
        </div>
        <div className="col-sm-6">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/edit-flight">
              <button type="button" className="btn btn-outline-primary btn-sm m-1">
                Edit
              </button>
            </Link>
            <a type="button" className="btn btn-danger btn-sm m-1">
              Delete
            </a>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
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
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Lastname</th>
                <th scope="col">Seat</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>1</td>
                <td>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a
                      type="button"
                      className="btn btn-outline-primary btn-sm m-1"
                    >
                      Edit
                    </a>
                    <a type="button" className="btn btn-danger btn-sm m-1">
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Details;

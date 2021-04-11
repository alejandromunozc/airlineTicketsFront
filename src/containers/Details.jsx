import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteConfirm from "../components/DeleteConfirm";
import AddPassenger from "../components/AddPassenger";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContext from "../context/AppContext";

const Details = () => {
  const { state, viewDetail } = useContext(AppContext);
  const [passengers, setPassengers] = useState([]);
  const { flight } = state;

  const data = { flightId: flight[0]._id };

  const config = {
    method: "post",
    url: "http://localhost:3000/api/tickets/",
    headers: { "Content-Type": "application/json" },
    data,
  };
  useEffect(() => {
    axios(config)
      .then((response) => {
        setPassengers(response.data.tickets);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              <button
                type="button"
                className="btn btn-outline-primary btn-sm m-1"
              >
                Edit
              </button>
            </Link>
            <DeleteConfirm title="flight" />
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card border-secondary mb-3">
            <div className="card-header d-flex">
              <div>
                <strong>{flight[0].date.substring(0, 16)}</strong>
              </div>
              <div className="new-passenger">
                <AddPassenger flight={flight[0]} />
              </div>
            </div>
            <div className="card-body text-secondary">
              <div className="row">
                <div className="origin col-sm-6">
                  <h5>Origin</h5>
                  <img
                    className="origin-flag"
                    src={flight[0].originFlag}
                    alt=""
                  />
                  <p>{flight[0].origin}</p>
                </div>
                <div className="destination col-sm-6">
                  <h5>Destination</h5>
                  <img
                    className="destination-flag"
                    src={flight[0].destinationFlag}
                    alt=""
                  />
                  <p>{flight[0].destination}</p>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex">
              <div className="capacity p-2">
                <span>
                  Capacity: {flight[0].tickets.length}/{flight[0].capacity}
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
              {passengers.map((passenger) => (
                <tr key={passenger._id}>
                  <td>{passenger.passengerName}</td>
                  <td>{passenger.passengerLastname}</td>
                  <td>{passenger.seatNumber}</td>
                  <td>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <a
                        type="button"
                        className="btn btn-outline-primary btn-sm m-1"
                      >
                        Edit
                      </a>
                      <DeleteConfirm title="ticket" id={passenger._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Details;

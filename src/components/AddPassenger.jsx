import React, { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, Modal } from "reactstrap";
import AppContext from "../context/AppContext";
import requests from "../requests";
import "bootstrap/dist/css/bootstrap.min.css";

const AddPassenger = ({ flight }) => {
  const { state, refreshFlights, updateDetail } = useContext(AppContext);
  const [openModalState, setOpenModalState] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const openModal = () => {
    setOpenModalState(!openModalState);
  };

  const onSubmit = (data) => {
    data.seatNumber = flight.tickets.length + 1;
    data.flightId = flight._id;

    const config = {
      method: "post",
      url: "http://localhost:3000/api/tickets/add/",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    axios(config)
      .then((response) => {
        requests.getFlights().then((newFlights) => {
          console.log("newFlights", newFlights);
          refreshFlights(newFlights);
          if (state.flight[0].tickets) {
            state.flight[0].tickets.push(response.data.ticket._id);
            updateDetail(state.flight[0]);
          }
        });
      })
      .catch((error) => {
        console.log("respuesta error", error);
      });

    openModal();
  };

  return (
    <>
      {flight.tickets.length !== flight.capacity ? (
        <Button
          color="outline-success"
          className="btn btn-sm m-1"
          onClick={openModal}
        >
          Add passenger
        </Button>
      ) : (
        <Button color="warning" className="btn btn-sm m-1">
          Flight is full
        </Button>
      )}

      <Modal isOpen={openModalState}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card border-secondary">
                <div className="card-header d-flex">
                  <div className="form-group row">
                    <strong className="p-3">Add Passenger</strong>
                  </div>
                </div>
                <div className="card-body text-secondary">
                  <div className="row">
                    <div className="origin col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">
                          <h5>Name</h5>
                        </label>
                        <input
                          className="form-control"
                          id="name"
                          {...register("passengerName", {
                            required: "Required",
                          })}
                        />
                        {errors.passengerName && (
                          <p>{errors.passengerName.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="destination col-sm-6">
                      <div className="form-group">
                        <label htmlFor="lastname">
                          <h5>Lastname</h5>
                        </label>
                        <input
                          className="form-control"
                          id="lastname"
                          {...register("passengerLastname", {
                            required: "Required",
                          })}
                        />
                        {errors.passengerLastname && (
                          <p>{errors.passengerLastname.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-md-end">
                  <input
                    type="submit"
                    value="Save"
                    className="btn btn-success mr-3"
                  />
                  <input
                    type="button"
                    value="Cancel"
                    className="btn btn-secondary"
                    onClick={openModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddPassenger;

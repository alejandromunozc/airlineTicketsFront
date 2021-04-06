import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, Modal } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddPassenger = ({ flight }) => {
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
    data.seatNumber = flight.occupiedSeats + 1;
    data.flightId = flight._id;

    const config = {
      method: "post",
      url: "http://localhost:3000/api/tickets/",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("hola", error);
      });

    openModal();
  };

  return (
    <>
      <Button
        color="outline-success"
        className="btn btn-sm m-1"
        onClick={openModal}
      >
        Add passenger
      </Button>

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

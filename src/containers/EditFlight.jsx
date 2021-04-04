import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import countries from "../countries.json";
import AppContext from "../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

const EditFlight = () => {
  const { state } = useContext(AppContext);
  const { date, origin, destination, capacity} = state.flight[0];
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm();
  const dateNow = date.substring(0, 16);
  const onSubmit = (data) => {
    state.flight[0].capacity = data.capacity;
    state.flight[0].date = data.date;
    state.flight[0].origin = data.origin;
    state.flight[0].destination = data.destination;
    console.log(state);
  };

  setValue("capacity", capacity);
  setValue("date", dateNow);
  setValue("origin", origin);
  setValue("destination", destination);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row p-3">
        <div className="col-sm-6">
          <Link to="/">
            <button type="button" className="btn btn-outline-primary btn-sm">
              Back
            </button>
          </Link>
        </div>
        <div className="col-sm-6">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <input
                type="submit"
                value="Save"
                className="btn btn-success btn-sm"
              />
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card border-secondary mb-3">
            <div className="card-header d-flex">
              <div className="form-group row">
                <label htmlFor="date" className="col-12 col-form-label">
                  <strong>Flight Date</strong>
                </label>
                <div className="col-12">
                  <input
                    className="form-control"
                    type="datetime-local"
                    id="date"
                    {...register("date", { required: "Required" })}
                  />
                  {errors.date && <p>{errors.date.message}</p>}
                </div>
              </div>
            </div>
            <div className="card-body text-secondary">
              <div className="row">
                <div className="origin col-sm-6">
                  <div className="form-group">
                    <label htmlFor="origin">
                      <h5>Origin</h5>
                    </label>
                    <select
                      className="form-control"
                      id="origin"
                      {...register("origin", { required: "Required" })}
                    >
                      {countries.map((countrie) => (
                        <option key={countrie.alpha3Code} value={`${countrie.name} - (${countrie.capital})`}>
                          {countrie.name} - ({countrie.capital})
                        </option>
                      ))}
                    </select>
                    {errors.origin && <p>{errors.origin.message}</p>}
                  </div>
                </div>
                <div className="destination col-sm-6">
                  <div className="form-group">
                    <label htmlFor="destination">
                      <h5>Destination</h5>
                    </label>
                    <select
                      className="form-control selectpicker"
                      id="destination"
                      {...register("destination", { required: "Required" })}
                    >
                      {countries.map((countrie) => (
                        <option key={countrie.alpha3Code} value={`${countrie.name} - (${countrie.capital})`}>
                          {countrie.name} - ({countrie.capital})
                        </option>
                      ))}
                    </select>
                    {errors.destination && <p>{errors.destination.message}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex">
              <div className="capacity p-2">
                <div className="form-group row">
                  <label htmlFor="capacity" className="col-12 col-form-label">
                    Capacity
                  </label>
                  <div className="col-12">
                      <input
                        className="form-control"
                        type="number"
                        id="capacity"
                        {...register("capacity", {
                          required: "Required",
                          min: 10,
                          max: 200,
                        })}
                      />
                    {errors.capacity && <p>{errors.capacity.message}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditFlight;

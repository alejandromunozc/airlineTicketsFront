import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  console.log("state", state);

  const viewDetail = (payload) => {
    setState({
      ...state,
      flight: [payload],
    });
  };

  const updateDetail = (payload) => {
    console.log("payload updateDetail", payload);
    setState({
      ...state,
      flight: [payload],
    });
  };

  const updateFlights = (payload) => {
    setState({
      ...state,
      flights: [...payload],
    });
  };

  const refreshFlights = (payload) => {
    console.log("payload", payload);
    setState({
      ...state,
      flights: payload.flights,
    });
  };

  return {
    viewDetail,
    updateDetail,
    updateFlights,
    refreshFlights,
    state,
  };
};

export default useInitialState;

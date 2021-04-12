import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const viewDetail = (payload) => {
        setState({
            ...state,
            flight: [payload],
        });
    };

    const updateDetail = (payload) => {
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
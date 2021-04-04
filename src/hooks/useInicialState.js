import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const viewDetail = (payload) => {
        setState({
            ...state,
            flight: [payload],
        });
        //console.log('hola: ', payload.target.name, payload.target.value)
    };

    // const editCapacity = (payload) => {
    //   setState({
    //     ...state,
    //     flight[0].capacity: 
    //   })
    // }

    return {
        viewDetail,
        state,
    };
};

export default useInitialState;
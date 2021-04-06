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

  return {
    viewDetail,
    state,
  };
};

export default useInitialState;

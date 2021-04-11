import axios from "axios";
const API = "http://localhost:3000/api/flights/";

const requests = {};

requests.getFlights = async () => {
  const response = await axios.get(API);
  return response.data;
};

export default requests;

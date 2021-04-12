import axios from "axios";
const API = "https://airlineticketsapi.herokuapp.com/api/flights/";

const requests = {};

requests.getFlights = async() => {
    const response = await axios.get(API);
    return response.data;
};

export default requests;
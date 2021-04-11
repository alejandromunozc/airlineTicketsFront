// import axios from "axios";

// const config = {
//     method: "get",
//     url: "http://localhost:3000/api/flights/",
//     headers: {},
// };

// const flights = async() => {
//     const res = await axios.get("http://localhost:3000/api/flights/")
//     console.log(res.data.flights);
//     return res;
// }

// // const getFlights = async() => {
// //     const res = await axios(config)
// //         .then((response) => {
// //             response.data.flights;
// //             //console.log(response.data.flights)
// //         })
// //         .catch((error) => {
// //             console.log('mensaje:', error);
// //         });

// //     return res;
// // }

// flights().then(val => console.log(val.data.flights))
export default {
  flight: [],
  flights: [
    {
      _id: "0",
      tickets: [],
      origin: "Mauritania - (Nouakchott)",
      destination: "Maldives - (Malé)",
      capacity: 10,
      date: "2016-05-19T17:00:00.000+00:00",
      occupiedSeats: 0,
      isFull: false,
      originFlag: "https://restcountries.eu/data/mrt.svg",
      destinationFlag: "https://restcountries.eu/data/mdv.svg",
    },
  ],
};

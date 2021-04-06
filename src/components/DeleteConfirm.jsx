import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DeleteConfirm = ({ title, id, arrayFlights }) => {
  const [openModalState, setOpenModalState] = useState(false);
  const [flights, setFlights] = useState(arrayFlights);

  const openModal = () => {
    setOpenModalState(!openModalState);
  };

  const deleteItem = () => {
    const config = {
      method: "delete",
      url: `http://localhost:3000/api/${title}s/${id}`,
      headers: {},
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (title === "flight") {
          const indexFlight = flights.findIndex((item) => item._id === id);
          flights.splice(indexFlight, 1);
          setFlights(flights);
        }
        setOpenModalState(!openModalState);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button color="danger" className="btn btn-sm m-1" onClick={openModal}>
        Delete
      </Button>

      <Modal isOpen={openModalState}>
        <ModalHeader>Delete {title}</ModalHeader>
        <ModalBody>Are you sure you want to delete?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={deleteItem}>
            Delete
          </Button>
          <Button color="secondary" onClick={openModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteConfirm;

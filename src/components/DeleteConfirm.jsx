import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DeleteConfirm = ({ title, id }) => {
  const [openModalState, setOpenModalState] = useState(false);

  const openModal = () => {
    setOpenModalState(!openModalState);
  };

  const deleteItem = () => {
    const config = {
      method: "delete",
      url: `https://airlineticketsapi.herokuapp.com/api/${title}s/${id}`,
      headers: {},
    };

    axios(config)
      .then(() => {
        setOpenModalState(!openModalState);
      })
      .catch(() => {

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

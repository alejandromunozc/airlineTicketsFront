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
      url: `http://localhost:3000/api/${title}s/${id}`,
      headers: {},
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
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

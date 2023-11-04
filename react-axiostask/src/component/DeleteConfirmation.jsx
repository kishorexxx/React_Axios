import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteConfirmation(props) {

  return (
    <div>
      <Modal show={props.showModal} onHide={() => {
          props.hideDeleteModalHandler();
        }}>
       <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.hideDeleteModalHandler();
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.confirmDeleteHandler();
            }}
          >
            Confirm Delete
          </Button>
        </Modal.Footer>

        </Modal>
    </div>
  );
}

export default DeleteConfirmation
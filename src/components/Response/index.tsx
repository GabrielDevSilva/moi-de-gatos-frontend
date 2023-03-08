import React from "react";
import { Modal, Button } from "react-bootstrap";
import { IResponsePopUp } from "../../../types";

const ResponsePopUp: React.FC<IResponsePopUp> = (props) => {
  return (
    <Modal
      // {...props}
      show={props.show}
      onHide={props.OnHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Body id="contained-modal-title-vcenter">{props.text}</Modal.Body>
        <Modal.Footer>
          <Button onClick={props.OnHide}>Fechar</Button>
        </Modal.Footer>
      </Modal.Header>
    </Modal>
  );
};

export default ResponsePopUp;

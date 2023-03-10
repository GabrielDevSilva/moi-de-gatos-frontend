import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { IPopUp } from "@Types";
import { api } from "../../services/api";
import ResponsePopUp from "../Response";

const DeleteAPI: React.FC<IPopUp> = (props) => {
  const [returnError, setReturnError] = useState("");
  async function deleteCat() {
    try {
      await api.delete(`/cats/${props.cat.id}`);
      props.HideModal();
      await props.LoadAnimals();
    } catch (error) {
      setReturnError((error as Error).message);
    }
  }

  useEffect(() => {
    if (returnError === "") return;
    const temporizador = setTimeout(() => {
      setReturnError("");
    }, 3000);
    props.HideModal();
    return () => {
      clearTimeout(temporizador);
    };
  }, [returnError]);

  return (
    <>
      {returnError && (
        <ResponsePopUp text={returnError} OnHide={() => null} show />
      )}
      <Modal
        // {...props}
        show={props.show}
        onHide={props.HideModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Tem certeza que deseja deletar esse gato?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.cat.name} com a idade de {props.cat.age} ano(s) da raça{" "}
          {props.cat.breed}.{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteCat}>
            Confirmar
          </Button>
          <Button variant="primary" onClick={props.HideModal}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteAPI;

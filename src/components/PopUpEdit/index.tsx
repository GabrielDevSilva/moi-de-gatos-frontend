import { ICat, IPopUp } from "../../../types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { ChangeEvent, useState } from "react";
import { api } from "../../services/api";
import { Response as ResponsePopUp } from "../";

const PopUpEdit: React.FC<IPopUp> = (props) => {
  const [modal, setModal] = useState<Partial<ICat | null>>(null);
  const [modalShow, setModalShow] = useState(false);

  const updateData = (e: ChangeEvent<HTMLInputElement>) => {
    setModal({
      ...modal,
      [e.target.name]: e.target.value,
    });
  };

  const updateCat = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await api.put(`/cats/${props.cat.id}`, {
      name: modal?.name,
      breed: modal?.breed,
      age: Number(modal?.age) ? Number(modal?.age) : undefined,
    });
    // props.HideModal();
    await props.LoadAnimals();
    setModalShow(true);
  };

  return (
    <>
      <ResponsePopUp
        text="Gato Atualizado"
        show={modalShow}
        OnHide={() => setModalShow(false)}
      />
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
            Atualizar dados
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateCat}>
            <Form.Group className="mb-3">
              <Form.Label>Insira o nome do animal:</Form.Label>
              <Form.Control
                type="text"
                placeholder={props.cat.name}
                name="name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateData(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Idade:</Form.Label>
              <Form.Control
                type="text"
                placeholder={String(props.cat.age)}
                name="age"
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateData(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Raça:</Form.Label>
              <Form.Control
                type="text"
                placeholder={props.cat.breed}
                name="breed"
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateData(e)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Salvar
              </Button>
              <Button variant="danger" onClick={props.HideModal}>
                Fechar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopUpEdit;

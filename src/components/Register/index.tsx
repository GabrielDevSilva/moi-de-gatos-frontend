import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ICat } from "@Types";
import { api } from "../../services/api";
import ResponsePopUp from "../Response";

const Register: React.FC = () => {
  // const [model, setModel] = useState<
  //   Omit<ICat, "id" | "updateAt" | "createAt">
  // >({
  //   name: "",
  //   breed: "",
  //   age: 0,
  // });
  const [model, setModel] = useState<Partial<ICat | null>>(null);
  const [modal, setModal] = useState(false);

  function createData(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    await api.post("/cats", {
      name: model?.name,
      breed: model?.breed,
      age: Number(model?.age),
    });
    setModal(true);
  }

  return (
    <>
      <ResponsePopUp
        text="gato cadastrado"
        show={modal}
        OnHide={() => setModal(false)}
      />
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Insira o nome do animal:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do gato"
            name="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => createData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Idade:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Idade"
            name="age"
            onChange={(e: ChangeEvent<HTMLInputElement>) => createData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Raça:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Raça"
            name="breed"
            onChange={(e: ChangeEvent<HTMLInputElement>) => createData(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>
    </>
  );
};

export default Register;

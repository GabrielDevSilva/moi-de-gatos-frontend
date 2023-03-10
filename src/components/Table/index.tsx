import React, { useState, memo } from "react";
import Table from "react-bootstrap/Table";
import { ICat, ITableAPIProps } from "@Types";
import { Delete as DeleteAPI, PopUpEdit, TableItem } from "../index";

const TableAPI: React.FC<ITableAPIProps> = ({
  cats,
  searchedCat,
  LoadAnimals,
}) => {
  const [modalEditShow, setModalEditShow] = useState(false);
  const [editCat, setEditCat] = useState<ICat | null>(null);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [deleteCat, setDeleteCat] = useState<ICat | null>(null);

  const handleEditCat = (id: string) => {
    const cat = cats.find((cat) => cat.id === id);
    if (!cat) return;
    setEditCat(cat);
    setModalEditShow(true);
  };
  const handleDeleteCat = (id: string) => {
    const cat = cats.find((cat) => cat.id === id);
    if (!cat) return;
    setDeleteCat(cat);
    setModalDeleteShow(true);
  };

  return (
    <>
      {modalEditShow && editCat && (
        <PopUpEdit
          cat={editCat as ICat}
          show={modalEditShow}
          HideModal={() => setModalEditShow(false)}
          LoadAnimals={LoadAnimals}
        />
      )}
      {modalDeleteShow && deleteCat && (
        <DeleteAPI
          cat={deleteCat as ICat}
          show={modalDeleteShow}
          HideModal={() => setModalDeleteShow(false)}
          LoadAnimals={LoadAnimals}
        />
      )}
      <Table striped bordered hover className="text-center table-hover">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>NOME</th>
            <th>RAÇA</th>
            <th>IDADE</th>
            <th>DATA DE ATUALIZAÇÃO</th>
            <th>AÇÃO</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((cat) => (
            <TableItem
              key={cat.id}
              cat={cat}
              HandleEditCat={handleEditCat}
              HandleDeleteCat={handleDeleteCat}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default memo(TableAPI);

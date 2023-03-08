import React, { memo } from "react";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";
import { ITable } from "../../../../types";

const TableItem: React.FC<ITable> = ({
  cat,
  HandleEditCat,
  HandleDeleteCat,
}) => {
  const formateDate = (date: Date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };
  return (
    <tr>
      {/* <td>{cat.id}</td> */}
      <td>{cat.name}</td>
      <td>{cat.breed}</td>
      <td>{cat.age}</td>
      <td>{formateDate(cat.updateAt)}</td>
      <td>
        <ButtonToolbar className="justify-content-evenly">
          <ButtonGroup>
            <Button
              size="sm"
              className="align-itens-center justify-content-center d-flex"
              onClick={() => HandleEditCat(cat.id)}
            >
              <BsFillPenFill />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button
              size="sm"
              variant="danger"
              className="align-itens-center justify-content-center d-flex"
              onClick={() => HandleDeleteCat(cat.id)}
            >
              <BsFillTrashFill />
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </td>
    </tr>
  );
};

export default memo(TableItem);

import Form from "react-bootstrap/Form";
import { ISelect } from "@Types";

const SelectRowQuantity: React.FC<ISelect> = ({ value, onChangeRow }) => {
  return (
    <>
      {" "}
      {value >= 20 ? (
        <Form.Select
          className="w-25 h-15"
          aria-label="Default select example"
          value={value}
          onChange={(event) => onChangeRow(Number(event.target.value))}
          size="sm"
        >
          <option value="5">5 por página</option>
          <option value="10">10 por página</option>
          <option value="20">20 por página</option>
          {/* <option value="50">50 por página</option> */}
        </Form.Select>
      ) : (
        <Form.Select
          className="w-25 h-15"
          aria-label="Default select example"
          value={value}
          onChange={(event) => onChangeRow(Number(event.target.value))}
          size="sm"
        >
          <option value="5">5 por página</option>
          <option value="10">10 por página</option>
        </Form.Select>
      )}
    </>
  );
};

export default SelectRowQuantity;

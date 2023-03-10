import React from "react";
import Button from "react-bootstrap/Button";
import { IButtonProp } from "@Types";
import "./style.css";

const PageHeader: React.FC<IButtonProp> = ({ text, NavigateButton }) => {
  return (
    <>
      <br />
      <div className="page-header">
        <h1>Mei mundo de gato</h1>
        <Button variant="dark" size="sm" onClick={NavigateButton}>
          {text}
        </Button>
      </div>
      <br />
    </>
  );
};

export default PageHeader;

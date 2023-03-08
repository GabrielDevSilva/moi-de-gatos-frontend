import React from "react";
import { useNavigate } from "react-router-dom/";
import PageHeader from "../../components/Header";
import Register from "../../components/Register";

const Form: React.FC = () => {
  const navigate = useNavigate();

  const formPage = () => navigate("/");
  return (
    <div className="container">
      <PageHeader text="Voltar" NavigateButton={formPage} />
      <Register />
    </div>
  );
};

export default Form;

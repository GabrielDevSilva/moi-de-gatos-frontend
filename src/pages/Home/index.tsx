import { useEffect, useState, useCallback } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ICats } from "../../../types";
import {
  Header as PageHeader,
  PaginationTable,
  Table as TableAPI,
} from "../../components";
import { api } from "../../services/api";

const Home: React.FC = () => {
  const [cats, setCats] = useState<ICats>([]);
  const [searchCat, setSearchCat] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchCat);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableRows, setTableRows] = useState(5);

  const loadAnimals = useCallback(async () => {
    let url = `/cats?skip=${(currentPage - 1) * tableRows}&take=${tableRows}`;
    if (debouncedSearchTerm) {
      url = `/cats/name/${debouncedSearchTerm}?skip=${
        (currentPage - 1) * tableRows
      }&take=${tableRows}`;
    }
    const {
      data: { data, count },
    } = await api.get(url);
    setCats(data);
    setTotalPage(count);
  }, [cats, totalPage, debouncedSearchTerm, currentPage, tableRows]);

  useEffect(() => {
    loadAnimals();
  }, [debouncedSearchTerm, currentPage, totalPage]);

  useEffect(() => {
    const debouncedTime = setTimeout(() => {
      setDebouncedSearchTerm(searchCat);
    }, 500);
    return () => {
      clearTimeout(debouncedTime);
    };
  }, [searchCat]);

  const clearSetSearchCat = () => {
    setSearchCat("");
  };

  const navigate = useNavigate();
  const formPage = () => navigate("/cadastro");

  return (
    <div className="container">
      <PageHeader text={"Cadastrar Gato"} NavigateButton={formPage} />
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Insira o nome do gato"
          onChange={(e) => setSearchCat(e.target.value)}
          value={searchCat}
        />
        <Button variant="danger" onClick={clearSetSearchCat}>
          X
        </Button>
      </InputGroup>
      <TableAPI cats={cats} LoadAnimals={loadAnimals} />
      <br />
      <PaginationTable
        total={Math.ceil(totalPage / tableRows)}
        current={currentPage}
        onChangePage={(pageNumber: number) =>
          setCurrentPage((prevState) =>
            prevState !== pageNumber ? pageNumber : prevState
          )
        }
      />
    </div>
  );
};

export default Home;

// criar a paginação da api
// ajustar a api com a pesquisa do query
// pesquisar no banco
// ordem alfabética
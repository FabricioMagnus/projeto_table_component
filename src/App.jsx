import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

import TableComponent from "./components/TableComponent";

function App() {
  const [count, setCount] = useState(0);

  const arrayListObjects = [
    {
      id: 1,
      nome: "João",
      profissao: "engenheiro",
      endereço: "rua a",
      email: "a@teste.com.br",
      telefone: "4849849894",
    },
    {
      id: 2,
      nome: "Maria",
      profissao: "cozinheira",
      endereço: "rua b",
      email: "b@teste.com.br",
      telefone: "8494984984",
    },
    {
      id: 3,
      nome: "Pedro",
      profissao: "padeiro",
      endereço: "rua c",
      email: "c@teste.com.br",
      telefone: "84948984984",
    },
    {
      id: 4,
      nome: "Joaquina",
      profissao: "secretária",
      endereço: "rua d",
      email: "d@teste.com.br",
      telefone: "8494894984",
    },
    {
      id: 4,
      nome: "Samuel",
      profissao: "backend",
      endereço: "rua e",
      email: "sa@teste.com.br",
      telefone: "8494894984",
    },
    {
      id: 4,
      nome: "Davi",
      profissao: "Frontend",
      endereço: "rua e",
      email: "davi@teste.com.br",
      telefone: "8494894984",
    },
  ];

  const arrayCabecalho = [
    "Nome",
    // "Idade",
    "Profissão",
    "Endereço",
    "Telefone",
    "Email",
    "Opções",
  ];

  const optionList = [
    {
      label: "editar",
      onClick: (obj) => {
        console.log("Linha selecionada", obj);
      },
    },
    {
      label: "excluir",
      onClick: (obj) => {
        console.log("Linha para excluir", obj);
      },
    },
  ];

  const rowList = ["nome", "profissao", "endereço", "telefone", "email"];

  return (
    <div className="App">
      <ChakraProvider>
        <TableComponent
          headerList={arrayCabecalho}
          data={arrayListObjects}
          rowList={rowList}
          loading={false}
          optionsList={optionList}
        />
      </ChakraProvider>
    </div>
  );
}

export default App;

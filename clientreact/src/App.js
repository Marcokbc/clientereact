import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";
import Alunos from "./components/Alunos";
import NovoAluno from "./components/NovoAluno";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/alunos" element={<Alunos/>}></Route>
      </Routes>
      <Routes>
        <Route path="/aluno/novo/:alunoId" element={<NovoAluno/>}></Route>
      </Routes>
    </Router>
  );
}



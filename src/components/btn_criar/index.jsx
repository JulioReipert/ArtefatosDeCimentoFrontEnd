import "./index.scss";
import { ReactComponent as CriarImg } from "../../assets/images/criar_img.svg";
import { useState } from "react";
import { CriarCliente } from "../../services/criar.jsx";

export default function BtnCriarCliente({ fetchClientes }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [tipoDoc, setTipoDoc] = useState("");
  const [numDoc, setNumDoc] = useState("");

  const [mostrarCadastro, setMosTrarCadastro] = useState(false);
  const [girado, setGirado] = useState(false);

  const toggleCadastro = () => {
    setMosTrarCadastro((prev) => !prev);
    setGirado((prev) => !prev);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await CriarCliente(nome, email, telefone, celular, tipoDoc, numDoc);
    limpar();
    fetchClientes();
  }

  function limpar() {
    setNome("");
    setEmail("");
    setTelefone("");
    setCelular("");
    setTipoDoc("");
    setNumDoc("");
  }

  return (
    <div className="comp-btn-criar">
      <div
        className={`comp-btn-criar ${girado ? "girado" : ""}`}
        onClick={toggleCadastro}
      >
        <CriarImg />
      </div>

      {mostrarCadastro && (
        <div className="tela-cadastro">
          <h2>Novo Cliente</h2>
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              type="text"
              className="input"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Email:</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Telefone:</label>
            <input
              type="text"
              className="input"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

            <label>Celular:</label>
            <input
              type="text"
              className="input"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />

            <label>Tipo do Documento:</label>
            <select
              className="input"
              onChange={(e) => setTipoDoc(e.target.value)}
            >
              <option value="">Escolha uma opção</option>
              <option value="CPF">CPF</option>
              <option value="CNPJ">CNPJ</option>
            </select>

            <label>Num. do Documento:</label>
            <input
              type="text"
              className="input"
              value={numDoc}
              onChange={(e) => setNumDoc(e.target.value)}
            />

            <button className="btn-cadastrar" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

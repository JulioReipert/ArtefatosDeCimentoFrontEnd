import "./index.scss";
import { ReactComponent as CriarImg } from "../../assets/images/criar_img.svg";
import { useState } from "react";
import { CriarCliente } from "../../services/criar.jsx";
import Validador from "../../utils/validacao.js";

export default function BtnCriarCliente({ fetchClientes }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [tipoDoc, setTipoDoc] = useState("");
  const [numDoc, setNumDoc] = useState("");

  const [mostrarCadastro, setMosTrarCadastro] = useState(false);
  const [girado, setGirado] = useState(false);

  const [erros, setErros] = useState({});

  const toggleCadastro = () => {
    setMosTrarCadastro((prev) => !prev);
    setGirado((prev) => !prev);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    let novosErros = {};

    if (!Validador.validarTelefone(telefone)) {
      novosErros.telefone = "Telefone inválido.";
    }

    if (!Validador.validarCelular(celular)) {
      novosErros.celular = "Celular inválido.";
    }

    if (tipoDoc === "1" && !Validador.validarDocumento(numDoc, "1")) {
      novosErros.documento = "CPF inválido.";
    }

    if (tipoDoc === "2" && !Validador.validarDocumento(numDoc, "2")) {
      novosErros.documento = "CNPJ inválido.";
    }

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setErros({});

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
            {erros.telefone && <p className="erro">{erros.telefone}</p>}

            <label>Celular:</label>
            <input
              type="text"
              className="input"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
            {erros.celular && <p className="erro">{erros.celular}</p>}

            <label>Tipo do Documento:</label>
            <select
              className="input"
              onChange={(e) => setTipoDoc(e.target.value)}
            >
              <option value="">Escolha uma opção</option>
              <option value="1">CPF</option>
              <option value="2">CNPJ</option>
            </select>

            <label>Num. do Documento:</label>
            <input
              type="text"
              className="input"
              value={numDoc}
              onChange={(e) => setNumDoc(e.target.value)}
            />
            {erros.documento && <p className="erro">{erros.documento}</p>}

            <button className="btn-cadastrar" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

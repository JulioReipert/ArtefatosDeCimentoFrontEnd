import "./index.scss";
import { ReactComponent as CriarImg } from "../../assets/images/criar_img.svg";
import { useState } from "react";
import { CriarMaterial } from "../../services/criar";

export default function BtnCriarMaterial({ fetchMateriais }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  const [mostrarCadastro, setMosTrarCadastro] = useState(false);
  const [girado, setGirado] = useState(false);

  const toggleCadastro = () => {
    setMosTrarCadastro((prev) => !prev);
    setGirado((prev) => !prev);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await CriarMaterial(nome, quantidade);
    limpar();
    fetchMateriais();
  }

  function limpar() {
    setNome("");
    setQuantidade(0);
  }

  return (
    <div className="comp-btn-criar-material">
      <div
        className={`comp-btn-criar-material ${girado ? "girado" : ""}`}
        onClick={toggleCadastro}
      >
        <CriarImg />
      </div>

      {mostrarCadastro && (
        <div className="tela-cadastro-material">
          <h2>Novo Material</h2>
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              type="text"
              className="input"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Quantidade:</label>
            <input
              type="number"
              className="input"
              value={quantidade}
              onChange={(e) => {
                const valor = Number(e.target.value);
                if (valor >= 0) setQuantidade(valor);
              }}
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

import "./index.scss";
import { ReactComponent as CriarImg } from "../../assets/images/criar_img.svg";
import { useState } from "react";
import { CriarProduto } from "../../services/criar";

export default function BtnCriarProduto({ fetchProdutos }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [altura, setAltura] = useState("");
  const [largura, setLargura] = useState("");
  const [cor, setCor] = useState("");
  const [peso, setPeso] = useState("");
  const [valor, setValor] = useState("");
  const [materiaPrima, setMateriaPrima] = useState("");

  const [mostrarCadastro, setMosTrarCadastro] = useState(false);
  const [girado, setGirado] = useState(false);

  const toggleCadastro = () => {
    setMosTrarCadastro((prev) => !prev);
    setGirado((prev) => !prev);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await CriarProduto(
      nome,
      quantidade,
      comprimento,
      altura,
      largura,
      cor,
      peso,
      valor,
      materiaPrima
    );
    limpar();
    fetchProdutos();
  }

  function limpar() {
    setNome("");
    setQuantidade("");
    setComprimento("");
    setAltura("");
    setLargura("");
    setCor("");
    setPeso("");
    setValor("");
    setMateriaPrima("");
  }

  return (
    <div className="comp-btn-criar-produto">
      <div
        className={`comp-btn-criar-produto ${girado ? "girado" : ""}`}
        onClick={toggleCadastro}
      >
        <CriarImg />
      </div>

      {mostrarCadastro && (
        <div className="tela-cadastro">
          <h2>Novo Produto</h2>
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
              type="text"
              className="input"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />

            <label>Comprimento:</label>
            <input
              type="text"
              className="input"
              value={comprimento}
              onChange={(e) => setComprimento(e.target.value)}
            />

            <label>Altura:</label>
            <input
              type="text"
              className="input"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />

            <label>Largura:</label>
            <input
              type="text"
              className="input"
              value={largura}
              onChange={(e) => setLargura(e.target.value)}
            />

            <label>Cor:</label>
            <input
              type="text"
              className="input"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
            />
            <label>Peso:</label>
            <input
              type="text"
              className="input"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
            <label>Valor:</label>
            <input
              type="text"
              className="input"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
            <label>Material:</label>
            <input
              type="text"
              className="input"
              value={materiaPrima}
              onChange={(e) => setMateriaPrima(e.target.value)}
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

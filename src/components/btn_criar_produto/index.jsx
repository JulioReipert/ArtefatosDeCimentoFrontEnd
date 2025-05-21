import "./index.scss";
import { ReactComponent as CriarImg } from "../../assets/images/criar_img.svg";
import { useState } from "react";
import { CriarProduto } from "../../services/criar";
import { BuscarMateria } from "../../services/buscar";

export default function BtnCriarProduto({ fetchProdutos }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [altura, setAltura] = useState("");
  const [largura, setLargura] = useState("");
  const [cor, setCor] = useState("");
  const [peso, setPeso] = useState("");
  const [valor, setValor] = useState("");
  const [materiaPrima, setMateriaPrima] = useState(null);

  const [mostrarCadastro, setMosTrarCadastro] = useState(false);
  const [girado, setGirado] = useState(false);
  const [materia, setMateria] = useState([]);

  const toggleCadastro = () => {
    fetchMateriais();
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
    setMateriaPrima(null);
  }

  async function fetchMateriais() {
    const dados = await BuscarMateria();
    setMateria(dados);
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
              className="input-prod"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Quantidade:</label>
            <input
              type="text"
              className="input-prod"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />

            <label>Comprimento:</label>
            <input
              type="text"
              className="input-prod"
              value={comprimento}
              onChange={(e) => setComprimento(e.target.value)}
            />

            <label>Altura:</label>
            <input
              type="text"
              className="input-prod"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />

            <label>Largura:</label>
            <input
              type="text"
              className="input-prod"
              value={largura}
              onChange={(e) => setLargura(e.target.value)}
            />

            <label>Cor:</label>
            <input
              type="text"
              className="input-prod"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
            />
            <label>Peso:</label>
            <input
              type="text"
              className="input-prod"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
            <label>Valor:</label>
            <input
              type="text"
              className="input-prod"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
            <label>Material:</label>
            {materia.length === 0 ? (
              <p>N/A matéria-prima.</p>
            ) : (
              <select
                className="select-prod"
                value={materiaPrima === null ? "null" : materiaPrima}
                onChange={(e) => {
                  const val = e.target.value;
                  setMateriaPrima(val === "null" ? null : val);
                }}
              >
                <option value="null">Selecione</option>
                {materia.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nome}
                  </option>
                ))}
              </select>
            )}

            <button className="btn-cadastrar" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

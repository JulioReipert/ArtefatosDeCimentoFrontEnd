import "./index.scss";
import { ReactComponent as CriarImg } from "../../assets/images/criar_img.svg";
import { useState } from "react";
import { CriarPedido } from "../../services/criar";
import { BuscarClientes } from "../../services/buscar";
import { getCurrentDataEntrega, getCurrentDate } from "../../utils/date";

export default function BtnCriarPedido({ fetchPedidos }) {
  const [dataEntrega, setDataEntrega] = useState(getCurrentDataEntrega());
  const [clienteNovo, setClienteNovo] = useState("");
  const [endereco, setEndereco] = useState("");

  const [mostrarCadastro, setMosTrarCadastro] = useState(false);
  const [girado, setGirado] = useState(false);
  const [cliente, setCliente] = useState([]);

  const toggleCadastro = () => {
    fetchClientes();
    setMosTrarCadastro((prev) => !prev);
    setGirado((prev) => !prev);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const dataEmissao = getCurrentDate();
    await CriarPedido(dataEntrega, clienteNovo, endereco, dataEmissao);
    limpar();
    fetchPedidos();
    fetchClientes();
  }

  function limpar() {
    setDataEntrega("");
    setClienteNovo("");
    setEndereco("");
  }

  async function fetchClientes() {
    const dados = await BuscarClientes();
    setCliente(dados);
  }

  return (
    <div className="comp-btn-criar-pedido">
      <div
        className={`comp-btn-criar-pedido ${girado ? "girado" : ""}`}
        onClick={toggleCadastro}
      >
        <CriarImg />
      </div>

      {mostrarCadastro && (
        <div className="tela-cadastro">
          <h2>Novo Pedido</h2>
          <form onSubmit={handleSubmit}>
            <label>Data entrega:</label>
            <input
              type="date"
              className="input-pedido"
              value={dataEntrega}
              onChange={(e) => setDataEntrega(e.target.value)}
            />
            <label>Cliente:</label>
            {cliente.length === 0 ? (
              <p>Nenhum cliente disponível no momento.</p>
            ) : (
              <select
                className="select-pedido"
                value={clienteNovo}
                onChange={(e) => setClienteNovo(e.target.value)}
              >
                <option value="">Selecione</option>
                {cliente.map((cliente) => (
                  <option key={cliente.id} value={cliente.id}>
                    {cliente.nome}
                  </option>
                ))}
              </select>
            )}
            <label>Endereço:</label>
            <input
              type="text"
              className="input-pedido"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
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

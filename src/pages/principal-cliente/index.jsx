import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Ferramentas from "../../components/ferramentas";
import BtnCriarCliente from "../../components/btn_criar/index.jsx";
import { useState, useEffect } from "react";
import { BuscarClientes } from "../../services/buscar.jsx";
import { ExcluirCliente } from "../../services/deletar.jsx";

export default function PrincipalCliente() {
  const [cliente, setCliente] = useState([]);
  const [selecionadoId, setSelecionadoId] = useState(null);

  async function fetchClientes() {
    const dados = await BuscarClientes();
    setCliente(dados);
  }

  useEffect(() => {
    fetchClientes();
  }, []);

  async function deletarCliente() {
    if (selecionadoId == null) return;
    await ExcluirCliente(selecionadoId);
    fetchClientes();
  }

  return (
    <div className="pagina-principal">
      <Header />
      <main>
        <Sidebar />
        <div className="main-02">
          <div className="lista-cliente-topo">
            <h1 className="titulo">Todos os Clientes</h1>
            <div className="ferramentas">
              <Ferramentas Excluir={deletarCliente} />
            </div>
          </div>

          <div className="lista-cliente">
            <div className="info-item-lista">
              <label>ID</label>
              <label>nome</label>
              <label>email</label>
              <label>telefone</label>
              <label>celular</label>
              <label>tipo documento</label>
              <label>num. documento</label>
            </div>
            {cliente.map((cliente) => (
              <li key={cliente.id} className="item-lista">
                <input
                  type="checkbox"
                  className="checkbox-cliente"
                  checked={selecionadoId === cliente.id}
                  onChange={() => setSelecionadoId(cliente.id)}
                />
                {cliente.id} - {cliente.nome} - {cliente.email} -{" "}
                {cliente.telefone} - {cliente.celular} -{" "}
                {cliente.tipo_documento} - {cliente.numero_documento}
              </li>
            ))}

            <BtnCriarCliente fetchClientes={fetchClientes} />
          </div>
        </div>
      </main>
    </div>
  );
}

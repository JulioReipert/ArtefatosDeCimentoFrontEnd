import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Ferramentas from "../../components/ferramentas";
import BtnCriarCliente from "../../components/btn_criar/index.jsx";
import { useState, useEffect } from "react";
import { BuscarClientes } from "../../services/buscar.jsx";
import { ExcluirCliente } from "../../services/deletar.jsx";
import { EditarCliente } from "../../services/editar.jsx";

export default function PrincipalCliente() {
  const [cliente, setCliente] = useState([]);
  const [selecionadoId, setSelecionadoId] = useState(null);

  const [editandoId, setEditandoId] = useState(null);

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

  async function editarCliente() {
    if (selecionadoId == null) return;
    await EditarCliente(selecionadoId);
    fetchClientes();
  }

  function atualizarCampo(nome, valor) {
    setCliente[selecionadoId]((prev) => ({ ...prev, [nome]: valor }));
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
              <Ferramentas Editar={editarCliente} Excluir={deletarCliente} />
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

                {selecionadoId === cliente.id ? (
                  <>
                    <input
                      value={cliente.nome}
                      onChange={(e) => atualizarCampo("nome", e.target.value)}
                    />
                    <input
                      value={cliente.email}
                      onChange={(e) => atualizarCampo("email", e.target.value)}
                    />
                    <input
                      value={cliente.telefone}
                      onChange={(e) =>
                        atualizarCampo("telefone", e.target.value)
                      }
                    />
                    <input
                      value={cliente.celular}
                      onChange={(e) =>
                        atualizarCampo("celular", e.target.value)
                      }
                    />
                    <select
                      value={cliente.tipo_documento}
                      onChange={(e) =>
                        atualizarCampo("tipo_documento", e.target.value)
                      }
                    >
                      <option value="CPF">CPF</option>
                      <option value="CNPJ">CNPJ</option>
                    </select>
                    <input
                      value={cliente.numero_documento}
                      onChange={(e) =>
                        atualizarCampo("numero_documento", e.target.value)
                      }
                    />
                  </>
                ) : (
                  <>
                    {cliente.id} - {cliente.nome} - {cliente.email} -{" "}
                    {cliente.telefone} - {cliente.celular} -{" "}
                    {cliente.tipo_documento} - {cliente.numero_documento}
                  </>
                )}
              </li>
            ))}

            <BtnCriarCliente fetchClientes={fetchClientes} />
          </div>
        </div>
      </main>
    </div>
  );
}

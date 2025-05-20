import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Ferramentas from "../../components/ferramentas";
import { useState, useEffect } from "react";
import { BuscarClientes, BuscarPedido } from "../../services/buscar";
import { ExcluirPedido } from "../../services/deletar";
import { EditarProduto } from "../../services/editar";
import { formatarDataBR } from "../../utils/date";
import BtnCriarPedido from "../../components/btn_criar_pedido";

export default function PrincipalPedido() {
  const [pedido, setPedido] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [selecionadoId, setSelecionadoId] = useState(null);
  const [dadosEdicao, setDadosEdicao] = useState(null);

  async function fetchPedidos() {
    const dados = await BuscarPedido();
    setPedido(dados);
  }

  async function fetchClientes() {
    const dados = await BuscarClientes();
    setCliente(dados);
  }

  useEffect(() => {
    fetchPedidos();
    fetchClientes();
  }, []);

  async function deletarPedido() {
    if (selecionadoId == null) return;
    await ExcluirPedido(selecionadoId);
    setSelecionadoId(null);
    fetchPedidos();
  }

  async function salvarEdicao() {
    if (!dadosEdicao) return;
    await EditarProduto(
      selecionadoId,
      dadosEdicao.data_entrega,
      dadosEdicao.cliente,
      dadosEdicao.endereco,
      dadosEdicao.emissao
    );
    setSelecionadoId(null);
    setDadosEdicao(null);
    fetchPedidos();
  }

  function iniciarEdicao(pedido) {
    setSelecionadoId(pedido.id);
    setDadosEdicao({ ...pedido });
  }

  function atualizarCampo(nome, valor) {
    setDadosEdicao((prev) => ({ ...prev, [nome]: valor }));
  }

  return (
    <div className="pagina-principal-pedido">
      <Header />
      <main>
        <Sidebar />
        <div className="main-02">
          <div className="lista-pedido-topo">
            <h1 className="titulo">Todos os Pedidos</h1>
            <div className="ferramentas">
              <Ferramentas Editar={salvarEdicao} Excluir={deletarPedido} />
            </div>
          </div>

          <div className="lista-pedido">
            <div className="info-item-lista-pedido">
              <label>ID</label>
              <label>data entrega</label>
              <label>cliente</label>
              <label>endereço</label>
              <label>emissão</label>
            </div>
            {pedido.map((pedido) => (
              <li key={pedido.id} className="item-lista-pedido">
                <input
                  type="checkbox"
                  className="checkbox-pedido"
                  checked={selecionadoId === pedido.id}
                  onChange={() =>
                    selecionadoId === pedido.id
                      ? setSelecionadoId(null)
                      : iniciarEdicao(pedido)
                  }
                />

                {selecionadoId === pedido.id ? (
                  <>
                    <input
                      className="input-edit-pedido"
                      value={dadosEdicao.data_entrega}
                      type="date"
                      onChange={(e) =>
                        atualizarCampo("data_entrega", e.target.value)
                      }
                    />
                    <select
                      value={dadosEdicao.cliente}
                      onChange={(e) =>
                        atualizarCampo("cliente", e.target.value)
                      }
                    >
                      {cliente.map((cliente) => (
                        <option key={cliente.id} value={cliente.id}>
                          {cliente.nome}
                        </option>
                      ))}
                    </select>
                    <input
                      className="input-edit-pedido"
                      value={dadosEdicao.endereco}
                      onChange={(e) =>
                        atualizarCampo("endereco", e.target.value)
                      }
                    />
                  </>
                ) : (
                  <div className="pedidos-infos">
                    <>
                      <label>{pedido.id}</label>
                      <label>{formatarDataBR(pedido.data_entrega)}</label>
                      
                      <label className="pedido-infos-cliente">
                        {(cliente.find((c) => c.id === pedido.cliente) || {})
                          .nome || "---"}
                      </label>
<label>{pedido.endereco}</label>
                      <label>{formatarDataBR(pedido.emissao)}</label>
                    </>
                  </div>
                )}
              </li>
            ))}

            <BtnCriarPedido fetchPedidos={fetchPedidos} />
          </div>
        </div>
      </main>
    </div>
  );
}

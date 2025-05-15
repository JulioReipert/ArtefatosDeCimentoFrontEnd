import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Ferramentas from "../../components/ferramentas";
import { useState, useEffect } from "react";
import { BuscarMateria, BuscarProduto } from "../../services/buscar";
import { ExcluirProduto } from "../../services/deletar";
import { EditarProduto } from "../../services/editar";
import BtnCriarProduto from "../../components/btn_criar_produto";

export default function PrincipalProduto() {
  const [produto, setProduto] = useState([]);
  const [materia, setMateria] = useState([]);
  const [selecionadoId, setSelecionadoId] = useState(null);
  const [dadosEdicao, setDadosEdicao] = useState(null);

  async function fetchProdutos() {
    const dados = await BuscarProduto();
    setProduto(dados);
  }

  async function fetchMateriais() {
    const dados = await BuscarMateria();
    setMateria(dados);
  }

  useEffect(() => {
    fetchProdutos();
    fetchMateriais();
  }, []);

  async function deletarProduto() {
    if (selecionadoId == null) return;
    await ExcluirProduto(selecionadoId);
    setSelecionadoId(null);
    fetchProdutos();
  }

  async function salvarEdicao() {
    if (!dadosEdicao) return;
    await EditarProduto(
      selecionadoId,
      dadosEdicao.nome,
      dadosEdicao.quantidade,
      dadosEdicao.comprimento,
      dadosEdicao.altura,
      dadosEdicao.largura,
      dadosEdicao.cor,
      dadosEdicao.peso,
      dadosEdicao.valor,
      dadosEdicao.materia_prima
    );
    setSelecionadoId(null);
    setDadosEdicao(null);
    fetchProdutos();
  }

  function iniciarEdicao(produto) {
    setSelecionadoId(produto.id);
    setDadosEdicao({ ...produto });
  }

  function atualizarCampo(nome, valor) {
    setDadosEdicao((prev) => ({ ...prev, [nome]: valor }));
  }

  return (
    <div className="pagina-principal-produto">
      <Header />
      <main>
        <Sidebar />
        <div className="main-02">
          <div className="lista-produto-topo">
            <h1 className="titulo">Todos os Produtos</h1>
            <div className="ferramentas">
              <Ferramentas Editar={salvarEdicao} Excluir={deletarProduto} />
            </div>
          </div>

          <div className="lista-produto">
            <div className="info-item-lista">
              <label>ID</label>
              <label>nome</label>
              <label>qtd</label>
              <label>comprimento</label>
              <label>altura</label>
              <label>largura</label>
              <label>cor</label>
              <label>peso</label>
              <label>valor</label>
              <label>material</label>
            </div>
            {produto.map((produto) => (
              <li key={produto.id} className="item-lista">
                <input
                  type="checkbox"
                  className="checkbox-produto"
                  checked={selecionadoId === produto.id}
                  onChange={() =>
                    selecionadoId === produto.id
                      ? setSelecionadoId(null)
                      : iniciarEdicao(produto)
                  }
                />

                {selecionadoId === produto.id ? (
                  <>
                    <input
                      className="input-edit-produto"
                      value={dadosEdicao.nome}
                      onChange={(e) => atualizarCampo("nome", e.target.value)}
                    />
                    <input
                      className="input-edit-produto"
                      value={dadosEdicao.quantidade}
                      onChange={(e) =>
                        atualizarCampo("quantidade", e.target.value)
                      }
                    />
                    <input
                      className="input-edit-produto"
                      value={dadosEdicao.comprimento}
                      onChange={(e) =>
                        atualizarCampo("comprimento", e.target.value)
                      }
                    />
                    <input
                      className="input-edit-produto"
                      value={dadosEdicao.altura}
                      onChange={(e) => atualizarCampo("altura", e.target.value)}
                    />
                    <input
                      className="input-edit-produto"
                      value={dadosEdicao.largura}
                      onChange={(e) =>
                        atualizarCampo("largura", e.target.value)
                      }
                    />
                    <input
                      className="input-edit-produto"
                      value={dadosEdicao.cor}
                      onChange={(e) => atualizarCampo("cor", e.target.value)}
                    />
                    <input
                      className="input-edit-produto"
                      value={dadosEdicao.peso}
                      onChange={(e) => atualizarCampo("peso", e.target.value)}
                    />
                    <input
                      className="input-edit-produto"
                      value={dadosEdicao.valor}
                      onChange={(e) => atualizarCampo("valor", e.target.value)}
                    />
                    <select
                      value={dadosEdicao.materia_prima}
                      onChange={(e) =>
                        atualizarCampo("materia_prima", e.target.value)
                      }
                    >
                      {materia.map((materia) => (
                        <option key={materia.id} value={materia.id}>
                          {materia.nome}
                        </option>
                      ))}
                    </select>
                  </>
                ) : ( <div className="produtos-infos">
                  <>
                    <label>{produto.id}</label>
                    <label>{produto.nome}</label>
                    <label> {produto.quantidade}</label>
                    <label>{produto.comprimento}</label>
                    <label> {produto.altura}</label>
                    <label> {produto.largura}</label>
                    <label>{produto.cor}</label>
                    <label> {produto.peso}</label>
                    <label>{produto.valor}</label>
                    <label> {produto.materia_prima}</label>
                  </>
                  </div>
                )}
              </li>
            ))}

            <BtnCriarProduto fetchProdutos={fetchProdutos} />
          </div>
        </div>
      </main>
    </div>
  );
}

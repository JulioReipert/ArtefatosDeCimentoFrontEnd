import "./index.scss";

export function ListarClientes({ clientes, selecionados, setSelecionados }) {
  if (!clientes || !clientes.length) return <p>Carregando clientes...</p>;

  const toggleSelecionado = (id) => {
    if (selecionados.includes(id)) {
      setSelecionados(selecionados.filter((item) => item !== id));
    } else {
      setSelecionados([...selecionados, id]);
    }
  };

  return (
    <ul className="comp-lista-clientes">
      {clientes.map((cliente) => (
        <li key={cliente.id} className="item-lista">
          <input type="checkbox" className="checkbox-cliente" />
          {cliente.nome} - {cliente.email} - {cliente.telefone} -{" "}
          {cliente.celular} - {cliente.tipo_documento} -{" "}
          {cliente.numero_documento}
        </li>
      ))}
    </ul>
  );
}

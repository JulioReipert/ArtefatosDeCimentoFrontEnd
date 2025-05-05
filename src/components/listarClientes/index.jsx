export function ListarClientes({ clientes }) {
  if (!clientes || !clientes.length) return <p>Carregando clientes...</p>;

  return (
    <ul>
      {clientes.map((cliente) => (
        <li key={cliente.id}>
          <strong>{cliente.nome}</strong> - {cliente.email} - {cliente.telefone}{" "}
          - {cliente.celular}
        </li>
      ))}
    </ul>
  );
}

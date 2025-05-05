import axios from "axios";

export async function BuscarClientes() {
  try {
    const resp = await axios.get("http://localhost:5010/cliente");
    return resp.data;
  } catch (err) {
    console.error("Erro ao buscar clientes:", err);
  }
}

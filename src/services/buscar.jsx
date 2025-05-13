import axios from "axios";

export async function BuscarClientes() {
  try {
    const resp = await axios.get("http://localhost:5010/cliente");
    return Array.isArray(resp.data) ? resp.data : [];
  } catch (err) {
    console.error("Erro ao buscar clientes:", err);
    return [];
  }
}

export async function BuscarPedido() {
  try {
    const resp = await axios.get("http://localhost:5010/pedido");
    return resp.data;
  } catch (err) {
    console.error("Erro ao buscar pedidos:", err);
  }
}

export async function BuscarMateria() {
  try {
    const resp = await axios.get("http://localhost:5010/materia_prima");
    return resp.data;
  } catch (err) {
    console.error("Erro ao buscar por materia prima:", err);
  }
}

export async function BuscarProduto() {
  try {
    const resp = await axios.get("http://localhost:5010/produto");
    return resp.data;
  } catch (err) {
    console.error("Erro ao buscar produtos:", err);
    return [];
  }
}

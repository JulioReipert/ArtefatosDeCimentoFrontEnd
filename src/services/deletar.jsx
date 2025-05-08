import axios from "axios";

export function ExcluirCliente(id) {
  return axios.delete(`http://localhost:5010/cliente/${id}`);
}

export function ExcluirMateria(id) {
  return axios.delete(`http://localhost:5010/materia_prima/${id}`);
}

export function ExcluirProduto(id) {
  return axios.delete(`http://localhost:5010/produto/${id}`);
}

export function ExcluirPedido(id) {
  return axios.delete(`http://localhost:5010/pedido/${id}`);
}

// export function ExcluirEntrega(id) {
//   return axios.delete(`http://localhost:5010/entrega/${id}`);
// }
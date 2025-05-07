import axios from "axios";

export function ExcluirCliente(id) {
  return axios.delete(`http://localhost:5010/cliente/${id}`);
}

export function ExcluirMateria(id) {
  return axios.delete(`http://localhost:5010/materia_prima/${id}`);
}

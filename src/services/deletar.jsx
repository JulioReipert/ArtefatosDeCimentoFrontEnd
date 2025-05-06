import axios from "axios";

export function ExcluirCliente(id) {
  return axios.delete(`http://localhost:5010/cliente/${id}`);
}

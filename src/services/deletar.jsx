import axios from "axios";

export function ExcluirCliente(id) {
  axios.delete(`http://localhost:5010/cliente/${id}`);
}

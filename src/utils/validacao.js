export default class Validador {
  static validarTelefone(telefone) {
    if (!telefone) return true;
    const regex = /^(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/;
    return regex.test(telefone);
  }

  static validarCelular(celular) {
    const regex = /^(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/;
    return regex.test(celular);
  }

  static validarDocumento(numero, tipo) {
    if (!numero || !tipo) return false;

    const numeros = numero.replace(/\D/g, "");

    if (tipo === "1") {
      return numeros.length === 11;
    } else if (tipo === "2") {
      return numeros.length === 14;
    } else {
      return false;
    }
  }
}

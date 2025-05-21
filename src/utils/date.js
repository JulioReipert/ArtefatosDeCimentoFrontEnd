export function getCurrentDate() {
  var nowDate = new Date();
  var month =
    (nowDate.getMonth() + 1).toString().length === 1
      ? "0" + (nowDate.getMonth() + 1)
      : nowDate.getMonth() + 1;

  var day =
    nowDate.getDate().toString().length === 1
      ? "0" + nowDate.getDate()
      : +nowDate.getDate();

  var hour =
    nowDate.getHours().toString().length === 1
      ? "0" + nowDate.getHours()
      : +nowDate.getHours();

  var minute =
    nowDate.getMinutes().toString().length === 1
      ? "0" + nowDate.getMinutes()
      : +nowDate.getMinutes();

  var seconds =
    nowDate.getSeconds().toString().length === 1
      ? "0" + nowDate.getSeconds()
      : +nowDate.getSeconds();

  return (
    nowDate.getFullYear() +
    "-" +
    month +
    "-" +
    day +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    seconds
  );
}

export function getCurrentDataEntrega() {
  var nowDate = new Date();
  var month =
    (nowDate.getMonth() + 1).toString().length === 1
      ? "0" + (nowDate.getMonth() + 1)
      : nowDate.getMonth() + 1;

  var day =
    nowDate.getDate().toString().length === 1
      ? "0" + nowDate.getDate()
      : +nowDate.getDate();

  return nowDate.getFullYear() + "-" + month + "-" + day;
}

export function formatarDataBR(dataISO) {
  const data = new Date(dataISO);
  return data.toLocaleDateString("pt-BR");
}

export function formatarDataInput(data) {
  if (!data) return "";
  return data.slice(0, 10);
}

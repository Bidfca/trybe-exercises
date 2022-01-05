function reverse(lista) {
  if (lista.length < 2) return lista;
  return [lista[lista.length - 1]].concat(
    reverse(lista.slice(0, lista.length - 1))
  );
}

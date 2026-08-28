function btnSalvar() {
  const nome = document.getElementById("nome").value;
  const anoLancamento = document.getElementById("ano-lancamento").value;
  const desenvolvedora = document.getElementById("desenvolvedora").value;
  const distribuidora = document.getElementById("distribuidora").value;
  const jogo = {
    nome: nome,
    anoLancamento: anoLancamento,
    desenvolvedora: desenvolvedora,
    distribuidora: distribuidora,
  };

  let jogos = JSON.parse(localStorage.getItem("jogos")) || [];

  jogos.push(jogo);

  localStorage.setItem("jogos", JSON.stringify(jogos));

  listarJogos();
}

function listarJogos() {
  const lista = document.getElementById("listaJogos");

  let jogos = JSON.parse(localStorage.getItem("jogos")) || [];

  lista.innerHTML = "";

  jogos.forEach((jogo) => {
    lista.innerHTML += `<p>${jogo.nome}</p>`;
  });
}

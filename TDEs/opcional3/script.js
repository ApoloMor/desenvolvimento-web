function btnSalvar() {
  const nome = document.getElementById("nome").value;
  const anoLancamento = document.getElementById("ano-lancamento").value;
  const desenvolvedora = document.getElementById("desenvolvedora").value;
  const distribuidora = document.getElementById("distribuidora").value;

  if (
    nome === "" ||
    anoLancamento === "" ||
    desenvolvedora === "" ||
    distribuidora === ""
  ) {
    alert("Preencha todos os campos!");
    return;
  }

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

  document.getElementById("nome").value = "";
  document.getElementById("ano-lancamento").value = "";
  document.getElementById("desenvolvedora").value = "";
  document.getElementById("distribuidora").value = "";

  document.getElementById("nome").focus();
}

function listarJogos() {
  const lista = document.getElementById("listaJogos");

  let jogos = JSON.parse(localStorage.getItem("jogos")) || [];

  lista.innerHTML = "";

  jogos.forEach((jogo, index) => {
    lista.innerHTML += `
      <div class="jogo">

        <p>${jogo.nome}</p>

        <a href="details.html?id=${index}">
          Ver detalhes
        </a>

        <button onclick="removerJogo(${index})">
          Remover
        </button>

      </div>
    `;
  });
}

function removerJogo(index) {
  let jogos = JSON.parse(localStorage.getItem("jogos")) || [];

  jogos.splice(index, 1);

  localStorage.setItem("jogos", JSON.stringify(jogos));

  listarJogos();
}

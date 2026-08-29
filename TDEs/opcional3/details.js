function mostrarDetalhes() {
  const parametros = new URLSearchParams(window.location.search);

  const id = parametros.get("id");

  let jogos = JSON.parse(localStorage.getItem("jogos")) || [];

  const jogo = jogos[id];

  const detalhes = document.getElementById("detalhesJogo");

  if (!jogo) {
    detalhes.innerHTML = "<p>Jogo não encontrado.</p>";

    return;
  }

  detalhes.innerHTML = `

    <div class="card-detalhes">

      <h1>${jogo.nome}</h1>

      <p>
        <strong>Ano de lançamento:</strong>
        ${jogo.anoLancamento}
      </p>

      <p>
        <strong>Desenvolvedora:</strong>
        ${jogo.desenvolvedora}
      </p>

      <p>
        <strong>Distribuidora:</strong>
        ${jogo.distribuidora}
      </p>

      <a href="index.html">
        Voltar
      </a>

    </div>

  `;
}

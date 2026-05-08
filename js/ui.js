export function renderizarLivros(livros) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  if (livros.length === 0) {
    lista.innerHTML = `<p class='vazio'>
      Nenhum livro cadastrado
    </p>`;
    return;
  }

  livros.forEach((livro) => {
    lista.innerHTML += `
      <div class="livro-card">
        <h3>${livro.titulo}</h3>
        <p><strong>Autor:</strong> ${livro.autor}</p>
        <p><strong>Preço:</strong> R$ ${livro.preco.toFixed(2)}</p>
      </div>
    `;
  });
}

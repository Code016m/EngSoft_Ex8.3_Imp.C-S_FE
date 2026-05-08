export function renderizarLivros(livros) {
  const lista = document.getElementById("lista");

  if (!livros || livros.length === 0) {
    lista.innerHTML = `<p class="vazio">Nenhum livro cadastrado</p>`;
    return;
  }

  lista.innerHTML = livros
    .map(
      (livro) => `
      <div class="livro-card">
        <h3>${livro.titulo}</h3>
        <p><strong>Autor:</strong> ${livro.autor}</p>
        <p><strong>Preço:</strong> R$ ${Number(livro.preco).toFixed(2)}</p>
      </div>
    `,
    )
    .join("");
}

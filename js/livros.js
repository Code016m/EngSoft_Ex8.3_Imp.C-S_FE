import { buscarLivros, salvarLivro } from "./api.js";
import { renderizarLivros } from "./ui.js";

async function carregarLivros() {
  try {
    const livros = await buscarLivros();
    renderizarLivros(livros);
  } catch (error) {
    console.error("Erro ao carregar livros:", error);
  }
}

async function adicionarLivro() {
  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const preco = parseFloat(document.getElementById("preco").value);

  if (!titulo || !autor || isNaN(preco)) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    await salvarLivro({ titulo, autor, preco });

    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("preco").value = "";

    carregarLivros();
    alert("Livro adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar livro:", error);
  }
}

document
  .getElementById("btnAdicionar")
  .addEventListener("click", adicionarLivro);

carregarLivros();

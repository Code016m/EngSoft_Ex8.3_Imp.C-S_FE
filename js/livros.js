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
  const tituloEl = document.getElementById("titulo");
  const autorEl = document.getElementById("autor");
  const precoEl = document.getElementById("preco");
  const btn = document.getElementById("btnAdicionar");

  const titulo = tituloEl.value.trim();
  const autor = autorEl.value.trim();
  const preco = parseFloat(precoEl.value);

  if (!titulo || !autor || isNaN(preco)) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    btn.disabled = true;

    await salvarLivro({ titulo, autor, preco });

    tituloEl.value = "";
    autorEl.value = "";
    precoEl.value = "";

    await carregarLivros();

    alert("Livro adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar livro:", error);
    alert("Erro ao adicionar livro");
  } finally {
    btn.disabled = false;
  }
}

function init() {
  document
    .getElementById("btnAdicionar")
    .addEventListener("click", adicionarLivro);

  carregarLivros();
}

document.addEventListener("DOMContentLoaded", init);

const API_URL = "https://engsoft-api-livraria.onrender.com/livros/";

export async function buscarLivros() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar livros");
  }

  return await response.json();
}

export async function salvarLivro(livro) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(livro),
  });

  if (!response.ok) {
    throw new Error("Erro ao salvar livro");
  }

  return await response.json();
}

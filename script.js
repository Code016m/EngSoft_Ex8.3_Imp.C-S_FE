const API_URL = "http://127.0.0.1:5000/livros/";

async function carregarLivros() {
    const resposta = await fetch(API_URL);
    const livros = await resposta.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    livros.forEach(livro => {
        const item = document.createElement("li");
        item.textContent = `${livro.titulo} - ${livro.autor} - ${livro.preco}`;
        lista.appendChild(item);
    });
}

async function adicionarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const preco = document.getElementById("preco").value;

    if (!titulo || !autor || !preco) {
        alert("Preencha todos os campos!");
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            autor: autor,
            preco: preco
        })
    });

    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("preco").value = "";

    carregarLivros();
}

carregarLivros();
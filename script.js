function adicionarCarrinho(nome, preco, imagem) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let produtoExistente = carrinho.find(p => p.nome === nome);

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: 1 // 👈 ESSENCIAL
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");
}
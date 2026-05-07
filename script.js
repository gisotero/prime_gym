function adicionarCarrinho(nome, preco, imagem) {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let produtoExistente = carrinho.find(p => p.nome === nome);

    if (produtoExistente) {

        produtoExistente.quantidade++;

    } else {

        carrinho.push({

            nome: nome,

            preco: preco,

            imagem: imagem,

            quantidade: 1,

            selecionado: true

        });

    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");
}
function filtrarCategoria(categoria) {

    let produtos = document.querySelectorAll(".card");

    produtos.forEach(produto => {

        if (produto.classList.contains(categoria)) {

            produto.style.display = "block";

        } else {

            produto.style.display = "none";
        }

    });
}

function mostrarTodos() {

    let produtos = document.querySelectorAll(".card");

    produtos.forEach(produto => {

        produto.style.display = "block";

    });
}

function pesquisarProdutos() {

    let pesquisa = document
    .getElementById("barra-pesquisa")
    .value
    .toLowerCase()
    .trim();

    let produtos = document.querySelectorAll(".card");

    produtos.forEach(produto => {

        let nome = produto
        .querySelector("h3")
        .innerText
        .toLowerCase();

        if (nome.startsWith(pesquisa)) {

            produto.style.display = "block";

        } else {

            produto.style.display = "none";
        }

    });

    if (pesquisa === "") {

        produtos.forEach(produto => {

            produto.style.display = "block";

        });
    }
}
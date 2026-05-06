let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let lista = document.getElementById("lista-carrinho");
let total = 0;

function atualizarCarrinho() {
    lista.innerHTML = "";
    total = 0;

    carrinho.forEach((produto, index) => {
        let item = document.createElement("div");
        item.classList.add("item-carrinho");

       item.innerHTML = `
    <img src="${produto.imagem}">
    
    <div class="info">
        <h3>${produto.nome}</h3>

        <p class="unitario">Unitário: R$ ${produto.preco}</p>
        <p class="total-item">Total: R$ ${(produto.preco * produto.quantidade).toFixed(2)}</p>

        <div class="quantidade">
            <button onclick="diminuir(${index})">-</button>
            <span>${produto.quantidade}</span>
            <button onclick="aumentar(${index})">+</button>
        </div>
    </div>
`;
        `;

        lista.appendChild(item);

        total += produto.preco * produto.quantidade;
    });

    document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function aumentar(index) {
    carrinho[index].quantidade++;
    atualizarCarrinho();
}

function diminuir(index) {
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
    } else {
        carrinho.splice(index, 1); // remove se chegar em 0
    }
    atualizarCarrinho();
}

atualizarCarrinho();
#include <stdio.h>
#include <string.h>

#define MAX_CLIENTES 100
#define MAX_PRODUTOS 100

typedef struct {
    int id;
    char nome[50];
    int idade;
} Cliente;

typedef struct {
    int codigo;
    char nome[50];
    float preco;
    int estoque;
} Produto;

Cliente clientes[MAX_CLIENTES];
Produto produtos[MAX_PRODUTOS];

int totalClientes = 0;
int totalProdutos = 0;

void cadastrarCliente() {
    if(totalClientes >= MAX_CLIENTES) {
        printf("\nLimite de clientes atingido!\n");
        return;
    }

    printf("\n=== CADASTRO DE CLIENTE ===\n");

    clientes[totalClientes].id = totalClientes + 1;

    printf("Nome: ");
    getchar();
    fgets(clientes[totalClientes].nome, 50, stdin);

    printf("Idade: ");
    scanf("%d", &clientes[totalClientes].idade);

    totalClientes++;

    printf("Cliente cadastrado!\n");
}

void listarClientes() {
    if(totalClientes == 0) {
        printf("\nNenhum cliente.\n");
        return;
    }

    for(int i = 0; i < totalClientes; i++) {
        printf("\nID: %d\n", clientes[i].id);
        printf("Nome: %s", clientes[i].nome);
        printf("Idade: %d\n", clientes[i].idade);
    }
}

void cadastrarProduto() {
    if(totalProdutos >= MAX_PRODUTOS) {
        printf("\nLimite atingido!\n");
        return;
    }

    printf("\n=== CADASTRO PRODUTO ===\n");

    produtos[totalProdutos].codigo = totalProdutos + 1;

    printf("Nome: ");
    getchar();
    fgets(produtos[totalProdutos].nome, 50, stdin);

    printf("Preco: ");
    scanf("%f", &produtos[totalProdutos].preco);

    printf("Estoque: ");
    scanf("%d", &produtos[totalProdutos].estoque);

    totalProdutos++;

    printf("Produto cadastrado!\n");
}

void listarProdutos() {
    if(totalProdutos == 0) {
        printf("\nNenhum produto.\n");
        return;
    }

    for(int i = 0; i < totalProdutos; i++) {
        printf("\nCodigo: %d\n", produtos[i].codigo);
        printf("Nome: %s", produtos[i].nome);
        printf("Preco: %.2f\n", produtos[i].preco);
        printf("Estoque: %d\n", produtos[i].estoque);
    }
}

void realizarVenda() {
    int codigo, quantidade;

    if(totalProdutos == 0) {
        printf("\nSem produtos.\n");
        return;
    }

    listarProdutos();

    printf("\nCodigo do produto: ");
    scanf("%d", &codigo);

    printf("Quantidade: ");
    scanf("%d", &quantidade);

    for(int i = 0; i < totalProdutos; i++) {
        if(produtos[i].codigo == codigo) {

            if(produtos[i].estoque >= quantidade) {

                produtos[i].estoque -= quantidade;

                float total = produtos[i].preco * quantidade;

                printf("\nVenda realizada!\n");
                printf("Total: R$ %.2f\n", total);

            } else {
                printf("\nEstoque insuficiente!\n");
            }

            return;
        }
    }

    printf("\nProduto nao encontrado!\n");
}

int main() {
    int opcao;

    do {
        printf("\n1 - Cliente\n2 - Listar Clientes\n3 - Produto\n4 - Listar Produtos\n5 - Venda\n0 - Sair\n");
        printf("Opcao: ");
        scanf("%d", &opcao);

        switch(opcao) {
            case 1: cadastrarCliente(); break;
            case 2: listarClientes(); break;
            case 3: cadastrarProduto(); break;
            case 4: listarProdutos(); break;
            case 5: realizarVenda(); break;
        }

    } while(opcao != 0);

    return 0;
}

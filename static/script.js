// 1. "BANCO DE DADOS" ESTÁTICO (Catálogo extraído do seu PDF)
const produtos = [
    { id: 1, nome: "Brahma Latão 473ml", preco: 5.50 },
    { id: 2, nome: "Heineken Long Neck", preco: 8.00 },
    { id: 3, nome: "Skol Beats Senses Lata", preco: 7.00 },
    { id: 4, nome: "Vodka Smirnoff 900ml", preco: 40.00 },
    { id: 5, nome: "Jack Daniel's Preto 1L", preco: 160.00 },
    { id: 6, nome: "Red Bull Tradicional", preco: 10.00 },
    { id: 7, nome: "Coca Cola 2L", preco: 12.00 },
    { id: 8, nome: "Gelo de Coco Verde", preco: 4.00 },
    { id: 9, nome: "Carvão Frigogil 2,5kg", preco: 12.00 }
];

let carrinho = {};

// 2. RENDERIZAÇÃO DA VITRINE
function renderizarProdutos(lista) {
    const container = document.getElementById('product-list');
    container.innerHTML = '';

    lista.forEach(produto => {
        const qtd = carrinho[produto.id] ? carrinho[produto.id].quantidade : 0;
        
        container.innerHTML += `
            <div class="product-card">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                <div class="controls">
                    <button onclick="alterarQuantidade(${produto.id}, -1)">-</button>
                    <span id="qtd-${produto.id}">${qtd}</span>
                    <button onclick="alterarQuantidade(${produto.id}, 1)">+</button>
                </div>
            </div>
        `;
    });
}

// 3. SISTEMA DE AUTOCOMPLETE
function carregarAutocomplete() {
    const datalist = document.getElementById('lista-produtos');
    datalist.innerHTML = ''; 
    
    produtos.forEach(produto => {
        const option = document.createElement('option');
        option.value = produto.nome;
        datalist.appendChild(option);
    });
}

// 4. LÓGICA DE PESQUISA RÁPIDA
function filtrarProdutos() {
    const termo = document.getElementById('searchBar').value.toLowerCase();
    const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
    renderizarProdutos(filtrados);
}

// 5. GERENCIAMENTO DO CARRINHO
function alterarQuantidade(id, delta) {
    const produto = produtos.find(p => p.id === id);
    
    if (!carrinho[id]) {
        carrinho[id] = { nome: produto.nome, preco: produto.preco, quantidade: 0 };
    }
    
    carrinho[id].quantidade += delta;
    
    // Remove do carrinho se zerar
    if (carrinho[id].quantidade <= 0) {
        delete carrinho[id];
    }
    
    atualizarInterface();
}

function atualizarInterface() {
    // Atualiza apenas os números na tela sem recarregar tudo
    produtos.forEach(p => {
        const span = document.getElementById(`qtd-${p.id}`);
        if (span) {
            span.innerText = carrinho[p.id] ? carrinho[p.id].quantidade : 0;
        }
    });

    // Recalcula o total
    let total = 0;
    for (let id in carrinho) {
        total += carrinho[id].quantidade * carrinho[id].preco;
    }

    // Controle de exibição da barra de checkout
    const cartBar = document.getElementById('cart-summary');
    if (total > 0) {
        cartBar.classList.remove('hidden');
        document.getElementById('cart-total').innerText = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    } else {
        cartBar.classList.add('hidden');
    }
}

// 6. PROTOCOLO DE ENVIO WHATSAPP
function enviarWhatsApp() {
    const telefone = "5522988303921"; // Número alvo corrigido
    let texto = "Olá, Super Japa! Gostaria de fazer o seguinte pedido:%0A%0A";
    let total = 0;

    for (let id in carrinho) {
        let item = carrinho[id];
        let subtotal = item.quantidade * item.preco;
        total += subtotal;
        texto += `*${item.quantidade}x* ${item.nome} - R$ ${subtotal.toFixed(2).replace('.', ',')}%0A`;
    }

    texto += `%0A*Total do Pedido: R$ ${total.toFixed(2).replace('.', ',')}*`;
    texto += "%0A%0AQual a forma de pagamento e a previsão de entrega?";

    const url = `https://wa.me/${telefone}?text=${texto}`;
    window.open(url, '_blank');
}

// 7. INICIALIZAÇÃO DO SISTEMA
renderizarProdutos(produtos);
carregarAutocomplete();
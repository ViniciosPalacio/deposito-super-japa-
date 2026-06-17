// BANCO DE DADOS COMPLETO DA PLANILHA
const produtos = [
  // --- CERVEJAS ---
  {id: 1, cat: "Cervejas", nome: "Brahma Latão 473ml", preco: 5.50, pack: {nome: "Caixa c/ 12", preco: 66.00}, destaque: true},
  {id: 2, cat: "Cervejas", nome: "Antarctica Latão 473ml", preco: 5.50, pack: {nome: "Caixa c/ 12", preco: 66.00}},
  {id: 3, cat: "Cervejas", nome: "Corona Latão 473ml", preco: 7.50, pack: {nome: "Caixa c/ 12", preco: 90.00}, destaque: true},
  {id: 4, cat: "Cervejas", nome: "Budweiser Latão 473ml", preco: 6.50, pack: {nome: "Caixa c/ 12", preco: 78.00}},
  {id: 5, cat: "Cervejas", nome: "Spaten Latão 473ml", preco: 6.50, pack: {nome: "Caixa c/ 12", preco: 78.00}, destaque: true},
  {id: 6, cat: "Cervejas", nome: "Heineken Latão 473ml", preco: 7.00, pack: {nome: "Caixa c/ 12", preco: 84.00}, destaque: true},
  {id: 7, cat: "Cervejas", nome: "Império Latão 473ml", preco: 5.00, pack: {nome: "Caixa c/ 12", preco: 60.00}},
  
  // --- LONG NECK E OUTROS ---
  {id: 8, cat: "Cervejas", nome: "Heineken Long Neck 330ml", preco: 8.00, pack: {nome: "Pack c/ 6", preco: 48.00}, destaque: true},
  {id: 9, cat: "Cervejas", nome: "Corona Long Neck 330ml", preco: 8.50, pack: {nome: "Pack c/ 6", preco: 51.00}},
  {id: 10, cat: "Cervejas", nome: "Skol Beats Senses Lata", preco: 7.00, destaque: true},

  // --- DESTILADOS E WHISKY ---
  {id: 11, cat: "Destilados", nome: "Vodka Smirnoff 900ml", preco: 40.00, destaque: true},
  {id: 12, cat: "Destilados", nome: "Vodka Absolut 750ml", preco: 85.00},
  {id: 13, cat: "Destilados", nome: "Gin Rocks Tradicional 1L", preco: 35.00},
  {id: 14, cat: "Destilados", nome: "Whisky Red Label 1L", preco: 95.00, destaque: true},
  {id: 15, cat: "Destilados", nome: "Whisky Jack Daniels Trad.", preco: 160.00, destaque: true},
  {id: 16, cat: "Destilados", nome: "Whisky Cavalo Branco 1L", preco: 75.00},

  // --- ENERGÉTICOS ---
  {id: 17, cat: "Energéticos", nome: "Red Bull Tradicional", preco: 10.00, pack: {nome: "Pack c/ 4", preco: 40.00}, destaque: true},
  {id: 18, cat: "Energéticos", nome: "Monster Tradicional", preco: 12.00},
  {id: 19, cat: "Energéticos", nome: "Baly Tradicional 2L", preco: 13.00, destaque: true},

  // --- REFRIGERANTES E ÁGUA ---
  {id: 20, cat: "Refrigerantes", nome: "Coca Cola 2L", preco: 12.00, destaque: true},
  {id: 21, cat: "Refrigerantes", nome: "Guaraná Antarctica 2L", preco: 12.00},
  {id: 22, cat: "Refrigerantes", nome: "Coca Cola Lata 350ml", preco: 5.50},
  {id: 23, cat: "Refrigerantes", nome: "Água Mineral S/ Gás 510ml", preco: 3.00},
  {id: 24, cat: "Refrigerantes", nome: "Água Mineral C/ Gás 510ml", preco: 3.50},

  // --- GELO E CARVÃO ---
  {id: 25, cat: "Gelo/Carvão", nome: "Gelo Filtrado 5kg", preco: 15.00, destaque: true},
  {id: 26, cat: "Gelo/Carvão", nome: "Gelo Escama 20kg", preco: 30.00},
  {id: 27, cat: "Gelo/Carvão", nome: "Gelo de Coco Verde", preco: 4.00, destaque: true},
  {id: 28, cat: "Gelo/Carvão", nome: "Carvão Frigogil 2kg", preco: 12.00, destaque: true},

  // --- DOCES ---
  {id: 29, cat: "Doces", nome: "Halls Extra Forte", preco: 2.50},
  {id: 30, cat: "Doces", nome: "Halls Morango", preco: 2.50},
  {id: 31, cat: "Doces", nome: "Mentos Purefresh Freshmint", preco: 3.00},
  {id: 32, cat: "Doces", nome: "Fini Dentadura", preco: 2.00},
  {id: 33, cat: "Doces", nome: "Paçoquinha Rolha", preco: 1.00},
  {id: 34, cat: "Doces", nome: "Pé de Moça", preco: 2.00},

  // --- SALGADOS E PETISCOS ---
  {id: 35, cat: "Petiscos", nome: "Torcida Queijo", preco: 3.00},
  {id: 36, cat: "Petiscos", nome: "Torcida Churrasco", preco: 3.00},
  {id: 37, cat: "Petiscos", nome: "Batata Ruffles 17g", preco: 2.00},

  // --- TABACARIA E GERIAS ---
  {id: 38, cat: "Tabacaria", nome: "Maço Dunhill Carlton Blend", preco: 14.00},
  {id: 39, cat: "Tabacaria", nome: "Maço Lucky Strike Double Ice", preco: 11.75},
  {id: 40, cat: "Tabacaria", nome: "Seda OCB", preco: 7.00},
  {id: 41, cat: "Tabacaria", nome: "Isqueiro Bic Max", preco: 8.00},

  // --- CHURRASCO ---
  {id: 42, cat: "Churrasco", nome: "Sal Grosso", preco: 5.00},
  {id: 43, cat: "Churrasco", nome: "Sal Parrilha Argentino 1kg", preco: 12.00},
  {id: 44, cat: "Churrasco", nome: "Pasta Pão de Alho Trad. 500g", preco: 15.00}
];

const catsUnicas = [...new Set(produtos.map(p => p.cat))];
const cats = ["Destaques", ...catsUnicas];

let catAtiva = "Destaques";
let carrinho = {}; 
let pagamento = "";
let coords = null;

function renderCats(){
  const el = document.getElementById("cats");
  el.innerHTML = cats.map(c => `<button class="cat-btn${c===catAtiva?' active':''}" onclick="setcat('${c}')">${c}</button>`).join('');
}

function setcat(c){
    catAtiva=c;
    document.getElementById("searchBar").value = ""; 
    renderCats();
    renderProdutos();
}

function mudarVariante(prodId, variante) {
    const p = produtos.find(x => x.id === prodId);
    const priceDiv = document.getElementById(`price-${prodId}`);
    
    if (variante === 'unidade') {
        priceDiv.textContent = `R$ ${p.preco.toFixed(2).replace('.',',')}`;
    } else {
        priceDiv.textContent = `R$ ${p.pack.preco.toFixed(2).replace('.',',')}`;
    }
    
    // Zera a quantidade no display se o cara trocar a variante, pra evitar erros no carrinho
    const span = document.getElementById(`qtd-${prodId}`);
    span.textContent = "0";
    span.className = 'qty';
}

function renderProdutos(){
  const termo = document.getElementById("searchBar").value.toLowerCase();
  const container = document.getElementById("product-list");
  
  let catsFiltradas = termo !== "" ? catsUnicas : (catAtiva === "Destaques" ? ["Destaques"] : [catAtiva]);
  let html = "";
  
  catsFiltradas.forEach(cat => {
    let lista = termo !== "" ? 
        produtos.filter(p => p.cat === cat && p.nome.toLowerCase().includes(termo)) :
        (cat === "Destaques" ? produtos.filter(p => p.destaque === true) : produtos.filter(p => p.cat === cat));

    if(!lista.length) return;
    
    const tituloSessao = (catAtiva === "Destaques" && termo === "") ? "Mais Vendidos" : cat;
    if (html.indexOf(`>${tituloSessao}</div>`) === -1) {
        html += `<div class="section-title">${tituloSessao}</div><div class="grid">`;
    }

    lista.forEach(p => {
      // Cria a lógica da foto para buscar na pasta static/assets/
      const imgPath = `static/assets/${p.id}.jpg`;
      
      // Constrói o HTML do menu de Pack se o produto tiver a opção
      let packSelectHTML = "";
      if (p.pack) {
          packSelectHTML = `
          <div class="pack-selector">
              <select id="sel-${p.id}" onchange="mudarVariante(${p.id}, this.value)">
                  <option value="unidade">Unidade (R$ ${p.preco.toFixed(2).replace('.',',')})</option>
                  <option value="pack">${p.pack.nome} (R$ ${p.pack.preco.toFixed(2).replace('.',',')})</option>
              </select>
          </div>`;
      }

      html += `<div class="card">
        <div class="card-img-wrap">
          <img src="${imgPath}" alt="${p.nome}" class="card-img" onerror="this.src='static/assets/default.jpg'; this.onerror=null;">
        </div>
        <h3>${p.nome}</h3>
        ${packSelectHTML}
        <div class="price" id="price-${p.id}">R$ ${p.preco.toFixed(2).replace('.',',')}</div>
        <div class="controls">
          <button onclick="alt(${p.id},-1)" aria-label="Remover">−</button>
          <span class="qty" id="qtd-${p.id}">0</span>
          <button onclick="alt(${p.id},1)" aria-label="Adicionar">+</button>
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  
  if(!html) html = `<div class="empty"><i class="ti ti-search-off" style="font-size:32px;display:block;margin-bottom:12px"></i>Nenhum produto encontrado</div>`;
  container.innerHTML = html;
  
  // Como o HTML foi re-renderizado, precisamos sincronizar os números do carrinho
  for (let key in carrinho) {
      const baseId = key.split('_')[0];
      const span = document.getElementById(`qtd-${baseId}`);
      if (span) {
          span.textContent = carrinho[key].quantidade;
          span.className = 'qty has-qty';
      }
  }
}

function filtrar(){ renderProdutos(); }

function alt(idBase, delta){
  const p = produtos.find(x => x.id === idBase);
  const selector = document.getElementById(`sel-${idBase}`);
  
  // Define qual variante está sendo comprada
  const isPack = selector && selector.value === 'pack';
  
  // Cria um ID único no carrinho para separar unidade de pack
  const cartId = isPack ? `${idBase}_pack` : `${idBase}_un`;
  const nomeFinal = isPack ? `${p.nome} (${p.pack.nome})` : p.nome;
  const precoFinal = isPack ? p.pack.preco : p.preco;

  if(!carrinho[cartId]) carrinho[cartId] = {nome: nomeFinal, preco: precoFinal, quantidade: 0, baseId: idBase};
  
  carrinho[cartId].quantidade += delta;
  
  if(carrinho[cartId].quantidade <= 0) delete carrinho[cartId];
  
  // Atualiza o display no card
  const span = document.getElementById(`qtd-${idBase}`);
  if(span){
    let totalNaTela = 0;
    if (carrinho[`${idBase}_un`]) totalNaTela += carrinho[`${idBase}_un`].quantidade;
    if (carrinho[`${idBase}_pack`]) totalNaTela += carrinho[`${idBase}_pack`].quantidade;
    
    span.textContent = totalNaTela;
    span.className = 'qty' + (totalNaTela > 0 ? ' has-qty' : '');
  }
  
  atualizarCarrinho();
}

function atualizarCarrinho(){
  let total=0, itens=0;
  for(let id in carrinho){total+=carrinho[id].quantidade*carrinho[id].preco;itens+=carrinho[id].quantidade;}
  const bar = document.getElementById("cart-bar");
  if(total>0){
    bar.classList.remove("hidden");
    document.getElementById("cart-total").textContent=`Total: R$ ${total.toFixed(2).replace('.',',')}`;
    document.getElementById("cart-items-count").textContent=`${itens} ${itens===1?'item':'itens'}`;
  } else {
    bar.classList.add("hidden");
  }
}

function abrirModal(){
  let resumo="";
  let total=0;
  for(let id in carrinho){
    const it=carrinho[id];
    const sub=it.quantidade*it.preco;
    total+=sub;
    resumo+=`<div style="display:flex;justify-content:space-between;padding:4px 0">${it.quantidade}× ${it.nome}<span>R$ ${sub.toFixed(2).replace('.',',')}</span></div>`;
  }
  resumo+=`<div style="display:flex;justify-content:space-between;padding:10px 0 0;border-top:1px solid var(--color-border-secondary);margin-top:8px;font-weight:700;">Total<span>R$ ${total.toFixed(2).replace('.',',')}</span></div>`;
  document.getElementById("resumo-pedido").innerHTML=resumo;
  document.getElementById("modal-overlay").classList.remove("hidden");
}

function fecharModal(){document.getElementById("modal-overlay").classList.add("hidden");}
function fecharModalFora(e){if(e.target===document.getElementById("modal-overlay"))fecharModal();}

function selPag(el,pag){
  pagamento=pag;
  document.querySelectorAll(".pay-opt").forEach(x=>x.classList.remove("sel"));
  el.classList.add("sel");
}

function pegarLocalizacao(){
  const btn = document.getElementById("loc-btn");
  const status = document.getElementById("loc-status");
  btn.innerHTML='Obtendo...';
  if(!navigator.geolocation){ alert("Geolocalização não disponível."); return; }
  navigator.geolocation.getCurrentPosition(pos=>{
    coords={lat:pos.coords.latitude,lng:pos.coords.longitude};
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`)
      .then(r=>r.json())
      .then(d=>{
        document.getElementById("endereco").value = d.display_name||`${coords.lat}, ${coords.lng}`;
        status.style.display="block"; status.textContent="✓ Endereço preenchido";
      });
  });
}

function enviar(){
  const end = document.getElementById("endereco").value.trim();
  if(!pagamento){alert("Selecione a forma de pagamento.");return;}
  if(!end){alert("Informe o endereço de entrega.");return;}
  let txt="Olá, Super Japa! Gostaria de fazer o seguinte pedido:%0A%0A";
  let total=0;
  for(let id in carrinho){
    const it=carrinho[id]; total+=it.quantidade*it.preco;
    txt+=`*${it.quantidade}x* ${it.nome} - R$ ${(it.quantidade*it.preco).toFixed(2).replace('.',',')}%0A`;
  }
  txt+=`%0A*Total:* R$ ${total.toFixed(2).replace('.',',')}%0A*Pagamento:* ${pagamento}%0A*Endereço:* ${encodeURIComponent(end)}`;
  window.open(`https://wa.me/5522988303921?text=${txt}`,'_blank');
  fecharModal();
}

renderCats();
renderProdutos();

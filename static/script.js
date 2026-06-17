const produtos = [
  {id:1,cat:"Cervejas",nome:"Brahma Latão 473ml",preco:5.50,emoji:"🍺"},
  {id:2,cat:"Cervejas",nome:"Heineken Long Neck",preco:8.00,emoji:"🍺"},
  {id:3,cat:"Cervejas",nome:"Skol Beats Senses Lata",preco:7.00,emoji:"🍺"},
  {id:4,cat:"Destilados",nome:"Vodka Smirnoff 900ml",preco:40.00,emoji:"🍸"},
  {id:5,cat:"Destilados",nome:"Jack Daniel's Preto 1L",preco:160.00,emoji:"🥃"},
  {id:6,cat:"Energéticos",nome:"Red Bull Tradicional",preco:10.00,emoji:"⚡"},
  {id:7,cat:"Refrigerantes",nome:"Coca Cola 2L",preco:12.00,emoji:"🥤"},
  {id:8,cat:"Outros",nome:"Gelo de Coco Verde",preco:4.00,emoji:"🧊"},
  {id:9,cat:"Outros",nome:"Carvão Frigogil 2,5kg",preco:12.00,emoji:"🔥"},
];

const cats = ["Todos",...[...new Set(produtos.map(p=>p.cat))]];
let catAtiva = "Todos";
let carrinho = {};
let pagamento = "";
let coords = null;

function renderCats(){
  const el = document.getElementById("cats");
  el.innerHTML = cats.map(c=>`<button class="cat-btn${c===catAtiva?' active':''}" onclick="setcat('${c}')">${c}</button>`).join('');
}

function setcat(c){catAtiva=c;renderCats();renderProdutos();}

function renderProdutos(){
  const termo = document.getElementById("searchBar").value.toLowerCase();
  const container = document.getElementById("product-list");
  const catsFiltradas = catAtiva==="Todos" ? [...new Set(produtos.map(p=>p.cat))] : [catAtiva];
  let html = "";
  let total = 0;
  
  catsFiltradas.forEach(cat=>{
    const lista = produtos.filter(p=>p.cat===cat&&p.nome.toLowerCase().includes(termo));
    if(!lista.length) return;
    html += `<div class="section-title">${cat}</div><div class="grid">`;
    lista.forEach(p=>{
      const qtd = carrinho[p.id]?.quantidade||0;
      if(qtd>0) total++;
      html += `<div class="card">
        <div class="card-emoji">${p.emoji}</div>
        <h3>${p.nome}</h3>
        <div class="price">R$ ${p.preco.toFixed(2).replace('.',',')}</div>
        <div class="controls">
          <button onclick="alt(${p.id},-1)" aria-label="Remover">−</button>
          <span class="qty${qtd>0?' has-qty':''}" id="qtd-${p.id}">${qtd}</span>
          <button onclick="alt(${p.id},1)" aria-label="Adicionar">+</button>
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  
  if(!html) html = `<div class="empty"><i class="ti ti-search-off" style="font-size:32px;display:block;margin-bottom:12px"></i>Nenhum produto encontrado</div>`;
  container.innerHTML = html;
  atualizarCarrinho();
}

function filtrar(){renderProdutos();}

function alt(id,delta){
  const p = produtos.find(x=>x.id===id);
  if(!carrinho[id]) carrinho[id]={nome:p.nome,preco:p.preco,quantidade:0};
  carrinho[id].quantidade += delta;
  if(carrinho[id].quantidade<=0) delete carrinho[id];
  const span = document.getElementById(`qtd-${id}`);
  if(span){
    const qtd = carrinho[id]?.quantidade||0;
    span.textContent = qtd;
    span.className = 'qty'+(qtd>0?' has-qty':'');
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
    document.getElementById("cart-items-count").textContent=`${itens} ${itens===1?'item':'itens'} no pedido`;
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
  resumo+=`<div style="display:flex;justify-content:space-between;padding:10px 0 0;border-top:1px solid var(--color-border-secondary);margin-top:8px;font-weight:700;color:var(--color-text-primary)">Total<span>R$ ${total.toFixed(2).replace('.',',')}</span></div>`;
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
  btn.innerHTML='<i class="ti ti-loader" aria-hidden="true"></i> Obtendo localização...';
  status.style.display="none";
  if(!navigator.geolocation){
    btn.innerHTML='<i class="ti ti-current-location"></i> Usar minha localização atual';
    status.style.display="block";
    status.style.color="var(--color-text-danger)";
    status.textContent="Geolocalização não disponível neste navegador.";
    return;
  }
  navigator.geolocation.getCurrentPosition(pos=>{
    coords={lat:pos.coords.latitude,lng:pos.coords.longitude};
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`)
      .then(r=>r.json())
      .then(d=>{
        const end = d.display_name||`${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
        document.getElementById("endereco").value=end;
        btn.innerHTML='<i class="ti ti-check" aria-hidden="true"></i> Localização obtida';
        status.style.display="block";
        status.style.color="#1a7a3c";
        status.textContent="✓ Endereço preenchido automaticamente";
      }).catch(()=>{
        document.getElementById("endereco").value=`${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`;
        btn.innerHTML='<i class="ti ti-check"></i> Localização obtida';
        status.style.display="block";status.style.color="#1a7a3c";
        status.textContent="✓ Coordenadas preenchidas";
      });
  },()=>{
    btn.innerHTML='<i class="ti ti-current-location"></i> Usar minha localização atual';
    status.style.display="block";status.style.color="var(--color-text-danger)";
    status.textContent="Permissão de localização negada.";
  });
}

function enviar(){
  const end = document.getElementById("endereco").value.trim();
  if(!pagamento){alert("Selecione a forma de pagamento.");return;}
  if(!end){alert("Informe o endereço de entrega.");return;}
  const tel="5522988303921";
  let txt="Olá, Super Japa! Gostaria de fazer o seguinte pedido:%0A%0A";
  let total=0;
  for(let id in carrinho){
    const it=carrinho[id];const sub=it.quantidade*it.preco;total+=sub;
    txt+=`*${it.quantidade}x* ${it.nome} - R$ ${sub.toFixed(2).replace('.',',')}%0A`;
  }
  txt+=`%0A*Total: R$ ${total.toFixed(2).replace('.',',')}*`;
  txt+=`%0A*Pagamento:* ${pagamento}`;
  txt+=`%0A*Endereço:* ${encodeURIComponent(end)}`;
  txt+=`%0A%0AAguardo confirmação do pedido!`;
  window.open(`https://wa.me/${tel}?text=${txt}`,'_blank');
  fecharModal();
}

// Inicializa a aplicação
renderCats();
renderProdutos();

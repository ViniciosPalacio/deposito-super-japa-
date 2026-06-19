"""
Script para baixar imagens usando Google Custom Search API
Salva cada imagem com o ID do produto: 1.jpg, 2.jpg, 27.jpg ...

CONFIGURAÇÃO:
1. API Key:         https://console.cloud.google.com/apis/credentials
   Ative a API:    https://console.cloud.google.com/apis/library/customsearch.googleapis.com
2. Search Engine:  https://programmablesearchengine.google.com/
   → Crie um engine → em "Edit" ative "Search the entire web" → copie o ID
3. pip install requests
4. python baixar_imagens.py
"""

import os, re, time, requests

# ============================================================
#  ⚙️  CONFIGURAÇÕES — edite aqui
# ============================================================
API_KEY          = "SUA_API_KEY_AQUI"
SEARCH_ENGINE_ID = "SEU_SEARCH_ENGINE_ID_AQUI"

ARQUIVO_PRODUTOS = "produtos_busca.txt"  # formato: id|termo de busca
PASTA_SAIDA      = "static/assets"       # pasta do seu site
MAX_TENTATIVAS   = 3                     # imagens para tentar por produto
PAUSA_SEGUNDOS   = 1.0
# ============================================================


def buscar_imagens(termo, api_key, cx, n=3):
    resp = requests.get(
        "https://www.googleapis.com/customsearch/v1",
        params={"key": api_key, "cx": cx, "q": termo,
                "searchType": "image", "num": n, "imgSize": "large", "safe": "active"},
        timeout=10
    )
    resp.raise_for_status()
    return [item["link"] for item in resp.json().get("items", [])]


def baixar_imagem(url, caminho_base):
    try:
        resp = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=15, stream=True)
        resp.raise_for_status()
        ct = resp.headers.get("Content-Type", "")
        if "image" not in ct:
            return False
        ext = ".png" if "png" in ct else ".webp" if "webp" in ct else ".jpg"
        with open(caminho_base + ext, "wb") as f:
            for chunk in resp.iter_content(8192):
                f.write(chunk)
        return caminho_base + ext
    except Exception as e:
        print(f"      ⚠️  {e}")
        return False


def main():
    if "SUA_API" in API_KEY or "SEU_SEARCH" in SEARCH_ENGINE_ID:
        print("❌  Preencha API_KEY e SEARCH_ENGINE_ID no topo do script.")
        return

    if not os.path.exists(ARQUIVO_PRODUTOS):
        print(f"❌  Arquivo '{ARQUIVO_PRODUTOS}' não encontrado.")
        return

    with open(ARQUIVO_PRODUTOS, encoding="utf-8") as f:
        linhas = [l.strip() for l in f if l.strip() and "|" in l]

    os.makedirs(PASTA_SAIDA, exist_ok=True)

    print(f"\n🍺  {len(linhas)} produtos para baixar...\n")
    sucesso, falhas = 0, []

    for i, linha in enumerate(linhas, 1):
        prod_id, termo = linha.split("|", 1)
        prod_id = prod_id.strip()
        termo   = termo.strip()
        base    = os.path.join(PASTA_SAIDA, prod_id)

        # Pula se já existe
        if any(os.path.exists(base + e) for e in [".jpg", ".png", ".webp"]):
            print(f"[{i:03d}/{len(linhas)}] ✅  {prod_id}.* já existe, pulando.")
            sucesso += 1
            continue

        print(f"[{i:03d}/{len(linhas)}] 🔍  ID {prod_id} — {termo}")

        try:
            urls = buscar_imagens(termo, API_KEY, SEARCH_ENGINE_ID, MAX_TENTATIVAS)
        except requests.HTTPError as e:
            print(f"      ❌  Erro na API: {e}")
            falhas.append(f"{prod_id} | {termo}")
            time.sleep(PAUSA_SEGUNDOS)
            continue

        baixou = False
        for url in urls:
            resultado = baixar_imagem(url, base)
            if resultado:
                print(f"      ✅  Salvo como {os.path.basename(resultado)}")
                sucesso += 1
                baixou = True
                break

        if not baixou:
            print(f"      ❌  Nenhuma imagem disponível.")
            falhas.append(f"{prod_id} | {termo}")

        time.sleep(PAUSA_SEGUNDOS)

    print(f"\n{'='*55}")
    print(f"✅  Sucesso: {sucesso}/{len(linhas)}")
    if falhas:
        print(f"❌  Falhas ({len(falhas)}):")
        for f in falhas:
            print(f"    - {f}")
        print("\n💡  Tente editar o termo de busca no produtos_busca.txt")
        print("    e rode o script de novo — ele pula os já baixados.")
    print(f"\n📁  Imagens em: ./{PASTA_SAIDA}/")


if __name__ == "__main__":
    main()

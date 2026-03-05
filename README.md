# ₿ Bitcoin Lottery

Uma loteria de código aberto que tenta resolver os [Bitcoin Puzzles](https://privatekeys.pw/puzzles/bitcoin-puzzle-tx), varrendo o espaço de chaves privadas em busca do endereço alvo e sua recompensa.

> **100% no navegador** — nenhuma chave ou dado é enviado a servidores. Todo o processamento usa a CPU do próprio usuário.

---

## 🎯 Puzzles Disponíveis

| Puzzle | Endereço | Recompensa | Intervalo |
|---|---|---|---|
| **#20** *(resolvido — teste)* | `1HsMJxNiV7TLxmoF6uJNkydxPFDog4NQum` | — | `80000` → `fffff` |
| **#71** *(padrão)* | `1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU` | 7.1 BTC | `400000000000000000` → `7fffffffffffffffff` |
| **#72** | `1JTK7s9YVYywfm5XUH7RNhHJH1LshCaRFR` | 7.2 BTC | `800000000000000000` → `ffffffffffffffffff` |
| **#73** | `12VVRNPi4SJqUTsp6FmqDqY5sGosDtysn4` | 7.3 BTC | `1000000000000000000` → `1ffffffffffffffffff` |
| **#74** | `1FWGcVDK3JGzCC3WtkYetULPszMaK2Jksv` | 7.4 BTC | `2000000000000000000` → `3ffffffffffffffffff` |

---

## 🛠️ Stack

- **React 18** + **TypeScript 5**
- **Vite 7** (bundler)
- **bitcoinjs-lib** — geração de endereços P2PKH
- **tiny-secp256k1** — operações de curva elíptica secp256k1
- **ecpair** — manipulação de pares de chaves (WIF export)
- **ESLint 9** + **typescript-eslint 8** (flat config)

---

## 📦 Instalação

**Pré-requisitos:** Node.js 18+ e npm 9+

```bash
cd bitcoin-lottery
npm install
```

---

## 🚀 Como Rodar

| Comando | O que faz |
|---|---|
| `npm run dev` | Dev com hot reload → [localhost:5173/bitcoin-lottery](http://localhost:5173/bitcoin-lottery) |
| `npm start` | Build + preview → [localhost:4173/bitcoin-lottery](http://localhost:4173/bitcoin-lottery) |
| `npm run build` | Apenas gera o bundle em `dist/` |
| `npm run preview` | Serve um build existente sem rebuildar |
| `npm run lint` | Verifica o código com ESLint 9 |

---

## 🌍 Deploy

### Cloudflare Pages
O projeto detecta automaticamente o ambiente via `CF_PAGES=1` e ajusta o `base` path para `/` (raiz). Basta conectar o repositório no Cloudflare Pages — o deploy é automático em cada push.

### GitHub Pages
```bash
npm run deploy
```
Executa o build e publica via `gh-pages`. O `base` path é `/bitcoin-lottery`.

---

## 📁 Estrutura do Projeto

```
bitcoin-lottery/
├── src/
│   ├── App.tsx              # UI principal + lógica do jogo
│   ├── App.css              # Estilos do app (glassmorphism, animações)
│   ├── index.css            # Reset global + variáveis CSS + Google Fonts
│   ├── bitcoin.ts           # Funções Bitcoin: endereço, busca, WIF
│   ├── main.tsx             # Entry point do React
│   ├── assets/
│   │   └── bitcoin.png      # Ícone do Bitcoin
│   └── languages/
│       ├── english.ts       # Textos em inglês
│       └── portuguese.ts    # Textos em português
├── education.html           # Página educativa (EN): Kangaroo method
├── education-pt.html        # Página educativa (PT)
├── eslint.config.js         # ESLint 9 flat config
├── vite.config.ts           # Configuração Vite (base path automático)
└── package.json
```

---

## 🔑 Como Funciona o Código

### Modos de Busca

**Modo Normal** — ponto aleatório + 50.000 sequencial:
```
1. Sorteia um ponto de partida aleatório dentro do range
2. Testa as 50.000 chaves seguintes, incrementando sequencialmente
3. Exibe o resultado e aguarda novo clique
```

**Modo Infinito** — 100% aleatório em loop contínuo:
```
1. Ativa o toggle "Infinito" ao lado do botão Roll
2. A cada lote: gera 1.000 chaves completamente aleatórias via window.crypto
3. Continua automaticamente até encontrar a chave ou clicar "Stop"
```

### `src/bitcoin.ts`

| Função | Descrição |
|---|---|
| `generate_address_from_priv(key)` | Deriva o endereço Bitcoin P2PKH a partir de uma chave privada hex |
| `random32Byte()` | Gera 32 bytes aleatórios via `window.crypto` (CSPRNG) |
| `random32ByteRange(min, max)` | Sorteia uma chave aleatória dentro de um intervalo hex |
| `findPrivateKey(start, address)` | Itera 50.000 chaves sequencialmente a partir de `start` |
| `findOneRandomBatch(address, min, max, n)` | Testa `n` chaves 100% aleatórias (modo infinito) |
| `toWIF(privKey)` | Converte chave privada hex para WIF (importável em carteiras) |

---

## 🔒 Segurança

- Todo processamento é feito **100% no browser** — zero requisições a servidores
- A aleatoriedade usa `window.crypto.getRandomValues()` (CSPRNG do browser)
- **Vulnerabilidades conhecidas (build-time only):** 6 de severidade *low*, todas transitivas via `vite-plugin-node-polyfills → elliptic`. Não afetam o bundle de produção

> ⚠️ **Se você encontrar a chave:** NÃO faça uma transação direta! Leia sobre o método Kangaroo antes — bots monitoram a mempool e podem roubar os BTC. Consulte as páginas `education.html` / `education-pt.html`.

---

## 🌐 Multi-idioma

Interface em **inglês** e **português**. Detectado automaticamente por `navigator.language`, ou selecionável pelos botões 🇺🇸 / 🇧🇷 no topo.

---

## 📜 Licença

MIT

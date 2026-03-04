# ₿ Bitcoin Lottery

Uma loteria de código aberto que tenta resolver o [Bitcoin Puzzle #71](https://privatekeys.pw/puzzles/bitcoin-puzzle-tx), varrendo o espaço de chaves privadas em busca do endereço alvo e sua recompensa de **7.1 BTC**.

> **Como funciona:** A cada tentativa ("roll"), o app sorteia um ponto aleatório dentro do intervalo válido do puzzle e testa as 50.000 chaves privadas seguintes. Se alguma gerar o endereço alvo, você ganhou.

---

## 🎯 Puzzle Atual

| Campo | Valor |
|---|---|
| **Puzzle** | #71 |
| **Endereço alvo** | `1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU` |
| **Recompensa** | 7.1 BTC |
| **Intervalo de busca** | `400000000000000000` → `7fffffffffffffffff` |
| **Total de possibilidades** | ~36,9 quintilhões de chaves |

---

## 🛠️ Stack

- **React 18** + **TypeScript**
- **Vite 7** (bundler)
- **bitcoinjs-lib** — geração de endereços P2PKH
- **tiny-secp256k1** — operações de curva elíptica secp256k1
- **ecpair** — manipulação de pares de chaves (WIF export)
- **ESLint 9** + **typescript-eslint 8** (flat config)

---

## 📦 Instalação

**Pré-requisitos:** Node.js 18+ e npm 9+

```bash
# 1. Clone o repositório
cd bitcoin-lottery

# 2. Instale as dependências
npm install
```

---

## 🚀 Como Rodar

### Desenvolvimento (com hot reload)

```bash
npm run dev
```

Acesse em: [http://localhost:5173/bitcoin-lottery](http://localhost:5173/bitcoin-lottery)

### Build + Servidor de Produção

```bash
npm start
```

Faz o build e serve localmente em: [http://localhost:4173/bitcoin-lottery](http://localhost:4173/bitcoin-lottery)

### Apenas Build

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`.

### Pré-visualizar o Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🌍 Deploy (GitHub Pages)

```bash
npm run deploy
```

O script executa o build e publica automaticamente via `gh-pages` na branch `gh-pages`.

> **Configuração:** a propriedade `homepage` no `package.json` define a URL base. Altere se necessário antes do deploy.

---

## 📁 Estrutura do Projeto

```
bitcoin-lottery/
├── src/
│   ├── App.tsx              # Componente principal (UI + lógica do jogo)
│   ├── bitcoin.ts           # Funções Bitcoin: geração de endereço, busca de chave, WIF
│   ├── main.tsx             # Entry point do React
│   ├── assets/
│   │   └── bitcoin.png      # Ícone do Bitcoin
│   └── languages/
│       ├── english.ts       # Textos em inglês
│       └── portuguese.ts    # Textos em português
├── public/                  # Arquivos estáticos
├── education.html           # Página educativa (EN): Kangaroo method e o que fazer se achar
├── education-pt.html        # Página educativa (PT)
├── eslint.config.js         # Configuração ESLint 9 (flat config)
├── vite.config.ts           # Configuração Vite
└── package.json
```

---

## 🔑 Como Funciona o Código

### `src/bitcoin.ts`

| Função | Descrição |
|---|---|
| `generate_address_from_priv(key)` | Deriva o endereço Bitcoin P2PKH (comprimido) a partir de uma chave privada hex |
| `random32Byte()` | Gera 32 bytes aleatórios criptograficamente seguros via `window.crypto` |
| `random32ByteRange(min, max)` | Sorteia uma chave aleatória dentro de um intervalo hex |
| `findPrivateKey(start, address)` | Itera 50.000 chaves a partir de `start`, retorna a chave se encontrar o `address` |
| `toWIF(privKey)` | Converte uma chave privada hex para o formato WIF (importável em carteiras) |

---

## 🔒 Segurança

- Todo processamento é feito **100% no navegador do usuário** — nenhuma chave ou dado é enviado a servidores
- A aleatoriedade usa `window.crypto.getRandomValues()` (CSPRNG do browser)
- **Vulnerabilidades conhecidas (build-time only):** 6 de severidade *low*, todas transitivas via `vite-plugin-node-polyfills` → `elliptic`. Não afetam o bundle final em produção

---

## 🌐 Multi-idioma

A interface suporta **inglês** e **português**. O idioma é detectado automaticamente via `navigator.language`, ou pode ser selecionado manualmente pelos links no topo da página (`?lang=en` ou `?lang=pt`).

---

## 📜 Licença

MIT

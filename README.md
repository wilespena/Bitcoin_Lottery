# ₿ Bitcoin Lottery

Uma loteria de código aberto que tenta resolver os [Bitcoin Puzzles](https://privatekeys.pw/puzzles/bitcoin-puzzle-tx), varrendo o espaço de chaves privadas em busca do endereço alvo e sua recompensa.

> **100% no navegador** — toda a geração de chaves, derivação de endereços e assinatura de transações acontece localmente, na CPU do seu dispositivo. Nenhuma chave privada sai do navegador.
>
> **O que sai do navegador:** apenas *endereços* Bitcoin (nunca chaves), enviados à API pública do [mempool.space](https://mempool.space) para consultar saldo, UTXOs e taxas. No TxBuilder isso acontece automaticamente ao digitar a chave; no Key Anatomy só quando você clica em "Consultar saldo". Não há backend, banco de dados, analytics ou rastreamento.

---

## ✨ Novidades e Recursos
- **UI Moderna (Glassmorphism):** Design refinado com drop-blur, dark-mode nativo e componentes estilizados para melhor visibilidade em longa bateria de testes.
- **Saldo ao Vivo (Live Balance):** O App se conecta à API da `mempool.space` e mostra quantos BTC existem no exato momento na carteira do puzzle. Ignorando automaticamente puzzles já resolvidos (0 SATS).
- **Custom Wallet Search (Busca Customizada):** Adicionado suporte para você inserir *qualquer address* Bitcoin e definir o range hex manualmente para realizar as buscas.
- **Anatomia da Chave Bitcoin (`key-anatomy.html`):** Laboratório criptográfico interativo que demonstra em tempo real o pipeline completo (`Private Key Hex` ↔ `WIF` → `Curva Elíptica SECP256k1` → `Public Key` → `SHA-256` → `RIPEMD-160 / Hash160` ↔ `Endereço Legacy Base58Check`), explicando visualmente o que é reversível e por que a Chave Pública fica protegida até o momento do gasto.
- **TxBuilder In-Browser:** Se você achar a chave, o app possui um `TxBuilder` robusto e nativo capaz de gerar uma transação RAW.
- **Integração MARA Slipstream:** O TxBuilder gera o HEX assinado e você mesmo o envia no portal oficial do Slipstream (MARA), evitando robôs de mempool pública. O app não envia nada à MARA por você.

---

## 🎯 Puzzles Disponíveis

| Puzzle | Endereço | Recompensa (Live) | Intervalo Padrão |
|---|---|---|---|
| **#20** *(resolvido)* | `1HsMJxNiV7TLxmoF6uJNkydxPFDog4NQum` | — | `80` → `ff` |
| **#71** | `1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU` | ~ 7.1 BTC | `40000..00` → `7ffff..ff` |
| **#72** | `1JTK7s9YVYywfm5XUH7RNhHJH1LshCaRFR` | ~ 7.2 BTC | `80000..00` → `fffff..ff` |
| **#73** | `12VVRNPi4SJqUTsp6FmqDqY5sGosDtysn4` | ~ 7.3 BTC | `10000..00` → `1ffff..ff` |
| **#74** | `1FWGcVDK3JGzCC3WtkYetULPszMaK2Jksv` | ~ 7.4 BTC | `20000..00` → `3ffff..ff` |
| **Custom** | `(A sua escolha)` | `(Consulta)` | `Customizável` |

---

## 🛠️ Stack

- **React 18** + **TypeScript 5**
- **Vite 7** (bundler)
- **bitcoinjs-lib** — transações P2PKH, geração e scriptSig handling
- **tiny-secp256k1** — operações de curva elíptica ultra-rápidas
- **mempool.space API** — saldos on-chain e tarifas de mineração
- **MARA Slipstream** — Montagem de transações nativas otimizadas para a piscina de mineração profunda

---

## 🚀 Como Rodar

| Comando | O que faz |
|---|---|
| `npm run dev` | Dev com hot reload → [localhost:5173/](http://localhost:5173/) |
| `npm start` | Build + preview → [localhost:4173/](http://localhost:4173/) |
| `npm run build` | Apenas gera o bundle em `dist/` |

**Site oficial:** [btc-lottery.pages.dev](https://btc-lottery.pages.dev/) (Cloudflare Pages).

Para hospedar sua própria cópia no Cloudflare Pages: conecte o repositório, use `npm run build` como comando de build e `dist` como pasta de saída. O Cloudflare define `CF_PAGES=1` e o Vite passa a servir da raiz `/`. No GitHub Pages o base path vira `/<nome-do-repo>/` automaticamente; para outro caminho use `VITE_BASE=/caminho/ npm run build`.

---

## ⚙️ Modos de Busca da Loteria

**1. Modo Manual (Dice / Single Batch)**
Sorteia um ponto de partida aleatório e testa 50.000 chaves de forma sequencial parando ao fim. Ideal para testes de calor.

**2. Modo ∞ Aleatório (Infinite Random)** 
Testa Lotes de 1.000 chaves de forma 100% caótica e estocástica sem parar. Máxima dispersão no Range.

**3. Modo ∞ Sequencial (Infinite Sequential)** 
Sorteia um Seedpoint aleatório gigantesco e começa a varrer chaves em sequência matemática ininterruptamente. Permite ao usuário editar o "Batch Size" se o PC aguentar.

---

## 🛡️ Como Funciona o TxBuilder e Resgate Seguro (MARA)

Se você der a sorte grande e a interface estourar o modal de **SUCCESS**:
1. O App nunca fará requisições usando a sua chave.
2. Você pode clicar no botão de `⚡ Build Transaction` que abrirá nosso **TxBuilder local**.
3. O TxBuilder fará o fetch do seu próprio saldo, UTXO e Fee.
4. **Calculo de Troco (Change Addr):** Seguindo o padrão Bitcoin (Electrum-like), a engine construirá **2 Outputs**, enviando exatamente os Satoshis para sua conta fria, e mandando o troco exato (descontando a taxa) de volta para você.
5. Em seguida, ele lhe entregará o Buffer (HEX Code) Limpo. Você mesmo fará a submissão colando o código no portal da oficial da corretora **Slipstream da Marathon Digital (MARA)**, protegendo seus fundos contra `Fee-Sniping` (roubo de mempool).

> ⚠️ Leia obrigatoriamente a página "Education" (O que é e cuidados) se for novato. Bots monitoram redes abertas.

---

## 🌐 Multi-idioma
Interface construída via arrays em **Inglês**, **Português**, e **Espanhol**.

---
## 🔒 Segurança (leia antes de usar com fundos reais)

- **Chaves nunca vão para a URL, cookies ou localStorage.** A passagem da chave encontrada para o TxBuilder usa `sessionStorage` na mesma aba e é apagada imediatamente ao carregar.
- **Valor do UTXO travado:** o campo "UTXO total" fica somente leitura após a consulta ao mempool.space. No Bitcoin, `entrada − saídas = taxa do minerador`; um valor digitado errado viraria taxa.
- **Teto de taxa:** o builder recusa taxas acima de 2000 sat/vB, acima de 10% da entrada ou acima de 0,005 BTC.
- **Content-Security-Policy** no build: scripts só da própria origem e conexões só para `mempool.space`.
- **Confira sempre** o HEX gerado em um decodificador independente antes de enviar. O valor do UTXO vem de uma única API pública; verifique no explorador antes de assinar.
- Rode a partir de um build local (`npm run build`) ou da sua própria hospedagem. Não cole chaves em cópias do site hospedadas por terceiros.

Encontrou uma falha? Abra uma issue sem incluir chaves privadas.

---
## 📜 Licença
MIT — veja o arquivo [LICENSE](LICENSE).

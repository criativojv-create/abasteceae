# Auditoria — Livro de Regras × LP AbasteceAê

Data: 17/11/2026 · Página: `index.html` (fiel ao Figma) · Medido por script (`tools/auditoria.js`) em 1920px e 375px, mais o cálculo de contraste dos pares de cor.
Nada foi alterado na página. Este documento só aponta o que foi encontrado.

Legenda: 🔴 problema real de leitura, acessibilidade ou técnica · 🟡 diverge do Livro, mas é escolha de design do Figma (você decide)

---

## 1. Tamanhos de fonte

| Regra | Medido | Situação |
|---|---|---|
| **TIP-10** nada abaixo de 14px; leitura ≥ 16px | Desktop: **~75 textos abaixo de 14px** (9,5 a 13,4px): tags dos números, horários "2 min", lista "Importando vendas", chat inteiro (11,3px), notas do diagnóstico (11,5px), FAQ respostas (13,4px), timeline (11,5 e 13,4px), legendas da faixa azul (12,5px) | 🔴 |
| TIP-10 no celular | **126 textos abaixo de 14px**; os blocos que reduzi para caber (notificações, órbita, chat) chegam a **8px** (chips da órbita) e 9,8px (horários) | 🔴 |
| **TIP-02** um estilo por nível | H2 aparece em **6 tamanhos**: 48 · 53 · 56 · 70 · 70,2 · 70,9px. H3 em 30 e 30,5px, um com peso 400 e outro 600. A página tem **47 tamanhos de fonte diferentes** | 🔴 |
| TIP-02 / RSP-01 escala | Livro: H1 64 · H2 48 · H3 32 · H4 24 · corpo 16 · rótulo 14. Página: H1 81,1 · H2 até 70,9 · corpo 17,9 e 22px | 🟡 |
| **TIP-03** títulos grandes leves (300) | 28 títulos ≥ 32px em 600 ou 700: "Então por que sobra tão pouco?", "Some do estoque.", "R$ 5.000", "A gente nasceu…", "14 dias de teste…", "Ainda em dúvida?", pílulas de segmento | 🟡 |
| **TIP-01** uma família | 3 famílias: Instrument Sans, Inter e Sora (só no logo) | 🟡 |
| **TIP-04** rótulo sem caixa alta | CMV · POR MÊS · POR ANO · DIAGNÓSTICO · GRÁTIS · SEM CARTÃO · POR MÊS · botões em maiúscula | 🟡 |

## 2. Entrelinha (TIP-11: 100% em uma linha, 140–150% em várias, ~105% em display)

| Onde | Medido | Livro |
|---|---|---|
| H1 81px (3 linhas) e H2 de 70px | **120%** | ~105% |
| Textos de 22px (seções 2 e 4) | **130%** | 140–150% |
| Corpo 17,9px, FAQ, timeline, diagnóstico, CTA final | **160%** | 140–150% |
| Card "A gente monta com você" 22,4px | 155% | 140–150% |
| "POR MÊS" na faixa azul | 95% | 100% |
| Pílulas de segmento (uma linha) | 160% | 100% |

## 3. Espaçamentos

**ESP-01 — escala única** (4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160): 🔴 quase nenhum valor do Figma está na escala. Gaps de 14,69 · 13,49 · 21,2 · 25,38 · 27,62; paddings de 23,08 · 34 · 47,71 · 70; margens de 6,55 · 7,36 · 9,56.

**ESP-02 — ritmo vertical** (respiro de seção 112 · título → conteúdo 48 · título → apoio 16):

| Seção | Respiro no topo | Título → conteúdo |
|---|---|---|
| Hero | 78 (menu) | — |
| O dinheiro não some | 100 | título → texto 32 |
| A resposta já está… | 130 | título → apoio **33** (16) · apoio → diagrama 154 |
| Simples de começar | 122 | título → cards **65** (48) |
| Antes de assinar | 109 | apoio → lista **163** (48) 🔴 vão grande |
| Faixa R$ 5.000 | 86 | sobra 226 embaixo |
| A gente nasceu | 150 | — |
| Conhece outro dono | 140 | apoio → cards 60 |
| Ainda em dúvida | 130 | título → lista **41** (48) |
| CTA final | 71 | — |

Resultado: respiros de seção de 71 a 150px no desktop (Livro: 112 fixo). No celular, 56px fixo (Livro: 64 pelo RSP-01, ou 88 pelo MOB-18; as duas regras do Livro divergem entre si).

**CRD-03 — padding de card:** 🔴 card de indicação com 47,7px e bloco WhatsApp com 70px (o Livro proíbe 48 a 64px). Cards de números: 23px (≈ 24, ok).

## 4. Botões e controles

| Regra | Medido |
|---|---|
| **CTL-02** só alturas 28 · 32 · 40 · 48 | 🔴 59 (menu) · **86** (hero) · 66 (WhatsApp e diagnóstico) · 57 (teste e CTA final) · 75 (indicação) · 69 (FAQ). São **6 alturas** e nenhuma da escala |
| **CTL-09** toque ≥ 40px no celular | ✅ todos passam (menor: 44px, botão do menu) |
| **CTL-10** botão do tamanho do texto | 🟡 hero com 466 × 86px é bem maior que o texto |
| **FOR-06** mesma forma lado a lado | 🟡 dois estilos de botão: pílula dupla (com seta separada) e pílula com gradiente e brilho |

## 5. Raios e profundidade

- **FOR-03** (card até 20, escala 4 · 8 · 12 · 16 · 20 · 24 · pílula): 🟡 raios de **74** (bloco WhatsApp), **44,8** (cards "Simples"), **42,4** (indicação), 38,5 (menu), 32 (diagnóstico) e 30,8 (chat). A página usa **23 raios diferentes**.
- **FOR-01** (proibido sombra): 🟡 **98 elementos com sombra** ou drop-shadow.
- **COR-15** (degradê pontual): 🟡 degradê em todos os botões, tags, pílulas, faixa azul e títulos em degradê.

## 6. Contraste (A11-01: 4,5:1 texto normal, 3:1 texto ≥ 24px)

| Par | Contraste | |
|---|---|---|
| Faixa azul: texto branco 72% sobre o azul claro do topo | **1,83:1** | 🔴 |
| Faixa azul: legendas branco 66% ("CMV real hoje") | **2,44:1** | 🔴 |
| "A conta" (#1f4fcc sobre o chip azul) | **1,32:1** | 🔴 praticamente invisível |
| Letra "A" verde no avatar azul do chat | 1,19:1 | 🔴 |
| Horários "2 min", chips da órbita, nota "A tecnologia por trás…" (cinza 46%) | **2,97:1** | 🔴 |
| "Abastece" do logo (#9b9b9b) | 2,61:1 | 🔴 |
| Texto branco nos botões, lado claro (#3d7bff / #4a86ff) | 3,84 e 3,42:1 | 🔴 (texto de 14–16px precisa de 4,5) |
| Azul #3d7bff em títulos grandes sobre fundo azul claro | 3,08:1 | ✅ (título grande, mínimo 3) |
| Notas do card diagnóstico (cinza 62%) | 4,52:1 | ✅ no limite |

## 7. Celular

- **HER-05 / TXT-02** H1 em até 2 linhas: 🔴 o H1 tem **4 linhas** no celular (3 no desktop).
- **RSP-01** H2 de 32px no celular: ✅ (32,3px). H1 de 40px: ✅ (39,4px).
- **RSP-04** até 3 linhas: 🔴 "A gente nasceu pra parar o dinheiro…" com 4 linhas.
- **MOB-18** margem lateral de 20px: ✅.
- **IMG-04** mockup refeito em HTML, nunca encolhido: 🔴 notificações, órbita e chat foram reduzidos (zoom) para caber, o que gera os textos de 8 a 12px.

## 8. Texto e copy (fora do pedido, mas o Livro cobra)

- **CPY-15** português: "Sua **Negocio**" (Seu Negócio), "Prejuizo", "Duvidas", "DIAGNOSTICO" sem acento; "pra" e "pro" (o Livro pede "para").
- **TXT-06** nada provisório: "SUBSTITUIR · foto do time / dono de pizzaria · 640 × 760" e a faixa de 5 retângulos cinza.
- **TXT-08 / HER-04** um CTA por área de visão: "DIAGNOSTICO GRATUITO" no menu e no hero, na mesma tela.
- **CPY-06** sem prazo relâmpago: "Resposta em até 24h" e "24h é o prazo".
- **CPS-14** número com fonte: R$ 5.000, R$ 60.000, 38,4%, 12 kg precisam vir do cliente.
- "Indique um restaurante que fechar" parece frase incompleta.

---

## Prioridade sugerida

1. **Contraste na faixa azul, nos chips e nos botões** (A11-01): quem lê não enxerga.
2. **Piso de 14px** em notas, horários, chat, FAQ e timeline, e parar de encolher mockups no celular (TIP-10, IMG-04).
3. **Escala tipográfica** de H2/H3 unificada e entrelinhas 140–150% no corpo (TIP-02, TIP-11).
4. **H1 em 2 linhas** no celular e no desktop (HER-05).
5. **Ritmo vertical**: respiro de seção fixo e título → conteúdo 48 (ESP-02), com destaque para o vão de 163px no diagnóstico.
6. **Botões em 48px**, um estilo só (CTL-02, FOR-06).
7. Ortografia e placeholders (CPY-15, TXT-06).
8. Itens 🟡 de direção (sombra, raios grandes, degradê, pesos 600–700, 3 fontes): pedem decisão sua, porque mudam a cara do Figma.

## Regras conferidas
TIP-01, TIP-02, TIP-03, TIP-04, TIP-10, TIP-11, TIP-13 (parcial), ESP-01, ESP-02, CRD-03, CTL-02, CTL-09, CTL-10, FOR-01, FOR-03, FOR-06, COR-15, A11-01, HER-05, TXT-02, TXT-06, TXT-08, RSP-01, RSP-04, MOB-18, IMG-04, CPY-06, CPY-15, CPS-14.
Fora desta rodada (não são espaçamento nem tipografia): SEO, performance, segurança, medição, legal e movimento.


---

# Rodada 2: correções aplicadas (17/11/2026)

A página foi reescrita com tokens (`site.css`), sem Tailwind e sem CDN de CSS. A versão fiel ao Figma ficou guardada em `figma-fiel.html` + `figma-fiel.css`.
Medido de novo por script em 1440px e 375px.

| Item | Antes | Depois |
|---|---|---|
| Textos abaixo de 14px (TIP-10) | ~75 desktop · 126 celular (mínimo 8px) | **0 · 0** |
| Tamanhos de fonte diferentes | 47 | **11** (14 · 15 · 16 · 18 · 20 · 24 · 32 · 48 · 64 · 96 + 22 do logo) |
| Escala TIP-02 / RSP-01 | H2 em 6 tamanhos | H1 64→56→40 · H2 48→40→32 · H3 32→28→24 · H4 24 · H5 20 · lead 18 · corpo 16 · rótulo 14 |
| Títulos em 600/700 (TIP-03) | 28 | **0**: títulos em 300, destaque só pela cor |
| Famílias (TIP-01) | 3 | **Inter** (a Sora fica só no logotipo) |
| Entrelinha (TIP-11) | 120–160% | Títulos 105–110%, texto 150%, rótulos de uma linha 100% |
| Respiro de seção (ESP-02) | 71 a 150px | **112** desktop · 96 tablet · 64 celular |
| Título → apoio / → conteúdo | 33 / 41 a 163px | **16 / 48** em todas as seções |
| Escala de espaço (ESP-01) | valores quebrados | só 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 112 |
| Padding de card (CRD-03) | 47 e 70px | 24 (16 no celular); painel WhatsApp 64 → 40 → 16 |
| Alturas de botão (CTL-02) | 6 alturas (57 a 86) | **48** (itens do menu 40) |
| Estilos de botão (FOR-06) | 2 estilos com degradê | primário sólido + secundário tingido (COR-34) |
| Raios (FOR-03) | 23 raios, até 74px | **12 · 16 · 20 · 24 · pílula** |
| Sombras (FOR-01) | 98 elementos | **0** |
| Degradês (COR-15) | botões, tags, pílulas, faixa, títulos | só nas artes de fundo e nos espaços de foto (COR-09) |
| Caixa alta (TIP-04) | tags, botões e chips | frase comum |
| Contraste (A11-01) | até 1,3:1 | branco sobre azul 5,2:1 · cinza sutil 5,4–6,0:1 · legendas da faixa 4,7:1 |
| Mockups encolhidos no celular (IMG-04) | zoom com texto de 8px | chat em HTML a 14px; diagrama vira caixa + chips de 14px |
| CTA duplicado (TXT-08 / HER-04) | menu + hero na mesma tela | botão do menu só aparece depois que o do hero sai da tela |
| CTA principal com texto fixo (TXT-08) | 5 textos diferentes | "Quero meu diagnóstico gratuito" |
| Ortografia (CPY-15) | Negocio, Prejuizo, Duvidas, pra/pro | corrigido |
| Placeholders (TXT-06 / IMG-11) | "SUBSTITUIR 640×760" e cinza | espaço mantido com degradê da marca, sem texto |
| Âncoras abaixo do header (ESP-07) | — | scroll-margin de 72 + 32px |
| Menos movimento (A11-03) | — | rolagem suave e transições desligam |

## Mudanças de texto que precisam do seu ok
- Seção "A resposta já está nas suas vendas": o apoio repetia o parágrafo da seção anterior (TXT-14). Troquei por "O sistema compara o que as vendas dizem que saiu com o que realmente saiu do estoque."
- Indicação: "Indique um restaurante que fechar" → "que feche com a gente"; "Indique três" → "Indique três que fechem com a gente".
- "Falar com um especialista" → "WhatsApp" (TXT-09).
- "POR MÊS" + "parados no estoque…" viraram uma frase só: "por mês parados no estoque. São R$ 60 mil por ano que já eram seus."

## O que ainda depende de copy ou do cliente
- **H1 em 2 linhas (HER-05):** mantido por decisão do Victor (17/11/2026). "Seu negócio vende bem. Então por que sobra tão pouco?" segue com 3 linhas no desktop e 4 no celular; é exceção aceita à regra.
- **RSP-04 (até 3 linhas no celular):** o CTA final, com duas frases, dá 4 linhas no celular.
- **Fonte dos números (CPS-14):** R$ 5.000, R$ 60.000, 38,4%, 12 kg e 5 pts precisam vir do cliente.
- **Prazo de 24 h (CPY-06):** confirmar se é um prazo real.
- **Links:** "WhatsApp" e "Quero indicar" ainda sem destino (`#`).


## Decisões do Victor depois da rodada 2
- **Fonte:** Instrument Sans (OFL), hospedada em `assets/fonts/`, substitui a Inter. Continua uma família só (TIP-01).
- **Destaques em azul em semibold (600):** exceção pedida ao TIP-03, que pede títulos leves. A Instrument Sans não tem peso 300, então os títulos ficaram em 400.
- **Seção 2 ("O dinheiro não some do caixa"):** respiro de 64 em cima e 32 embaixo (48/24 no celular), abaixo dos 112 do ESP-02, por pedido. A imagem da seta foi recortada para tirar a área vazia.

## Movimento (pedido do Victor: site animado no scroll)

- Entrada única para o site todo (MOV-01/MOV-24): subir 16px e aparecer, em cascata entre irmãos (90ms, até 540ms).
- Assinatura da primeira dobra (MOT-01): H1 entra palavra por palavra; notebook sobe.
- Widgets: contadores nos números (stats e faixa azul), chat com "digitando…" antes de cada resposta, checklist marcando em sequência, órbita com anéis girando e chips flutuando, linha do tempo enchendo com a rolagem (animation-timeline, MOV-25), faixa de segmentos correndo, FAQ abrindo deslizando, seta dos botões atravessando no hover (MOT-04).
- Movimento contínuo para no hover (A11-13). Com "menos movimento" nada roda e a página aparece parada (MOT-17, A11-03). Sem JS tudo fica visível.
- Exceção consciente ao orçamento MOT-01 (uma microinteração por seção): o pedido foi "todo o site animado".
- Backup de antes: tools/index.backup-pre-motion.html e tools/site.backup-pre-motion.css.

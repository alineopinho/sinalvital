# SinalVital — Identidade visual e linguagem educativa

**Versão:** 2.0 — proposta para revisão (22/11/2026)  
**Estado:** direção de arte documentada; imagens finais, identidade gráfica e testes ainda pendentes.  
**Referência:** preservar características do protótipo visual apresentado pelo grupo, sem copiar marcas de terceiros.

## 1. Essência da marca

**Nome:** SinalVital  
**Assinatura:** Comunicação que Cuida  
**Frase principal:** Cuidar também é saber se comunicar.

A experiência deve ser **acolhedora, profissional, acessível e visualmente explicativa**, sem infantilizar pessoas surdas nem apresentar um único perfil de paciente. O propósito não é apenas informar: é incentivar o profissional a **compreender, respeitar e aplicar** práticas de comunicação mais acessível.

O nome combina comunicação/sinais e saúde/sinais vitais. Nenhum símbolo gráfico deve ser confundido com tradução de um sinal real de Libras.

## 2. Direção visual a preservar

- **Paleta exploratória:** azul-petróleo ou verde-azulado para identidade, verde-menta e marfim para superfícies, branco quente e grafite para textos. **Valores HEX finais pendentes** de escolha e teste de contraste.
- **Tipografia:** títulos com personalidade editorial (serifada, se legível), textos e controles em fonte de leitura confortável. Nomes/famílias de fonte ainda não aprovados.
- **Composição:** grandes blocos visuais, espaçamento generoso, cartões arredondados, hierarquia evidente e alternância equilibrada de superfícies.
- **Linguagem:** frases curtas, títulos orientados à ação, explicações claras, sem tom infantil ou excesso de jargão.
- **Animações:** discretas e funcionais, nunca necessárias para compreender conteúdo.

Não usar cores como único indicador de categoria, status ou resposta correta. Testar contraste de texto e controles antes de fixar a paleta.

## 3. Cabeçalho e navegação

**Padrão:** logotipo/nome à esquerda; botão “Explorar áreas” à direita; painel expansível organizado em **Atendimento**, **Recursos** e **Projeto**.

- O logotipo retorna à Home; não duplicar botão visual “Início”.
- Painel com hierarquia clara e respiro entre grupos, sem parecer um catálogo de cursos.
- Estados de foco, hover e aberto/fechado visíveis.
- Mesmos destinos e comportamento em celular, em coluna.
- O estado aberto/fechado precisa ter informação textual e semântica, não apenas mudança de ícone.

Comportamento completo em `02_fluxo-navegacao.md`.

## 4. Sistema de imagens: cada imagem deve cumprir uma função

| Tipo | Finalidade | Exemplos e cuidados |
| --- | --- | --- |
| **Ilustração de ambientação** | Situar a proposta e criar acolhimento | Cena de recepção ou consulta; não inventar gestos que pareçam sinais linguísticos |
| **Cena educativa** | Mostrar uma situação com pessoas e escolhas | Personagem fictícia Júlia durante anamnese; respeito à autonomia, sem caricaturas |
| **Infográfico** | Explicar relação, sequência ou processo | Antes/durante/depois, organização de orientações e confirmação da compreensão |
| **Documento ilustrado** | Demonstrar material de apoio | Ficha fictícia de orientação baseada em campos de uma prescrição; nunca apresentar como receita válida |
| **Ilustração de termo** | Ajudar a reconhecer conceito | Objetos/contextos de saúde, diagramas precisos quando validados |
| **Mídia linguística** | Mostrar conteúdo em Libras | Somente vídeos/imagens de fonte confiável, autorizados e validados; 3D decorativo não substitui sinais |

**Regra editorial:** nenhuma página deve depender apenas de longos parágrafos, mas tampouco deve receber imagens sem valor pedagógico. Ilustrações contextuais podem ser 3D suaves; infográficos e modelos de orientação devem privilegiar legibilidade e precisão.

**Créditos e arquivos:** registrar origem, licença e autorizações de todos os recursos. Preferir SVG para ícones/diagramas e WebP otimizado para ilustrações, quando apropriado. Nunca publicar imagem de pessoa identificável sem autorização.

## 5. Especificação visual por página

### 5.1. Início

- **Hero:** duas colunas no desktop; título “Cuidar também é saber se comunicar.”, descrição breve, CTA “Explorar atendimento” e uma ilustração grande de interação respeitosa entre profissional e paciente.
- **Quatro cartões em grade 2 × 2:** Preparar atendimento, Receitas acessíveis, Consultar glossário, Aprender sobre Libras. Título, uma frase e **ilustração própria por assunto**; cartão inteiro como link.
- **Diversidade de comunicação:** infográfico curto com diferentes possibilidades/preferências, sem sugerir que qualquer uma serve para todos.
- **Sobre em poucas linhas:** chamar para a página institucional sem repetir toda a justificativa.

### 5.2. Atendimento

- Hero com cena ilustrada de atendimento.
- **Antes / durante / depois:** três quadros ligados por uma sequência visual clara; manter o texto completo acessível em todas as telas.
- **Anamnese simulada:** cenas ilustradas consistentes da mesma personagem fictícia; opções com feedback textual e uma explicação do porquê da escolha. A imagem não determina a resposta.

### 5.3. Receitas acessíveis

- Introdução visual ao problema da compreensão de orientações.
- **Comparação lado a lado:** apresentação difícil versus orientação reorganizada, ambas identificadas como exemplos fictícios. No celular, empilhar os exemplos com títulos inequívocos.
- **Ficha educativa:** hierarquia visível para nome, dose, frequência/horário, duração e cuidados **conforme prescrição existente**; não inventar dados reais nem gerar prescrições.
- Usar pictogramas apenas como reforço, sempre acompanhados por texto. Não reduzir a compreensão a desenhos de comprimidos, relógios ou cores.

### 5.4. Glossário

- Priorizar busca e resultados acima de ilustrações decorativas extensas.
- Cartões com termo, categoria, definição breve e imagem útil quando existir.
- Painel de detalhes com fonte, contexto e indicação honesta de mídia disponível ou indisponível.

### 5.5. Aprender

- Combinar microconteúdos, cenas ilustradas e comparações sobre cultura e diversidade surda.
- Alfabeto manual apenas com imagens corretas, de procedência adequada.
- Vídeos com miniaturas e status explícito; quiz com progresso, alternativas claras e feedback textual.

### 5.6. Sobre

- Identidade acadêmica mais discreta; equipe, metodologia, limitações, referências e créditos em blocos de leitura simples.
- Não usar imagens decorativas que desviem atenção de fontes e informações relevantes.

## 6. Componentes reutilizáveis

- **Cabeçalho / menu** e **rodapé** consistentes nas seis páginas.
- **Botão primário**, **secundário** e **link textual**, com foco e estados reconhecíveis.
- **Cartão de navegação** com ilustração e descrição curta.
- **Cartão de conteúdo** e **cartão de termo**, sem duplicação de estilos.
- **Painel de detalhe** para glossário e feedback de atividades.
- **Infográfico por etapas**, com ordem de leitura lógica e equivalente textual.
- **Comparador de orientações** que funcione também sem animação.
- **Aviso de conteúdo indisponível** com texto claro, sem controles enganosos.

Organizar estilos em `assets/css/global.css` (tokens e base), `components.css` (componentes compartilhados) e `assets/css/pages/` (regras específicas). Media queries junto do componente ou seção correspondente. Evitar conflito entre seletores e duplicação de cores.

## 7. Responsividade

- **Desktop:** contêiner indicativo de 1.100–1.250 px, com ajustes conforme legibilidade; hero com texto e imagem equilibrados; cartões em duas colunas.
- **Tablet:** reorganizar imagens, textos e cartões conforme o espaço disponível.
- **Celular:** conteúdo em coluna, menu expandido verticalmente, controles confortáveis, comparações empilhadas e sem rolagem horizontal desnecessária.
- Verificar 320 px, 375 px, tablet e desktop. A ordem visual não deve contradizer a ordem de leitura do HTML.

## 8. Acessibilidade e movimento

- Navegação integral por teclado; foco visível e indicação textual do estado de componentes.
- Contraste testado; texto dimensionável sem quebra de layout; não depender de ícones ou cores isolados.
- Imagens informativas com `alt` adequado; decorativas com `alt=""` quando apropriado.
- Textos claros, sem infantilização e sem presumir que todas as pessoas surdas têm a mesma experiência com português escrito.
- Vídeos com legenda e recursos linguísticos adequados ao contexto e disponibilidade, identificando fonte e autorização.
- Respeitar `prefers-reduced-motion`; transições de entrada e hover não devem impedir interação ou leitura.
- Validar conteúdos de Libras por pessoas qualificadas antes de apresentá-los como demonstração correta.

## 9. Logotipo e referências criativas

**Logotipo ainda em definição.** A proposta anterior sugeria um “S” derivado de estetoscópio, com possível balão de diálogo; alternativas permanecem exploratórias. Testar leitura em tamanho pequeno e monocromático. Conferir uso de nomes/marcas semelhantes antes de divulgação ampliada.

**Inspirações visuais anteriores (não copiar):**

- [Education Website Design Concept — Ronas IT](https://dribbble.com/shots/25272282-Education-Website-Design-Concept)
- [Nursececlub Site Rewamp — Cuberto](https://dribbble.com/shots/23467941-Nursececlub-Site-Rewamp)

Referências indicam ritmo, hierarquia, cartões e ilustrações; não autorizam reprodução de artes, componentes ou marcas protegidas.

## 10. Critérios de revisão visual

- [ ] Home tem quatro caminhos claros e ilustrados.
- [ ] Todas as páginas têm função reconhecível e conteúdo visual útil.
- [ ] Menu é consistente e navegável por teclado.
- [ ] Ilustrações carregam sem erros e têm licença registrada.
- [ ] Cenas de atendimento não estereotipam pessoas surdas.
- [ ] Materiais de Libras possuem fonte e validação.
- [ ] Exemplos de receita são fictícios, seguros e claramente identificados.
- [ ] Componentes apresentam foco/feedback e não dependem só de cores.
- [ ] Layout é confortável no celular.
- [ ] Paleta e tipografia finais foram testadas antes de serem declaradas aprovadas.

**Pendentes:** seleção/criação das ilustrações finais, valores dos tokens, logotipo, revisão do conteúdo por docentes e especialistas, testes em navegadores e validação da experiência.

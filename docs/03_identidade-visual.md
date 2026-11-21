# SinalVital — Identidade visual

**Status:** diretrizes visuais atualizadas para orientar a versão completa; implementação, imagens definitivas, testes e revisão acadêmica ainda em andamento.

## 1. Nome e conceito

**Marca escolhida:** SinalVital  
**Subtítulo acadêmico provisório:** Protótipo Web Educativo para Acessibilidade Comunicacional de Pessoas Surdas na Área da Saúde.

O nome combina a noção de **sinais/comunicação** com a linguagem de **saúde e sinais vitais**. Não pressupõe, por si só, a representação de um sinal real de Libras.

A experiência deve ser moderna, educativa, acolhedora e acessível, sem aparência excessivamente infantil.

## 2. Identidade e logotipo — proposta, ainda não aprovada

Experimentar um **símbolo em formato de S formado pelo tubo de um estetoscópio**, possivelmente com elemento de diálogo. Alternativas: estetoscópio + balão de fala; linha de pulso + comunicação. O símbolo deverá continuar reconhecível em tamanhos pequenos e monocromático.

O logotipo **ainda não está pronto**. Não usar imagens de gestos inventados como sinais corretos em Libras. Verificar eventual uso do nome por terceiros antes de uso além do contexto acadêmico.

## 3. Referência estética

- **Tema A — Plataforma educativa moderna:** orienta a estrutura, com cartões, hierarquia clara, espaçamento generoso, componentes consistentes, navegação simples e layout responsivo.
- **Tema B — Saúde acolhedora com ilustrações 3D:** orienta o banner e as imagens decorativas, com personagens suaves, objetos de saúde, formas arredondadas e uso de azul-petróleo, verde-menta, marfim e tons neutros.
- **Referência externa 1 — [Education Website Design Concept — Ronas IT](https://dribbble.com/shots/25272282-Education-Website-Design-Concept):** explorar hierarquia visual editorial, coleções/etapas educativas, variedade de cartões e organização de conteúdos.
- **Referência externa 2 — [Nursececlub Site Rewamp — Cuberto](https://dribbble.com/shots/23467941-Nursececlub-Site-Rewamp):** explorar composições assimétricas, ilustrações 3D relacionadas à saúde, fundos pastel e ritmo visual entre texto e imagens.
- Ambas são **inspirações de padrões visuais**, não autorizações para copiar layout, imagens, textos, marca ou elementos protegidos.
- A Home deve ser mais expressiva que uma página institucional compacta; o Glossário continua priorizando busca, leitura e acessibilidade.
- Usar formas arredondadas, tipografia com personalidade e espaçamento generoso, com uma hierarquia de leitura clara.

### Paleta exploratória (não definitiva)

- Azul-petróleo e verde-azulado como possíveis cores principais.
- Verde-menta e marfim como possíveis superfícies de apoio.
- Grafite para textos.

A paleta final depende de testes de contraste. Não afirmar que cores isoladamente identificam conteúdos.

## 4. Home — wireframe conceitual

1. Cabeçalho com logotipo/nome **SinalVital** e menu.
2. Banner com o texto **"Cuidar também é saber se comunicar."**, explicação curta e ilustração 3D de atendimento respeitoso.
3. Título de orientação **"Como podemos ajudar você?"**.
4. **Quatro cartões** com ícones/ilustrações, rótulos e descrições: Quero aprender; Preparar atendimento; Consultar termo; Assistir vídeos.
5. Rodapé com informações acadêmicas, referências e acesso a Sobre o projeto.

As outras quatro áreas (Alfabeto manual, Quiz educativo, Sobre e demais conteúdos) continuam acessíveis pelo menu e por atalhos contextuais.

### Escala e composição — desktop e celular

- Em desktop, experimentar contêiner principal de aproximadamente **1.100–1.250 px**: evitar conteúdo preso a uma coluna excessivamente estreita quando existir espaço útil.
- Banner em duas colunas, título serifado expressivo, descrição legível e imagem de acolhimento 3D equilibrada com o texto.
- Quatro cartões em **grade 2 × 2** no desktop, com ícones coerentes, área de clique ampla e presença visual; usar uma coluna no celular. Os cartões não devem parecer apenas pequenos links em caixas iguais.
- Alternar superfícies menta, marfim e branco quente e composições de conteúdo, sem degradar contraste e consistência.
- As etapas educativas podem alternar imagem e texto e apresentar tamanhos diferentes de componentes, sem sacrificar a ordem lógica no celular.
- A largura, os tamanhos e a distribuição são **parâmetros a testar**, não uma especificação rígida: verificar 320px, 375px, tablet e desktop.

## 5. Componentes e imagens

- Cartões com alvos de clique amplos, rótulos textuais e estados de hover/foco.
- Glossário com busca, filtros, cartões e detalhes de termos.
- Vídeos com miniaturas identificáveis, controles e disponibilidade explícita.
- Quiz com alternativas claramente marcadas, indicação de progresso e feedback textual.
- Primeiros passos com três etapas ilustradas, indicador de progresso, controles Anterior/Continuar e interações distintas (revelação, narrativa e prática).
- Guia rápido com cards de boas práticas e situação fictícia de anamnese acessível.
- Alfabeto manual com conteúdo linguístico ilustrado somente a partir de fontes e autorizações confiáveis.
- Ilustrações 3D usadas como **apoio**, não como substitutas de conteúdo em Libras.
- Imagens informativas com alternativa textual; decorativas não devem adicionar ruído para leitores de tela.

Preferir WebP otimizado quando pertinente. Registrar autoria, licenças e autorização de materiais. Não publicar fotos/vídeos de pessoas sem autorização.

## 6. Animações

Utilizar transições suaves em CSS e JavaScript somente quando úteis: entrada do banner e **entrada sequencial dos quatro cartões da Home**, estados de hover/foco, troca de etapas, revelação de informações e feedback no Quiz. Não exigir movimento para compreender o site. Respeitar `prefers-reduced-motion` com mudança imediata de estados quando necessário; evitar flutuação contínua excessiva. Preferir CSS/JS nativos; bibliotecas de animação são opcionais e precisam de justificativa técnica.

## 7. Critérios de acessibilidade e validação

- Contraste e legibilidade do texto.
- HTML semântico; foco visível e navegação por teclado.
- Menu e cartões claros em desktop e dispositivos móveis.
- Linguagem acessível, sem depender só de ícones ou cores.
- Vídeos com identificação e controles; Libras e legendas quando aplicáveis e validadas.
- Revisão dos conteúdos em Libras por pessoas qualificadas, conforme disponibilidade.
- Coleta de feedback com professora surda e/ou participantes da comunidade, **se a colaboração ocorrer**.

## 8. Pendências

- Definir proposta final do logotipo e verificar possibilidade de uso do nome.
- Selecionar paleta e tipografia após teste visual.
- Ajustar equilíbrio entre ícones consistentes e ilustrações 3D; não sobrecarregar todas as áreas com imagens grandes.
- Definir e testar menu responsivo e composições detalhadas nas telas.
- Validar materiais acessíveis antes da publicação como recursos de aprendizagem em Libras.

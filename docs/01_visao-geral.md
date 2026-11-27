# SinalVital — Visão geral

**Versão:** 2.0 — proposta para revisão do grupo (22/11/2026)  
**Nome do projeto:** SinalVital — Comunicação que Cuida  
**Frase central:** Cuidar também é saber se comunicar.  
**Instituição:** Universidade Católica de Brasília (UCB)  
**Disciplina:** Língua Brasileira de Sinais (Libras)  
**Áreas da equipe:** Ciência da Computação, Biologia e Fisioterapia  
**Estado:** reestruturação planejada; não equivale a implementação ou validação concluída.

## 1. Apresentação e problema

O **SinalVital** é um protótipo de site público, educativo e visual para **profissionais e estudantes da saúde** que desejam reconhecer barreiras de comunicação e melhorar o atendimento às pessoas surdas. A proposta surgiu de discussões do grupo e de observações da professora surda sobre dificuldades em consultas, anamnese e, em especial, na **compreensão de receitas e orientações escritas**.

Uma prescrição tecnicamente correta pode não ser plenamente compreendida se a explicação não considerar a língua e as preferências do paciente. Libras possui estrutura linguística própria; algumas pessoas surdas a utilizam como primeira língua, enquanto as experiências e a fluência em português escrito variam. **Não existe um único perfil comunicacional de pessoa surda.** Recursos visuais e português claro podem ajudar, mas **não substituem Libras, intérpretes qualificados ou outros meios necessários**.

O site não realiza atendimento, não produz nem altera prescrições, não traduz automaticamente textos para Libras e não forma profissionais fluentes na língua.

## 2. Público, cliente e equipe

- **Usuário principal:** profissional ou estudante da área da saúde que busca orientação introdutória e consulta rápida.
- **Beneficiários esperados:** pessoas surdas que possam receber atendimento com comunicação mais acessível; o benefício deve ser avaliado, não presumido como resultado alcançado.
- **Cliente e avaliadora acadêmica principal:** professora surda da disciplina; seu retorno deverá orientar ajustes na experiência e no conteúdo.
- **Mediação de comunicação:** outra professora, atuando como intérprete da professora surda, conforme informado pelo grupo.
- **Equipe de desenvolvimento acadêmico:** estudantes ouvintes dos cursos de Ciência da Computação, Biologia e Fisioterapia.
- **Participantes da ação extensionista, faixa etária e quantidade:** a definir e registrar no roteiro de entrega.

## 3. Objetivos

**Objetivo geral:** desenvolver um recurso educativo digital que auxilie profissionais da saúde a reconhecer a diversidade linguística das pessoas surdas e adotar práticas de comunicação mais acessíveis durante o atendimento.

**Objetivos específicos:**

1. Apresentar barreiras comunicacionais, preferências individuais e aspectos introdutórios de Libras e cultura surda no contexto da saúde.
2. Disponibilizar orientações práticas de atendimento, situação simulada de anamnese, glossário e **exemplo visual de orientação relativa a prescrições**, com conteúdo fictício e revisado.
3. Demonstrar e avaliar o protótipo quanto à clareza, navegação, acessibilidade e contribuição educativa, registrando os retornos efetivamente obtidos.

## 4. Princípios pedagógicos

- **Compreender:** reconhecer diferentes experiências linguísticas e culturais, sem generalizar.
- **Respeitar:** dialogar diretamente com a pessoa surda, perguntar suas preferências e preservar autonomia, privacidade e consentimento.
- **Aplicar:** consultar exemplos, realizar atividades curtas e refletir sobre condutas em situações fictícias.

**Princípio editorial:** cada seção deve ajudar o visitante a compreender uma realidade, reconsiderar uma barreira ou aplicar uma prática. O site não deve depender apenas de textos extensos: cenas ilustradas, comparação de orientações e infográficos precisam transmitir informação útil.

## 5. Produto digital e páginas

**Formato proposto:** seis páginas HTML independentes, com CSS modular, JavaScript puro, dados em JSON e hospedagem prevista no GitHub Pages, sem login nem servidor de aplicação.

| Página | Papel | Recurso de destaque |
| --- | --- | --- |
| **Início** (`index.html`) | Apresentar e encaminhar | Banner ilustrado e quatro caminhos por necessidade |
| **Atendimento** (`pages/atendimento.html`) | Orientar a consulta | Antes/durante/depois + anamnese fictícia interativa |
| **Receitas acessíveis** (`pages/receitas.html`) | Apoiar explicações escritas | Comparação de exemplos e ficha educativa visual |
| **Glossário** (`pages/glossario.html`) | Consulta rápida | Busca, categorias, fontes e detalhes do termo |
| **Aprender** (`pages/aprender.html`) | Introdução à temática | Libras, cultura surda, alfabeto, vídeos e quiz |
| **Sobre** (`pages/sobre.html`) | Transparência acadêmica | Propósito, equipe, referências e limitações |

Os recursos anteriormente previstos como páginas independentes — Primeiros passos, Guia rápido, Biblioteca de vídeos, Quiz e Alfabeto manual — são **redistribuídos** nessas seis páginas. A arquitetura antiga de oito páginas fica substituída **como proposta**, sujeita à revisão antes da implementação.

Os quatro caminhos da Home serão: **Preparar atendimento**, **Receitas acessíveis**, **Consultar glossário** e **Aprender sobre Libras**. O logotipo leva à Home; um menu expansível fornece acesso às cinco páginas internas. Ver `02_fluxo-navegacao.md`.

## 6. Conteúdo de saúde e segurança

### Atendimento e anamnese

Apresentar recomendações de acolhimento e uma situação didática com personagem fictícia. Evitar atribuir características ou necessidades a todas as pessoas surdas. Não utilizar dados de pacientes reais.

### Receitas e orientações

Apresentar **modelos de apoio à explicação** de informações já prescritas, não uma receita pronta nem gerador de receita. O exemplo poderá organizar os campos: medicamento, dose, horários/frequência, duração e cuidados, **todos dependentes de informação profissional existente**. Não inventar esquema posológico, não substituir prescrição original e não permitir alteração automática de dados clínicos. A ficha e os exemplos devem ser revisados por profissional habilitado antes de serem apresentados como material educativo final.

### Glossário e Libras

Cada definição deve ter referência verificável; vídeos de sinais devem ter fonte, autorização e validação apropriadas. Quando um recurso ainda não existir, informar que está indisponível, sem simular reprodução. Ilustrações artísticas não demonstram Libras.

## 7. Direção de experiência e acessibilidade

Preservar a identidade que está sendo explorada: azul-petróleo, verde-menta, marfim, cartões de presença visual, títulos expressivos e ilustrações acolhedoras. O design deve permitir **consulta rápida**, leitura clara, navegação por teclado, foco visível, boa responsividade e redução de movimento. Ilustrações informativas precisam de texto alternativo e não devem carregar sozinhas informação essencial. Diretrizes em `03_identidade-visual.md`.

## 8. Escopo técnico

**Incluído na primeira versão proposta:** seis páginas, menu acessível, navegação contextual, Home ilustrada, orientações práticas, simulação simples de anamnese, comparação educativa de orientações, modelo visual fictício, glossário pesquisável, conteúdos introdutórios e quiz simples sem persistência.

**Fora do escopo:** autenticação, banco externo, backend, atendimento clínico, coleta de dados de pacientes, geração de receita, tradução automática para Libras, formação certificada, videoaulas obrigatórias e contratação de profissionais para gravá-las. Ampliações futuras dependerão de recursos e validação.

## 9. Ação extensionista e avaliação

**Etapas propostas:** pesquisa e levantamento de situações-problema; seleção e revisão de fontes; desenho de fluxos e ilustrações; desenvolvimento; apresentação e avaliação com a professora surda e outros participantes **se confirmados**; documentação do feedback e das melhorias.

A professora surda é a principal referência de avaliação acadêmica, **não uma validação automática de todo material linguístico ou clínico**. Registrar separadamente o que foi planejado e realizado. A apresentação em sala, isoladamente, não comprova impacto comunitário. Os critérios da entrega, cronograma, participantes e evidências permanecem no `04_roteiro-entrega-academica.md`, que requer sincronização posterior.

## 10. Referências iniciais e pendências

**Base legal já identificada no projeto anterior (conferir e citar de acordo com o texto final):**

- Lei nº 10.436/2002 — <https://www.planalto.gov.br/ccivil_03/leis/2002/l10436.htm>
- Decreto nº 5.626/2005 — <https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/decreto/d5626.htm>
- Lei nº 13.146/2015 — <https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm>

**Pendente de confirmação:** nomes e responsabilidades da equipe; formato e momento da avaliação; fontes acadêmicas e clínicas efetivamente utilizadas; conteúdo final dos modelos de receita; mídias com licença e validação; identidade gráfica final; testes de acessibilidade; links publicados e evidências da ação.

# SinalVital

**Protótipo web educativo para acessibilidade comunicacional de pessoas surdas na área da saúde.**

Projeto de extensão da disciplina de Língua Brasileira de Sinais (Libras) da Universidade Católica de Brasília (UCB), desenvolvido por estudantes de Ciência da Computação, Biologia e Fisioterapia.

## Proposta

Criar um site público e visual para introduzir boas práticas de comunicação no atendimento à pessoa surda e disponibilizar materiais educativos acessíveis.

A Home será organizada por quatro necessidades: **Quero aprender**, **Preparar atendimento**, **Consultar termo** e **Assistir vídeos**. O projeto também contempla alfabeto manual, quiz educativo e informações sobre a iniciativa.

## Experiência prevista

O site terá oito áreas: **Home**, **Primeiros passos**, **Guia rápido**, **Glossário**, **Biblioteca de vídeos**, **Sobre o projeto**, **Quiz educativo** e **Alfabeto manual**.

A versão completa em desenvolvimento deverá combinar organização de uma **plataforma educativa moderna** com uma linguagem visual de **saúde acolhedora, ilustrações 3D e experiências interativas**. A jornada de Primeiros passos terá três etapas; o Guia rápido incluirá uma situação fictícia de **anamnese e comunicação acessível**. Materiais em Libras só serão apresentados como demonstrações quando houver fonte, autorização e validação adequadas.

## Tecnologias

HTML5, CSS3, JavaScript puro, JSON e publicação prevista no GitHub Pages. Um único `index.html`, sem login, back-end, banco de dados externo nem armazenamento permanente de respostas. O projeto deve funcionar com servidor HTTP local; abrir o HTML diretamente pelo sistema de arquivos pode impedir o carregamento de JSON.

## Documentação

- [Visão geral](docs/01_visao-geral.md)
- [Fluxo de navegação](docs/02_fluxo-navegacao.md)
- [Identidade visual](docs/03_identidade-visual.md)
- [Roteiro da entrega acadêmica](docs/04_roteiro-entrega-academica.md)

## Situação

**Versão demonstrativa em desenvolvimento.** A Home, o Glossário e a jornada de Primeiros passos têm implementações experimentais; Guia rápido, Vídeos, Quiz, Alfabeto manual e Sobre estão previstos para a versão integrada. A conclusão de cada módulo dependerá de revisão e testes. Para executar localmente, use `python -m http.server 8000` na raiz e acesse `http://localhost:8000/`. O Glossário lê JSON via HTTP. Definições e materiais em Libras pendentes deverão permanecer identificados como provisórios ou indisponíveis.

**Referências de direção de arte (inspiração, sem cópia):** [Education Website Design Concept — Ronas IT](https://dribbble.com/shots/25272282-Education-Website-Design-Concept) e [Nursececlub Site Rewamp — Cuberto](https://dribbble.com/shots/23467941-Nursececlub-Site-Rewamp).

> O nome **SinalVital** é a proposta escolhida para o projeto. Antes de uso público ampliado, conferir possíveis nomes ou marcas semelhantes.

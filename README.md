# SinalVital — Comunicação que Cuida

Protótipo acadêmico de consulta rápida e apoio à comunicação acessível na saúde. Desenvolvido com HTML, CSS, JavaScript e JSON, sem login, backend ou serviços de IA.

## Como testar

Na pasta do projeto, execute `python -m http.server 8000` e abra `http://localhost:8000`. O Glossário carrega JSON por HTTP; abrir `index.html` diretamente pode bloquear a leitura dos dados.

## Páginas

Início, Atendimento (com anamnese fictícia), Orientações acessíveis (modelo demonstrativo para impressão), Glossário, Conhecer e Sobre.

## Situação

**Versão demonstrativa para revisão.** Não utilizar como guia clínico, prescrição oficial ou tradução validada de LIBRAS. O vídeo demonstrativo ainda não foi incluído porque depende de fonte autorizada e validação. Conteúdos e acessibilidade devem passar por avaliação da professora e do grupo.

A pasta `docs/` preserva cópias dos documentos antigos; ainda precisam ser sincronizados à nova implementação depois da revisão do site.


## Ajustes da versão 1.1

- Marca SinalVital exibida como arquivo SVG local (versão gráfica do **S** provisório).
- Arte de acolhimento preservada e adaptada a uma apresentação mais panorâmica na Home.
- Glossário com detalhes lado a lado no desktop e abaixo da lista em telas menores, com Escape, Fechar e devolução do foco.
- Ficha ilustrativa reorganizada com cinco campos e impressão A4 isolada.
- Todos os recursos permanecem locais/estáticos; os vídeos em LIBRAS ainda dependem de fonte validada e autorização.

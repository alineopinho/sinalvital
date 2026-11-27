# SinalVital — Comunicação que Cuida

O **SinalVital** é um protótipo acadêmico de apoio à comunicação acessível entre profissionais da saúde e pessoas surdas. Reúne orientações, exemplos práticos e recursos de consulta em uma interface visual, com foco no respeito à Libras, à autonomia do paciente e às diferentes preferências de comunicação.

O projeto foi desenvolvido na disciplina de Libras da Universidade Católica de Brasília (UCB), reunindo conhecimentos de Ciência da Computação, Biologia e Fisioterapia.

**[Acessar o SinalVital](https://alineopinho.github.io/sinalvital/)**

## Objetivo

Auxiliar estudantes e profissionais da saúde na identificação de barreiras comunicacionais e na adoção de estratégias de comunicação mais acessíveis durante o atendimento. A proposta tem caráter educativo e introdutório.

## Funcionalidades

| Página | Recursos |
| --- | --- |
| Início | Apresentação do projeto e acesso às áreas de consulta. |
| Atendimento | Orientações para antes, durante e depois da consulta e simulação interativa de anamnese fictícia. |
| Orientações acessíveis | Exemplos de representação visual de horários, intervalos, duração, quantidade e cuidados, além de um guia educativo para impressão. |
| Glossário | Consulta de termos de saúde, busca por prefixos e palavras-chave, filtros por categoria, navegação horizontal e painel de detalhes com exemplos e referências. |
| Conhecer | Conteúdo introdutório sobre Libras, cultura surda, autonomia e recursos externos de aprendizagem. |
| Sobre | Contexto acadêmico, contribuições das áreas de formação, limites do projeto e referências legais. |

O Glossário possui uma estrutura preparada para receber demonstrações em Libras e informações linguísticas complementares. Esses materiais audiovisuais ainda não fazem parte da versão atual.

## Tecnologias

- HTML5 — estrutura semântica das páginas.
- CSS3 — identidade visual, componentes, layouts responsivos e estilos de impressão.
- JavaScript — pesquisa, filtros, navegação horizontal, painel de detalhes e simulação de atendimento.
- JSON — armazenamento local dos dados do Glossário.
- Git e GitHub — versionamento do código-fonte.
- GitHub Pages — hospedagem estática.

O projeto não utiliza backend, banco de dados, autenticação, frameworks ou serviços de inteligência artificial integrados à aplicação.

## Estrutura do repositório

```text
sinalvital/
├── index.html
├── pages/
│   ├── atendimento.html
│   ├── orientacoes.html
│   ├── glossario.html
│   ├── conhecer.html
│   └── sobre.html
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── components.css
│   │   ├── editorial-wide.css
│   │   └── pages/
│   ├── img/
│   └── js/
│       ├── navigation.js
│       ├── anamnese.js
│       └── glossario.js
├── data/
│   └── glossario.json
├── docs/
│   ├── 01_visao-geral.md
│   ├── 02_fluxo-navegacao.md
│   └── 03_identidade-visual.md
├── .gitignore
└── README.md
```

## Execução local

### Pré-requisitos

- Git, para clonar o repositório (ou baixar o código em ZIP pelo GitHub).
- Um navegador atualizado.
- Python 3 ou VS Code com a extensão Live Server, para disponibilizar um servidor HTTP local.

### 1. Clonar o repositório

```bash
git clone https://github.com/alineopinho/sinalvital.git
cd sinalvital
```

Para testar a branch de desenvolvimento, execute também:

```bash
git switch experimento-visual
```

### 2. Iniciar o servidor local

**Opção A — Python 3**

Na raiz do projeto:

```bash
python -m http.server 8000
```

No Windows, caso o comando `python` não esteja disponível, utilize `py -m http.server 8000`. Em sistemas que disponibilizam o executável como `python3`, utilize `python3 -m http.server 8000`.

Acesse [http://localhost:8000](http://localhost:8000). Para encerrar o servidor, pressione `Ctrl+C` no terminal.

**Opção B — Live Server**

Abra a pasta do projeto no VS Code, instale a extensão Live Server, clique com o botão direito em `index.html` e selecione **Open with Live Server**.

> O Python é apenas uma alternativa de servidor local, não uma dependência da aplicação. Abrir o HTML diretamente pelo protocolo `file://` pode impedir o carregamento do JSON do Glossário. Não é necessário instalar pacotes npm ou configurar um banco de dados.

## Testes manuais

Para verificar a aplicação, utilize o site publicado ou a execução local:

- Navegar entre as seis páginas e verificar imagens, menus e links.
- Iniciar, avançar e reiniciar a simulação de anamnese.
- Abrir a pré-visualização de impressão do guia de orientações e conferir o conteúdo.
- Pesquisar por `enjoo` e verificar o resultado Náusea; testar também `nau` e `PRESSAO`.
- Aplicar e limpar filtros do Glossário, consultar detalhes e percorrer os cartões horizontalmente quando houver conteúdo suficiente.
- Conferir a navegação por teclado e a adaptação da interface em diferentes larguras de tela.

A versão foi testada manualmente no GitHub Pages pela desenvolvedora. Esses testes não equivalem a uma certificação de acessibilidade ou validação clínica e linguística.

## Documentação técnica

| Documento | Conteúdo |
| --- | --- |
| [Visão geral](docs/01_visao-geral.md) | Escopo, arquitetura, funcionalidades e limites técnicos. |
| [Fluxo de navegação](docs/02_fluxo-navegacao.md) | Organização das páginas e fluxos das interações. |
| [Identidade visual](docs/03_identidade-visual.md) | Paleta, tipografia, componentes e diretrizes visuais. |

## Versionamento

- `main`: destinada à versão estável do projeto.
- `experimento-visual`: branch de desenvolvimento e experimentação, mantida para futuras melhorias e testes antes da integração com a versão estável.

## Limites e uso responsável

O SinalVital é uma ferramenta educativa de apoio e consulta. Não realiza atendimento clínico, não gera prescrições, não traduz automaticamente para Libras e não substitui intérpretes qualificados ou orientações de profissionais da saúde.

Os exemplos de atendimento e de prescrição são fictícios. As ilustrações representam conceitos e não constituem, por si só, sinais em Libras. As fontes conceituais estão indicadas no Glossário e as referências legais estão disponíveis na página Sobre.

O projeto não solicita cadastro nem registra respostas da simulação em banco de dados. A avaliação linguística, de saúde e de acessibilidade deve ser considerada em futuras revisões.

## Melhorias futuras

- Produção de demonstrações próprias em Libras para os termos do Glossário, com participação de profissionais qualificados.
- Produção de exemplos contextualizados em Libras, materiais de configuração de mão e alfabeto manual, com revisão linguística.
- Ampliação gradual do vocabulário especializado em saúde.
- Avaliação de usabilidade e acessibilidade com o público-alvo.

A produção audiovisual deverá considerar autoria, autorização de uso de imagem e direitos de utilização. Não foram incorporados vídeos de terceiros na versão atual.

---

**SinalVital — Comunicação que Cuida**  
Projeto acadêmico interdisciplinar · Universidade Católica de Brasília · 2026

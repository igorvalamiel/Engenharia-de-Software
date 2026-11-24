
## 📌 Sobre o projeto - Disciplina Engenharia de Software - EEL873

O **Baristando** — cujo nome combina “barista” e “barista turistando” — é um projeto desenvolvido para a disciplina **Engenharia de Software** na UFRJ.

O objetivo é criar uma plataforma web que permita localizar estabelecimentos que vendem café no município do Rio de Janeiro e consultar informações sobre:

- localização dos estabelecimentos;
- qualidade do café;
- faixa de preço;
- classificação pelos usuários;
- validação das informações cadastradas;
- novos pontos ainda não registrados no sistema.

A plataforma foi pensada para moradores e turistas que desejam descobrir cafeterias e pontos de venda de café na cidade. Além da consulta de estabelecimentos, o sistema incentiva a participação colaborativa dos usuários, permitindo o cadastro de locais, a confirmação ou contestação de informações e a avaliação dos serviços.

## 🎯 Objetivos

- reunir estabelecimentos que vendem café em um mapa do Rio de Janeiro;
- apresentar classificações independentes de qualidade e preço;
- incentivar a colaboração entre usuários;
- manter os dados atualizados por meio de verificações comunitárias;
- ajudar moradores e turistas a escolher locais com base em experiências registradas;
- aplicar, na prática, conceitos de levantamento de requisitos e gestão de projetos de software.

## 🔄 Como o sistema funciona

### 🗺️ Consulta e navegação no mapa

Ao acessar o sistema, o usuário pode visualizar os estabelecimentos cadastrados no mapa da cidade. Cada marcador representa um local onde é possível encontrar café.

### ➕ Cadastro de novos locais

Caso o usuário visite um estabelecimento que ainda não esteja registrado, ele poderá informar os dados do novo local, como:

- nome do estabelecimento;
- endereço;
- localização no mapa;
- informações sobre os produtos ou serviços oferecidos.

### ✔️ Confirmação ou contestação

Usuários que já tenham visitado um estabelecimento podem confirmar ou contestar as informações existentes. Essa funcionalidade contribui para manter a base de dados mais precisa e atualizada.

### ⭐ Avaliação do café

Após consumir no estabelecimento, o usuário poderá registrar sua experiência por meio de avaliações relacionadas à qualidade e ao preço.

Essas informações ajudam outros usuários a comparar locais e podem contribuir para a construção de classificações mais confiáveis.

## 🌐 Protótipo web

O diretório [`website/`](./website) contém a primeira versão da interface apresentada aos usuários.

O protótipo pode ser acessado em:

🔗 **[Abrir o protótipo Baristando](https://igorvalamiel.github.io/Engenharia-de-Software/website/main.html)**

Arquivos:

- [`main.html`](./website/main.html) — estrutura da página;
- [`main.css`](./website/main.css) — identidade visual, layout e responsividade;
- [`main.js`](./website/main.js) — interação das abas e alternância dos processos do sistema.

## 🗂️ Estrutura do repositório

```text
Engenharia-de-Software/
├── parte1/
├── parte2/
├── parte3/
├── parte4/
├── parte5/
├── parte6/
├── parte7/
├── website/
├── .gitattributes
├── LICENSE
└── README.md
```

### 📘 Parte 1 — Descrição informal

A primeira etapa apresenta uma descrição geral do sistema e informa o problema que ele pretende resolver.

**Arquivo principal:**

- [`parte1/descricao_informal.txt`](./parte1/descricao_informal.txt)

> Documenta o nome do sistema, seu objetivo, o público-alvo de maneira implícita e as principais ações disponíveis aos usuários.

### 👥 Parte 2 — Partes interessadas

Esta etapa identifica os indivíduos e grupos diretamente ou indiretamente relacionados ao projeto.

**Arquivo principal:**

- [`parte2/partes_interessadas.pdf`](./parte2/partes_interessadas.pdf)

> Aborda os stakeholders envolvidos, suas expectativas e o interesse de cada um no sistema.

### 💭 Parte 3 — Desejos das partes interessadas

Esta parte organiza e apresenta o que as partes interessadas desejam obter com a solução.

**Arquivo principal:**

- [`parte3/desejos_das_partes_interestadas - Página1.pdf`](./parte3/desejos_das_partes_interessadas%20-%20P%C3%A1gina1.pdf)

> Pode incluir necessidades, ideias, expectativas, benefícios esperados e requisitos iniciais.

### 💰 Parte 4 — Análise do valor do serviço

Esta etapa realiza uma análise de valor relacionada à proposta do Baristando.

**Arquivo principal:**

- [`parte4/analise_do_valor_do_servico.pdf`](./parte4/analise_do_valor_do_servico.pdf)

> Avalia os benefícios, usuários, necessidades atendidas e a contribuição esperada da solução.

### 🧾 Parte 5 — Histórias de usuário

As histórias de usuário descrevem funcionalidades sob a perspectiva de quem utilizará o sistema.

**Arquivo principal:**

- [`parte5/historias_do_usuario.pdf`](./parte5/historias_do_usuario.pdf)

> Relacionam o usuário às ações que deseja executar e aos resultados esperados dessas ações.

### 🔧 Parte 6 — Casos de uso

Esta seção detalha as interações entre usuários e sistema.

**Arquivos principais:**

- [`parte6/caso_de_uso.pdf`](./parte6/caso_de_uso.pdf) — documento de casos de uso;
- [`parte6/casos_de_uso`](./parte6/casos_de_uso) — arquivo complementar com representação dos casos de uso.

> Registra como os usuários realizam tarefas como consultar o mapa, cadastrar locais, confirmar informações e avaliar estabelecimentos.

### 📅 Parte 7 — Gestão do projeto

A última etapa reúne materiais relacionados ao planejamento e à organização do trabalho.

**Arquivos principais:**

- [`parte7/gestao_do_projeto.pdf`](./parte7/gestao_do_projeto.pdf) — documento de gestão do projeto;
- [`parte7/cronograma_baristando.xlsx`](./parte7/cronograma_baristando.xlsx) — cronograma do projeto.

> Apresenta a divisão das etapas, o acompanhamento das atividades e a organização do desenvolvimento.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| **HTML5** | Estrutura do conteúdo e interface do protótipo |
| **CSS3** | Estilos, cores, espaçamento e responsividade |
| **JavaScript** | Interação, gerenciamento das abas e atualização dinâmica do conteúdo |
| **PDF** | Documentação das etapas do trabalho |
| **XLSX** | Organização do cronograma do projeto |
| **GitHub Pages** | Publicação do protótipo web |

### Distribuição aproximada das linguagens

- HTML: **37,4%**
- JavaScript: **32,2%**
- CSS: **30,4%**

## ▶️ Executar o projeto localmente

O protótipo é composto por arquivos estáticos. Portanto, não é necessário instalar dependências ou frameworks.

1. Faça o download ou clone o repositório:

```bash
git clone https://github.com/igorvalamiel/Engenharia-de-Software.git
```

2. Acesse o diretório:

```bash
cd Engenharia-de-Software
```

3. Abra o arquivo:

```text
website/main.html
```

Você pode abrir o arquivo diretamente no navegador ou utilizar uma extensão como Live Server no VS Code.

## 📂 Links úteis

- 🔗 [Repositório no GitHub](https://github.com/igorvalamiel/Engenharia-de-Software)
- 🌐 [Protótipo publicado](https://igorvalamiel.github.io/Engenharia-de-Software/website/main.html)
- 🎨 [Arquivo HTML](https://github.com/igorvalamiel/Engenharia-de-Software/blob/main/website/main.html)
- 🎛️ [Arquivo CSS](https://github.com/igorvalamiel/Engenharia-de-Software/blob/main/website/main.css)
- ⚙️ [Arquivo JavaScript](https://github.com/igorvalamiel/Engenharia-de-Software/blob/main/website/main.js)
- 📄 [Licença MIT](https://github.com/igorvalamiel/Engenharia-de-Software/blob/main/LICENSE)
- 📊 [Cronograma do projeto](https://github.com/igorvalamiel/Engenharia-de-Software/blob/main/parte7/cronograma_baristando.xlsx)

## ⚖️ Licença

Este projeto está disponibilizado sob a **Licença MIT**. Consulte o arquivo [`LICENSE`](./LICENSE) para obter os termos completos.

## 👤 Autor

**Igor Valamiel**

- GitHub: [@igorvalamiel](https://github.com/igorvalamiel)

---

<p align="center">
  Projeto acadêmico desenvolvido para a disciplina de Engenharia de Software — UFRJ.
</p>

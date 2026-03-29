# Netflix Clone

Este é um projeto de estudo, desenvolvido como parte de uma imersão em desenvolvimento web. Ele simula a experiência de navegação em um catálogo de filmes e séries, com seleção de perfis e carrosséis interativos.


## Estrutura do Projeto

```
Netflix/
├── index.html                 # Página principal de seleção de perfis
├── style.css                  # Estilos para a página de perfis
├── theme.js                   # Script para alternância de tema claro/escuro
├── assets/                    # Pasta de recursos (imagens de perfis)
├── catalogo/                  # Seção do catálogo
│   ├── catalogo.html          # Página do catálogo principal
│   ├── catalogo.css           # Estilos específicos do catálogo
│   └── js/                    # Scripts JavaScript
│       ├── data.js            # Dados das categorias e itens
│       ├── index.js           # Script de inicialização (não utilizado)
│       ├── main.js            # Script principal que monta o catálogo
│       ├── utils.js           # Funções utilitárias
│       └── components/        # Componentes modulares
│           ├── Card.js        # Componente para criar cards de filmes/séries
│           └── Carousel.js    # Componente para criar carrosséis
```

## 🛠️ Processo de Desenvolvimento
O projeto foi iniciado em ambiente **local**, e utileizei para versionamento de codigo o **Git** 
realizei a integração com o **GitHub** para hospedagem e compartilhamento do código.

**Principais comandos utilizados:**
- `git init`: Inicialização do repositório local.
- `git add` e `git commit`: Controle de versão granular das funcionalidades.
- `git remote add origin`: Conexão com o repositório remoto.
- `git push`: Sincronização e deploy do código.

## Como Funciona

### 1. Seleção de Perfil (`index.html`)
- A página inicial apresenta uma lista de perfis disponíveis
- Cada perfil tem uma imagem e nome
- Ao clicar em um perfil, o usuário é redirecionado para o catálogo
- O perfil selecionado é armazenado no localStorage para personalização

### 2. Catálogo (`catalogo/catalogo.html`)
- Exibe um navbar com navegação (links para Alura, simulados)
- Mostra carrosséis organizados por categorias (Épicos, Séries, Para maratonar)
- Cada card representa um filme ou série com:
  - Imagem do pôster
  - Badges (Top 10, Novidade, etc.)
  - Botões de ação (play, adicionar/remover da lista, like)
  - Informações (porcentagem de match, classificação etária, duração)
  - Barra de progresso para itens já assistidos

### 3. Funcionalidades Interativas
- **Hover nos cards**: Após 600ms, um trailer do YouTube é reproduzido automaticamente
- **Carrosséis**: Organizam os itens em linhas horizontais
- **Tema**: Alternância entre claro e escuro na página inicial
- **Responsividade**: Design adaptável para diferentes tamanhos de tela

### 4. Arquitetura JavaScript
- **Modular**: Código dividido em módulos ES6
- **Componentes**: `Card.js` e `Carousel.js` criam elementos dinamicamente
- **Dados**: `data.js` contém as categorias e itens (imagens, links YouTube, etc.)
- **Utilitários**: `utils.js` fornece funções auxiliares (IDs do YouTube, scores aleatórios, etc.)

## Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas
- **CSS3**: Estilização e layout responsivo
- **JavaScript ES6**: Lógica interativa e manipulação do DOM
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Roboto)
- **YouTube API**: Reprodução de trailers

## Como Executar

1. Abra o arquivo `index.html` em um navegador web
2. Selecione um perfil
3. Navegue pelo catálogo
4. Passe o mouse sobre os cards para ver os trailers

## Observações

- Os links de navegação no navbar apontam para o site da Alura (simulado)
- Os dados são estáticos e definidos em `data.js`
- Os trailers são reproduzidos via YouTube embed
- O projeto não inclui backend ou autenticação real</content>
<parameter name="filePath">c:\Users\gabri\Desktop\Netflix\README.md

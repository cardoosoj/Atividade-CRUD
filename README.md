# Sistema CRUD com Node.js e SQLite

Sistema básico de CRUD (Create, Read, Update, Delete) desenvolvido com Node.js, SQLite e frontend responsivo.

# Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- Interface responsiva
- Banco de dados SQLite

# Requisitos

- Node.js
- NPM

# Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor:
```bash
npm start
```

O servidor será iniciado em `http://localhost:3000`

# Estrutura do Projeto

```
CRUD/
├── public/              # Frontend
│   ├── index.html      # Página principal
│   ├── styles.css      # Estilos
│   └── script.js       # JavaScript
├── server.js           # Backend
├── package.json        # Configuração
└── meusite.db          # Banco de dados
```

# Tecnologias

- Backend: Node.js, Express, SQLite3
- Frontend: HTML, CSS, JavaScript

# Como Usar

1. Acesse `http://localhost:3000`
2. Digite o nome do usuário
3. Clique em "Salvar"
4. A lista será atualizada automaticamente

# Banco de Dados

```sql
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT
);
```

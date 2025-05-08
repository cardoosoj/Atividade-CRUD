// Importando módulos
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

// Inicializando o servidor Express
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Conectando ao banco de dados SQLite
const db = new sqlite3.Database("meusite.db", err => {
    if (err) console.error("Erro ao conectar ao SQLite:", err);
    else console.log("✅ Banco de dados SQLite conectado!");
});

// Criando a tabela 'usuarios' se ela não existir
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)");
    console.log("✅ Tabela 'usuarios' verificada/criada com sucesso.");
});

// Rota para salvar um novo usuário
app.post("/salvar", (req, res) => {
    const { nome } = req.body;
    if (!nome) return res.status(400).json({ mensagem: "Nome é obrigatório!" });
    
    const sql = "INSERT INTO usuarios (nome) VALUES (?)";
    db.run(sql, [nome], function(err) {
        if (err) {
            console.error("Erro ao inserir:", err);
            return res.status(500).json({ mensagem: "Erro ao salvar no banco de dados." });
        }
        res.json({ mensagem: "Nome salvo com sucesso!", id: this.lastID });
    });
});

// Rota para listar todos os usuários
app.get("/usuarios", (req, res) => {
    db.all("SELECT * FROM usuarios", [], (err, rows) => {
        if (err) {
            console.error("Erro ao buscar usuários:", err);
            return res.status(500).json({ mensagem: "Erro ao buscar usuários." });
        }
        res.json(rows);
    });
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log("🚀 Servidor rodando na porta 3000");
});

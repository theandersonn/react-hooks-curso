const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
  listarTarefas,
  listarTarefaId,
  cadastrarTarefa,
  atualizarTarefa,
  removerTarefa,
  concluirTarefa,
} = require("./controllers/gerenciador-tarefas.js");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// listar todas as tarefas - (get)
app.get("/gerenciador-tarefas", listarTarefas);

// listar uma tarefa por id - (get)
app.get("/gerenciador-tarefas/:id", listarTarefaId);

// cadastrar uma tarefa - (post)
app.post("/gerenciador-tarefas", cadastrarTarefa);

// atualizar uma tarefa - (put)
app.put("/gerenciador-tarefas/:id", atualizarTarefa);

// remover uma tarefa - (delete)
app.delete("/gerenciador-tarefas/:id", removerTarefa);

// concluir uma tarefa - (put)
app.put("/gerenciador-tarefas/:id/concluir", concluirTarefa);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));

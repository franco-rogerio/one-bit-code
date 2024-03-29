const express = require("express");
const checklistRouter = require("./src/routes/checklist");

const app = express();
app.use(express.json());

// const log = (req, res, next) => {
//   console.log(req.body);
//   console.log(`Data: ${Date.now()}`);
//   next();
// };

// app.use(log);

app.use("/checklists", checklistRouter);

// app.get("/", (req, res) => {
//   res.send("<h1>Minha lista de tarefas :)</h1>");
// });

// app.get("/json", (req, res) => {
//   console.log(req.body);
//   res.json({ title: "Tarefa X", done: true });
// });

app.listen(3000, () => {
  console.log("servidor foi iniciado");
});

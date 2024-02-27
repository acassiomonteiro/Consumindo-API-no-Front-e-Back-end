const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    // Corrigir a referência da variável de destructuring
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

    console.log(data);

    return res.json(data);
  } catch (error) {
    // Corrigir a referência da variável de resposta
    return res.status(400).json({ error: 'Ocorreu um erro...' });
  }
});

app.listen(5000, () => {
  console.log("Servidor está rodando na porta 5000");
});

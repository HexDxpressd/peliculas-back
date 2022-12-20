import express from "express"
import { BD } from "./db.js"
import { PORT } from "./config.js"

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


app.get("/", async (req, res) => {
    const rows = await BD.query("SELECT * FROM peliculas ")
    res.json(rows)
})

app.get("/addMovic", async (req, res) => {
    const result = await BD.query("INSERT INTO peliculas(nombre) VALUES ('Guerra de las galaxias')")
    res.json(result)
})

app.listen(PORT)
console.log("Server Port", PORT)
import express from "express"
import { BD } from "./db.js"
import { PORT } from "./config.js"

const app = express()

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
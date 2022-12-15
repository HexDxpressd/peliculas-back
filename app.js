import express from "express"
import { BD } from "./db.js"
import { PORT } from "./config.js"

const app = express()

app.get("/", async (req, res) => {
    const rows = await BD.query("SELECT * FROM peliculas")
    res.json(rows)
})
app.listen(PORT)
console.log("Server Port", PORT)
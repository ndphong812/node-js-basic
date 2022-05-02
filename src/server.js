const express = require('express')
import configViewEngine from './configs/viewEngine'
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8080;

configViewEngine(app)
app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname })
    res.render("index.ejs")
})

app.get('/about', (req, res) => {
    res.send("This is About Page!")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
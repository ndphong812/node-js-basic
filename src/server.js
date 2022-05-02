const express = require('express')
import configViewEngine from './configs/viewEngine'
const app = express()
const port = 3000

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
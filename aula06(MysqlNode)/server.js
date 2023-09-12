const express = require('express')
const app = require('./src/app.js')

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server iniciado com sucesso na porta: ${port}`)
})


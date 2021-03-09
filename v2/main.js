const express = require('express')

const app = express()
const port = 3000

app.use(express.static('web'))
app.use("/dist", express.static("dist"))

app.get('/', (req, res) => {

})

app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const router = express.Router()



app.use(bodyParser.urlencoded( { extended: true}))
app.use(bodyParser.json())

const port = process.env.port || 3000

router.get('/', function(req,res){
    res.json({
        message: 'Bem vindo ao Desafio Final'
    })
})

app.use('/api', router)

app.listen(port)
console.log(`API rodando na porta ${port}`)
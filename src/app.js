import express from 'express'
import conectaNaDb from './config/dbConnect.js'
import routes from './routes/index.js'
import manipuladorDeErros from './middleWares/manipuladorDeErros.js'
import manipulador404 from './middleWares/manipulador404.js'

const conexao = await conectaNaDb()
conexao.on('error', (erro) => {
    console.error(`Erro de conexão: ${erro}`)
})
conexao.once('open', () => {
    console.log('Conexão com o BD feita com sucesso!')
})

const app = express()
routes(app)

app.use(manipulador404)

app.use(manipuladorDeErros)

export default app
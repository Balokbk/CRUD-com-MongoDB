import express from 'express'
import AutorController from '../controllers/autorController.js'
import paginar from '../middleWares/paginar.js'

const routes = express.Router()

routes.get('/autores', AutorController.listarAutores, paginar)
routes.get('/autores/:id', AutorController.listarAutorPorId)
routes.post('/autores', AutorController.cadastrarAutor)
routes.put('/autores/:id', AutorController.atualizarAutor)
routes.delete('/autores/:id', AutorController.deletarAutor)
export default routes
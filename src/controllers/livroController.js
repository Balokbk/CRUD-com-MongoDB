import { livro } from "../models/index.js";
import { autor } from '../models/Autor.js'
import { editora } from '../models/Editora.js'
import PaginaNaoEncontrada from "../erros/PaginaNaoEcontrada.js";

class LivroController{
    static listarLivros(req, res, next){
        try{
            const buscaLivros = livro.find()
            req.resultado = buscaLivros
            next();
        }catch(erro){
            next(erro)
        }
    }

    static async listarLivroPorId(req, res, next){
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            if(livroEncontrado !== null){
                res.status(200).json(livroEncontrado)
            }else{
                next(new PaginaNaoEncontrada('ID do livro não encontrado'))
            }
        }catch(erro){
            next(erro)
        }
    }
    
    static async cadastrarLivro(req,res, next){
        const novoLivro = req.body
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const editoraEcontrada = await editora.findById(novoLivro.editora)
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }, editora:{ ...editoraEcontrada._doc }}
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({message: 'Livro cadastrado com sucesso!', livro: livroCriado})
        }catch(erro){
            next(erro)
        }
    }
    
    static async atualizarLivro(req, res, next){
        try{
            const id = req.params.id
            if(await livro.findById(id) !== null){
                await livro.findByIdAndUpdate(id, req.body)
                res.status(200).json({message: 'Livro atualizado'})
            }else{
                next(new PaginaNaoEncontrada('ID do livro não encontrado'))
            }
        }catch(erro){
            next(erro)
        }
    }
    
    static async deletarLivro(req, res, next){
        try{
            const id = req.params.id
            if(await livro.findById(id) !== null){
                await livro.findByIdAndDelete(id)
                res.status(200).json({message: 'Livro deletado com sucesso'})
            }else{
                next(new PaginaNaoEncontrada('ID do livro não encontrado'))
            }
        }catch(erro){
            next(erro)
        }
    }
    
    static async listarLivrosPorFiltro(req, res, next){
        const busca = processaBusca(req.query)
        try{
            const livroResultado = livro.find(busca)
            req.resultado = livroResultado
            next()
        }catch(erro){
            next(erro)
        }
    }
}

function processaBusca(req){
    const {editora, titulo, minPaginas, maxPaginas, autor} = req

    const busca = {}

    if(titulo) busca.titulo = { $regex: titulo, $options: 'i'}
    if(minPaginas || maxPaginas) busca['paginas'] = {}
    if(minPaginas) busca['paginas'].$gte = minPaginas
    if(maxPaginas) busca['paginas'].$lte = maxPaginas
    if(editora)busca['editora.nomeEditora'] = { $regex: editora, $options: 'i'}
    if(autor) busca['autor.nome'] = { $regex: autor, $options:'i' }
    
    return busca
}

export default LivroController
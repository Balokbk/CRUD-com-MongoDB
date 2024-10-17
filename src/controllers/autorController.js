import PaginaNaoEncontrada from "../erros/PaginaNaoEcontrada.js";
import { autor } from "../models/index.js";

class AutorController{
    static listarAutores(req, res, next){
        try{
            const listaAutores = autor.find()
            req.resultado = listaAutores
            next()
        }catch(erro){
            next(erro)
        }
    }

    static async listarAutorPorId(req, res, next){
        try{
            const id = req.params.id
            const autorEncontrado = await autor.findById(id)
            if(autorEncontrado !== null){
                res.status(200).json(autorEncontrado)
            }else{
               next(new PaginaNaoEncontrada('ID do autor não localizado'))
            }
        }catch(erro){
            next(erro)
        }
    }
    
    static async cadastrarAutor(req,res,next){
        try{
            const novoAutor = await autor.create(req.body)
            res.status(201).json({message: 'Autor cadastrado com sucesso!', autor: novoAutor})
        }catch(erro){
            next(erro)
        }
    }
    
    static async atualizarAutor(req, res, next){
        try{
            const id = req.params.id
            if(await autor.findById(id) !== null){
                await autor.findByIdAndUpdate(id, req.body)
                res.status(200).json({message: 'Autor atualizado'})
            }else{
                next(new PaginaNaoEncontrada('ID do autor não localizado'))
            }
        }catch(erro){
            next(erro)
        }
    }
    
    static async deletarAutor(req, res, next){
        try{
            const id = req.params.id
            if(await autor.findById(id) !== null){
                await autor.findByIdAndDelete(id)
                res.status(200).json({message: 'Autor deletado com sucesso'})
            }else{
                next(new PaginaNaoEncontrada('ID do autor não localizado'))
            }
        }catch(erro){
            next(erro)
        }
    }
}

export default AutorController
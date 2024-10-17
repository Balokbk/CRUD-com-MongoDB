import PaginaNaoEncontrada from '../erros/PaginaNaoEcontrada.js'
import { editora } from '../models/index.js'

class EditoraController{
    static listarEditoras(req, res, next){
        try{
            const listaEditoras = editora.find()
            req.resultado = listaEditoras
            next()
        }catch(erro){
            next(erro)
        }
    }

    static async listarEditoraPorId(req, res, next){
        try{
            const id = req.params.id
            const editoraEncontrada = await editora.findById(id)
            if(editoraEncontrada !== null){
                res.status(200).json(editoraEncontrada)
            }else{
                next(new PaginaNaoEncontrada('ID de editora não encontrado'))
            }
        }catch(erro){
            next(erro)
        }
    }
    
    static async cadastrarEditora(req, res, next){
        try{
            const novaEditora = await editora.create(req.body)
            res.status(201).json({message: 'Editora criada com sucesso', editora: novaEditora})
        }catch(erro){
            next(erro)
        }
    }
    
    static async atualizarEditora(req, res, next){
        try{
            const id = req.params.id
            if(await editora.findById(id) !== null){
                await editora.findByIdAndUpdate(id, req.body)
                res.status(200).json({message: 'Editora atualizada com sucesso'})
            }else{
                next(new PaginaNaoEncontrada('ID de editora não encontrado'))
            }
        }catch(erro){
            next(erro)
        }
    }
    
    static async deletarEditora(req, res, next){
        try{
            const id = req.params.id
            if(await editora.findById(id) !== null){
                await editora.findByIdAndDelete(id)
                res.status(200).json({message: 'Editora deletada com sucesso'})
            }else{
                next(new PaginaNaoEncontrada('ID de editora não encontrado'))
            }
        }catch(erro){
            next(erro)
        }
    }
}

export default EditoraController
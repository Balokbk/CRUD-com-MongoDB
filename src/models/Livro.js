import mongoose from "mongoose"
import { autorSchema } from './Autor.js'
import { editoraSchema } from "./Editora.js"

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, 'O título do livro é obrigatório'] },
    preco: {type: Number},
    paginas: {type: Number, min:[10, 'Mínimo permitido de páginas é 10'], max: [5000, 'Máximo permitido de páginas é 5000']},
    editora: editoraSchema,
    autor: autorSchema
}, { versionKey: false })

const livro = mongoose.model('livros', livroSchema)

export default livro
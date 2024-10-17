import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nomeEditora: {type: String, required: [true, 'O nome da editora é obrigatório']}
}, {versionKey: false})

const editora = mongoose.model('editoras', editoraSchema)
export { editora, editoraSchema }
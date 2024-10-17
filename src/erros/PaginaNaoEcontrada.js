import ErroBase from "./ErroBase.js";

class PaginaNaoEncontrada extends ErroBase{
    constructor(mensagem = 'Página não encontrada'){
        super(mensagem, 404)
    }
}

export default PaginaNaoEncontrada
import PaginaNaoEncontrada from "../erros/PaginaNaoEcontrada.js"

function manipulador404(req, res, next){
    next(new PaginaNaoEncontrada)
}

export default manipulador404
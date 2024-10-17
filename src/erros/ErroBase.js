class ErroBase extends Error{
    constructor(mensagem = 'Erro interno do Servidor',status = 500){
        super()
        this.message = mensagem
        this.status = status
    }
    enviarResposta(res){
        res.status(this.status).json({
            mensagem: this.message,
            status: this.status
        })
    }
}
export default ErroBase
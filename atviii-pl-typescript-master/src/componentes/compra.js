export default function FormularioCadastroCompra(props){
    let tema = props.tema
    return (
        <div className="container-fluid">
        <form>
        <h4>Informações da compra:</h4>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Código do produto/serviço" aria-label="Código do produto/serviço" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
            </form>
        </div>
    )
 }
export default function FormularioCadastroServico(props){
    let tema = props.tema
    return (
        <div className="container-fluid">
        <form>
        <h4>Informações do serviço:</h4>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Código do serviço" aria-label="Código do serviço" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
        </div>
        </form>
        </div>
    )
}
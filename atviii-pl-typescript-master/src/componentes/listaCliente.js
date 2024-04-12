/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaCliente(props) {
    let tema = props.tema
    return (
        // Copiei os estilos do exercicio anterior
        <div className="container-fluid">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Cliente 1 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Cliente 2 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Cliente 3 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>
                        <p className='col'>Cliente 4 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Cliente 5 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                </div>
            </div>
    )
}
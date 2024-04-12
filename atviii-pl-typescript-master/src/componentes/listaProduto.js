/* eslint-disable jsx-a11y/anchor-is-valid */
// Criei esse arquivo
export default function ListaProduto(props) {
    let tema = props.tema
    return (
        // Copiei os estilos do exercicio anterior
        <div className="container-fluid">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Produto 1 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Produto 2 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Produto 3 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>
                        <p className='col'>Produto 4 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Produto 5 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                </div>
            </div>
    )
}
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

// Página para a listagem de serviços
export default class ListaServicos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Serviço 1 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Serviço 2 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Serviço 3 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>
                        <p className='col'>Serviço 4 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <p className='col'>Serviço 5 </p>
                        <button className='col m-2 btn btn-light'>Editar</button>
                        <button className='col m-2 btn btn-light'>Excluir</button>
                    </a>
                </div>
            </div>
        )
    }
}
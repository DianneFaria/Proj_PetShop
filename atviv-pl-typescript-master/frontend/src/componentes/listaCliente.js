import React, { useState, useEffect } from "react"
// Navigate serve para navegar entre paginas
import { useNavigate } from "react-router-dom"

/* eslint-disable jsx-a11y/anchor-is-valid */

export default function ListaCliente(props) {

    const [clientes, setClientes] = useState([])

    // Declarando a função navigate
    const navigate = useNavigate()

    // Código utiliza o hook useEffect em um componente React
    useEffect(()=> {
        if(clientes.length > 0) return;
        loadClientes()
    }, [])
    
    // Requisição para listar todos os clientes
    function loadClientes(){
        // Função fetch fazendo uma solicitação HTTP GET para a URL 
        fetch('http://localhost:32831/cliente/clientes', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(r=> r.json()).then(r=>{
            setClientes(r)
            console.log(r)
        })
    }

    
    function excluirCliente(id){
        // Função fetch para fazer uma solicitação HTTP DELETE
        fetch('http://localhost:32831/cliente/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        }).then(r=> {
            alert(r.status === 200 ? 'Cliente excluído com sucesso!' : 'Erro ao excluir cliente.')
            setClientes([])
            loadClientes()
        })
    }

    function editarCliente(cliente){
        navigate('/Atualizar', {state: cliente})
    }

    function formatEndereco(endereco){
        return `${endereco.rua} - ${endereco.numero}, ${endereco.codigoPostal}, ${endereco.bairro}, ${endereco.cidade}, ${endereco.estado}`
    }

    function formatTelefone(telefone){
        return `(${telefone.ddd}) ${telefone.numero}`
    }

    return (
        <div className="container-fluid">
            <div className="list-group">
                {clientes && clientes.length > 0 && clientes.map(cliente=> (
                    <a key={cliente.id} className="list-group-item list-group-item-action mt-2">
                        <h3 className='col'>{cliente.nome} </h3>
                        <p>Nome social: {cliente.nomeSocial}</p>
                        <p>Email: {cliente.email}</p>
                        <p>Endereço: {formatEndereco(cliente.endereco)}</p>
                        {cliente.endereco.informacoesAdicionais && cliente.endereco.informacoesAdicionais.length > 0 ? `(${cliente.endereco.informacoesAdicionais})` : ''}
                        {cliente.telefones && cliente.telefones.length > 0 && (
                            <>
                                <p>Telefone(s):</p>
                                {cliente.telefones.map(t => (
                                    <React.Fragment key={t.id}><p>  . {formatTelefone(t)}</p></React.Fragment>
                                ))}
                            </>
                        )}
                        <button className='col m-2 btn btn-light' onClick={(e)=> editarCliente(cliente)}>Editar</button>
                        <button className='col m-2 btn btn-light' onClick={(e)=> excluirCliente(cliente.id)}>Excluir</button>
                    </a>
                ))}
            </div>
        </div>
    )
}
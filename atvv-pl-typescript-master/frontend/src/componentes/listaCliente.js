import React, { useState, useEffect } from 'react';
import api from '../services/api';


export default function ListaCliente(props) {
    const [clientes, setClientes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [clienteEditando, setClienteEditando] = useState(null); 


    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await api.get('/listaCliente'); 
                setClientes(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao obter clientes:', error);
                setIsLoading(false);
            }
        };

        fetchClientes();
    }, []); // Este efeito será executado apenas uma vez ao montar o componente


    const handleEditarCliente = (cliente) => {
        setClienteEditando(cliente);
    };    

    const handleSalvarAlteracoes = async () => {
        try {
            const response = await api.put(`/editarCliente/${clienteEditando.cpf}`, clienteEditando);
            console.log('Cliente atualizado:', response.data);
            // Atualizar a lista de clientes após a atualização
            const updatedClientes = clientes.map(cliente => {
                if (cliente.cpf === clienteEditando.cpf) {
                    return response.data;
                }
                return cliente;
            });
            setClientes(updatedClientes);
            setClienteEditando(null);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
        }
    };

    const handleExcluirCliente = async (cpf) => {
        try {
            await api.delete(`/excluirCliente/${cpf}`);
            const updatedClientes = clientes.filter(cliente => cliente.cpf !== cpf);
            setClientes(updatedClientes);
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
        }
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="container-fluid">
            {clienteEditando ? (
                <div>
                    {/* Formulário de edição do cliente */}
                    <h4>Editar Cliente</h4>
                    <form>
                        {/* Inputs para editar as informações do cliente */}
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome" 
                            value={clienteEditando.nome} 
                            onChange={event => setClienteEditando(prevState => ({
                                ...prevState,
                                nome: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome Social" 
                            value={clienteEditando.nomeSocial} 
                            onChange={event => setClienteEditando(prevState => ({
                                ...prevState,
                                nomeSocial: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Cpf" 
                            value={clienteEditando.cpf} 
                            onChange={event => setClienteEditando(prevState => ({
                                ...prevState,
                                cpf: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="dataCpf" 
                            value={clienteEditando.dataCpf} 
                            onChange={event => setClienteEditando(prevState => ({
                                ...prevState,
                                dataCpf: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="rg" 
                            value={clienteEditando.rg} 
                            onChange={event => setClienteEditando(prevState => ({
                                ...prevState,
                                rg: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="dataRg" 
                            value={clienteEditando.dataRg} 
                            onChange={event => setClienteEditando(prevState => ({
                                ...prevState,
                                dataRg: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="telefone" 
                            value={clienteEditando.telefone} 
                            onChange={event => setClienteEditando(prevState => ({
                                ...prevState,
                                telefone: event.target.value
                            }))} />
                        <p />
                        <button type="submit"
                        onClick={handleSalvarAlteracoes}
                        className="btn btn-primary">Salvar Alterações</button>
                    </form>
                </div>
            ) : (
                <div>
                    {/* Lista de clientes */}
                    <div className="list-group">
                        {clientes.map(cliente => (
                            <div key={cliente.id} className="list-group-item list-group-item-action">
                                <p className='col'>Nome: {cliente.nome}</p>
                                <p className='col'>CPF: {cliente.cpf}</p>

                                <button className='col m-2 btn btn-light' 
                                onClick={() => handleEditarCliente(cliente)}>Editar</button>

                                <button className='col m-2 btn btn-light'
                                onClick={() => handleExcluirCliente(cliente.cpf)}>Excluir</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}    


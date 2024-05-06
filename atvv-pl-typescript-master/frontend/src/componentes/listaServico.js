import React, { useState, useEffect } from 'react';
import api from '../services/api';


export default function ListaCliente(props) {
    const [servicos, setServicos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [servicoEditando, setServicoEditando] = useState(null); 

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await api.get('/listaServico'); 
                setServicos(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao obter serviços:', error);
                setIsLoading(false);
            }
        };

        fetchClientes();
    }, []); // Este efeito será executado apenas uma vez ao montar o componente

    const handleEditarServico = (servico) => {
        setServicoEditando(servico);
    }; 

    const handleSalvarAlteracoes = async () => {
        try {
            const response = await api.put(`/editarServico/${servicoEditando.codigoServico}`, servicoEditando);
            console.log('Serviço atualizado:', response.data);
            // Atualizar a lista de serviços após a atualização
            const updatedServicos = servicos.map(servico => {
                if (servico.cpf === servicoEditando.codigoServico) {
                    return response.data;
                }
                return servico;
            });
            setServicos(updatedServicos);
            setServicoEditando(null);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao atualizar servico:', error);
        }
    };

    const handleExcluirServico = async (codigoServico) => {
        try {
            await api.delete(`/excluirServico/${codigoServico}`);
            const updatedServicos = servicos.filter(servico => servico.codigoServico !== codigoServico);
            setServicos(updatedServicos);
        } catch (error) {
            console.error('Erro ao excluir serviço:', error);
        }
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="container-fluid">
            {servicoEditando ? (
                <div>
                    {/* Formulário de edição do serviço */}
                    <h4>Editar Serviço</h4>
                    <form>
                        {/* Inputs para editar as informações do serviço */}
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Código" 
                            value={servicoEditando.codigoServico} 
                            onChange={event => setServicoEditando(prevState => ({
                                ...prevState,
                                codigoServico: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome" 
                            value={servicoEditando.nomeServico} 
                            onChange={event => setServicoEditando(prevState => ({
                                ...prevState,
                                nomeServico: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Descrição" 
                            value={servicoEditando.descricaoServico} 
                            onChange={event => setServicoEditando(prevState => ({
                                ...prevState,
                                descricaoServico: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Preço" 
                            value={servicoEditando.precoServico} 
                            onChange={event => setServicoEditando(prevState => ({
                                ...prevState,
                                precoServico: event.target.value
                            }))} /> 
                        <p />
                        <button type="submit"
                        onClick={handleSalvarAlteracoes}
                        className="btn btn-primary">Salvar Alterações</button>
                    </form>
                </div>
            ) : (
                <div>
                    {/* Lista de serviços */}
                    <div className="list-group">
                        {servicos.map(servico => (
                            <div key={servico.id} className="list-group-item list-group-item-action">
                                <p className='col'>Nome do serviço: {servico.nomeServico}</p>

                                <button className='col m-2 btn btn-light' 
                                    onClick={() => handleEditarServico(servico)}>Editar</button>

                                <button className='col m-2 btn btn-light'
                                    onClick={() => handleExcluirServico(servico.codigoServico)}>Excluir</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}


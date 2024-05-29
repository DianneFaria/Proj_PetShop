import React, { useState, useEffect } from 'react';
import api from '../services/api';


export default function ListaCliente(props) {
    const [compras, setCompras] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [compraEditando, setCompraEditando] = useState(null); 


    useEffect(() => {
        const fetchCompras = async () => {
            try {
                const response = await api.get('/listaCompra'); 
                setCompras(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao obter compras:', error);
                setIsLoading(false);
            }
        };

        fetchCompras();
    }, []); // Este efeito será executado apenas uma vez ao montar o componente


    const handleEditarCompra = (compra) => {
        setCompraEditando(compra);
    };    

    const handleSalvarAlteracoes = async () => {
        try {
            const response = await api.put(`/editarCompra/${compraEditando.codigoCompra}`, compraEditando);
            console.log('Compra atualizada:', response.data);
            // Atualizar a lista de compras após a atualização
            const updatedCompras = compras.map(compra => {
                if (compra.codigoCompra === compraEditando.codigoCompra) {
                    return response.data;
                }
                return compra;
            });
            setCompras(updatedCompras);
            setCompraEditando(null);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao atualizar compra:', error);
        }
    };

    const handleExcluirCompra = async (codigoCompra) => {
        try {
            await api.delete(`/excluirCompra/${codigoCompra}`);
            const updatedCompras = compras.filter(compra => compra.codigoCompra !== codigoCompra);
            setCompras(updatedCompras);
        } catch (error) {
            console.error('Erro ao excluir compra:', error);
        }
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="container-fluid">
            {compraEditando ? (
                <div>
                    {/* Formulário de edição da compra */}
                    <h4>Editar Compra</h4>
                    <form>
                        {/* Inputs para editar as informações da compra */}
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome cliente" 
                            value={compraEditando.nomeCliente} 
                            onChange={event => setCompraEditando(prevState => ({
                                ...prevState,
                                nomeCliente: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="CPF Cliente" 
                            value={compraEditando.cpfCliente} 
                            onChange={event => setCompraEditando(prevState => ({
                                ...prevState,
                                cpfCliente: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome Produto/Serviço" 
                            value={compraEditando.nomeProdServ} 
                            onChange={event => setCompraEditando(prevState => ({
                                ...prevState,
                                nomeProdServ: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Código Produto/Serviço" 
                            value={compraEditando.codigoProdServ} 
                            onChange={event => setCompraEditando(prevState => ({
                                ...prevState,
                                codigoProdServ: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Valor" 
                            value={compraEditando.valor} 
                            onChange={event => setCompraEditando(prevState => ({
                                ...prevState,
                                valor: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="quantidade" 
                            value={compraEditando.quantidade} 
                            onChange={event => setCompraEditando(prevState => ({
                                ...prevState,
                                quantidade: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="tipoPet" 
                            value={compraEditando.tipoPet} 
                            onChange={event => setCompraEditando(prevState => ({
                                ...prevState,
                                tipoPet: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="racaPet" 
                            value={compraEditando.racaPet} 
                            onChange={event => setCompraEditando(prevState => ({
                                ...prevState,
                                racaPet: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="totalCompra" 
                            value={compraEditando.totalCompra} 
                            onChange={event => setCompraEditando(prevState => ({
                                ...prevState,
                                totalCompra: event.target.value
                            }))} />
                        <p />
                        <button type="submit"
                        onClick={handleSalvarAlteracoes}
                        className="btn btn-primary">Salvar Alterações</button>
                    </form>
                </div>
            ) : (
                <div>
                    {/* Lista de compras */}
                    <div className="list-group">
                        {compras.map(compra => (
                            <div key={compra.id} className="list-group-item list-group-item-action">
                                <p className='col'>Cliente: {compra.nomeCliente}</p>
                                <p className='col'>Produto/Serviço: {compra.nomeProdServ}</p>
                                <p className='col'>Valor Total: {compra.totalCompra}</p>

                                <button className='col m-2 btn btn-light' 
                                onClick={() => handleEditarCompra(compra)}>Editar</button>

                                <button className='col m-2 btn btn-light'
                                onClick={() => handleExcluirCompra(compra.codigoCompra)}>Excluir</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}    


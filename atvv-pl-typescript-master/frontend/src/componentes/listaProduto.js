import React, { useState, useEffect } from 'react';
import api from '../services/api';


export default function ListaCliente(props) {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [produtoEditando, setProdutoEditando] = useState(null);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await api.get('/listaProduto'); 
                setProdutos(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao obter produtos:', error);
                setIsLoading(false);
            }
        };

        fetchClientes();
    }, []); // Este efeito será executado apenas uma vez ao montar o componente

    const handleEditarProduto = (produto) => {
        setProdutoEditando(produto);
    };  

    const handleSalvarAlteracoes = async () => {
        try {
            const response = await api.put(`/editarProduto/${produtoEditando.codigoProduto}`, produtoEditando);
            console.log('Produto atualizado:', response.data);
            // Atualizar a lista de produtos após a atualização
            const updatedProdutos = produtos.map(produto => {
                if (produto.codigoProduto === produtoEditando.codigoProduto) {
                    return response.data;
                }
                return produto;
            });
            setProdutos(updatedProdutos);
            setProdutoEditando(null);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
        }
    };

    const handleExcluirProduto = async (codigoProduto) => {
        try {
            await api.delete(`/excluirProduto/${codigoProduto}`);
            const updatedProdutos = produtos.filter(produto => produto.codigoProduto !== codigoProduto);
            setProdutos(updatedProdutos);
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
        }
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="container-fluid">
            {produtoEditando ? (
                <div>
                    {/* Formulário de edição do produto */}
                    <h4>Editar Produto</h4>
                    <form>
                        {/* Inputs para editar as informações do produto */}
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Código" 
                            value={produtoEditando.codigoProduto} 
                            onChange={event => setProdutoEditando(prevState => ({
                                ...prevState,
                                codigoProduto: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome" 
                            value={produtoEditando.nomeProduto} 
                            onChange={event => setProdutoEditando(prevState => ({
                                ...prevState,
                                nomeProduto: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Descrição" 
                            value={produtoEditando.descricaoProduto} 
                            onChange={event => setProdutoEditando(prevState => ({
                                ...prevState,
                                descricaoProduto: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Preço" 
                            value={produtoEditando.precoProduto} 
                            onChange={event => setProdutoEditando(prevState => ({
                                ...prevState,
                                precoProduto: event.target.value
                            }))} /> 
                        <p />
                        <button type="submit"
                        onClick={handleSalvarAlteracoes}
                        className="btn btn-primary">Salvar Alterações</button>
                    </form>
                </div>
            ) : (
                <div>
                    {/* Lista de produtos */}
                    <div className="list-group">
                        {produtos.map(produto => (
                            <div key={produto.id} className="list-group-item list-group-item-action">
                                <p className='col'>Nome do produto: {produto.nomeProduto}</p>

                                <button className='col m-2 btn btn-light' 
                                    onClick={() => handleEditarProduto(produto)}>Editar</button>

                                <button className='col m-2 btn btn-light'
                                    onClick={() => handleExcluirProduto(produto.codigoProduto)}>Excluir</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}



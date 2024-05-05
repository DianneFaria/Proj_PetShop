import React, { useState, useCallback } from 'react';
import api from '../../services/api';

export default function FormularioCadastroProduto(props){
    let tema = props.tema

    const [codigoProduto, setCodigoProduto] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricaoProduto, setDescricaoProduto] = useState('');
    const [precoProduto, setPrecoProduto] = useState('');

    const produtoSubmit = useCallback(async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/produtos', {
                codigoProduto, nomeProduto, descricaoProduto, precoProduto
            });
            console.log(response.data);
            alert('Produto cadastrado com sucesso!');
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.error === "Erro: Produto já cadastrado!") {
                alert(error.response.data.error);
            } else {
                console.error(error);
                alert('Erro ao cadastrar produto.');
            }
        }
    }, [codigoProduto, nomeProduto, descricaoProduto, precoProduto])

    return (
        <div className="container-fluid">
        <form>
            <h4>Informações do produto:</h4>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Código do produto"
                    aria-label="Código do produto" 
                    aria-describedby="basic-addon1"
                    onChange={event => setCodigoProduto(event.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nome" 
                    aria-label="Nome" 
                    aria-describedby="basic-addon1"
                    onChange={event => setNomeProduto(event.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Descrição" 
                    aria-label="Descrição" 
                    aria-describedby="basic-addon1"
                    onChange={event => setDescricaoProduto(event.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Preço" 
                    aria-label="Preço" 
                    aria-describedby="basic-addon1"
                    onChange={event => setPrecoProduto(event.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    onClick={produtoSubmit}
                    style={{ background: tema }}>Cadastrar</button>
            </div>
            </form>
        </div>
    )
}
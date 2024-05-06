import React, { useState, useCallback } from 'react';
import api from '../../services/api';

export default function FormularioCadastroServico(props){
    let tema = props.tema

    const [codigoServico, setCodigoServico] = useState('');
    const [nomeServico, setNomeServico] = useState('');
    const [descricaoServico, setDescricaoServico] = useState('');
    const [precoServico, setPrecoServico] = useState('');

    const servicoSubmit = useCallback(async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/servicos', {
                codigoServico, nomeServico, descricaoServico, precoServico
            });
            console.log(response.data);
            alert('Serviço cadastrado com sucesso!');
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.error === "Erro: Serviço já cadastrado!") {
                alert(error.response.data.error);
            } else {
                console.error(error);
                alert('Erro ao cadastrar serviço.');
            }
        }
    }, [codigoServico, nomeServico, descricaoServico, precoServico])

    return (
        <div className="container-fluid">
        <form>
        <h4>Informações do serviço:</h4>
        <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Código do serviço" 
                aria-label="Código do serviço" 
                aria-describedby="basic-addon1"
                onChange={event => setCodigoServico(event.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Nome" 
                aria-label="Nome" 
                aria-describedby="basic-addon1"
                onChange={event => setNomeServico(event.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Descrição" 
                aria-label="Descrição" 
                aria-describedby="basic-addon1"
                onChange={event => setDescricaoServico(event.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Preço" 
                aria-label="Preço" 
                aria-describedby="basic-addon1"
                onChange={event => setPrecoServico(event.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                onClick={servicoSubmit}
                style={{ background: tema }}>Cadastrar</button>
        </div>
        </form>
        </div>
    )
}
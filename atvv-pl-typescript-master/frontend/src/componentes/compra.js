import React, { useState, useCallback } from 'react';
import api from '../services/api';


export default function FormularioCadastroCompra(props){
    let tema = props.tema

    const [codigoCompra, setCodigoCompra] = useState('');
    const [cpfCliente, setCpfCliente] = useState('');
    const [codigoProdServ, setCodigoProdServ] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const compraSubmit = useCallback(async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/compras', {
                codigoCompra, cpfCliente, codigoProdServ, quantidade
            });
            console.log(response.data);
            alert('Compra cadastrada com sucesso!');
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.error === "Erro: Compra já cadastrada!") {
                alert(error.response.data.error);
            } else {
                console.error(error);
                alert('Erro ao cadastrar compra.');
            }
        }
    }, [codigoCompra, cpfCliente, codigoProdServ, quantidade])

    return (
        <div className="container-fluid">
        <form>
        <h4>Informações da compra:</h4>
        <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Código da compra" 
                    aria-label="Código da compra" 
                    aria-describedby="basic-addon1"
                    onChange={event => setCodigoCompra(event.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="CPF do cliente" 
                    aria-label="CPF do cliente" 
                    aria-describedby="basic-addon1"
                    onChange={event => setCpfCliente(event.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Código do produto/serviço" 
                    aria-label="Código do produto/serviço" 
                    aria-describedby="basic-addon1"
                    onChange={event => setCodigoProdServ(event.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Quantidade" 
                    aria-label="Quantidade" 
                    aria-describedby="basic-addon1"
                    onChange={event => setQuantidade(event.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    onClick={compraSubmit}
                    style={{ background: tema }}>Cadastrar</button>
            </div>
        </form>
        </div>
    )
 }
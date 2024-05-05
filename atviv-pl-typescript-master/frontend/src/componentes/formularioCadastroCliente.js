import { useState } from "react"
import { useNavigate } from "react-router-dom"

const clienteObj = {
    nome: '',
    nomeSocial: '', 
    email: '', 
    endereco: { 
        codigoPostal: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        informacoesAdicionais: '',
    },
    telefones: []
}

export default function FormularioCadastroCliente(props) {

    const [cliente, setCliente] = useState(clienteObj)

    const navigate = useNavigate()

    function adicionarTelefone(){
        const telefones = [...cliente.telefones, { ddd: '', numero: ''} ]
        setCliente({...cliente, telefones})
    }

    function validarCadastro(){
        if(cliente.nome.trim().length === 0) return false
        if(cliente.nomeSocial.trim().length === 0) return false
        if(cliente.email.trim().length === 0) return false
        if(cliente.endereco.codigoPostal.trim().length === 0) return false
        if(cliente.endereco.rua.trim().length === 0) return false
        if(cliente.endereco.numero.trim().length === 0) return false
        if(cliente.endereco.bairro.trim().length === 0) return false
        if(cliente.endereco.cidade.trim().length === 0) return false
        if(cliente.endereco.estado.trim().length === 0) return false
        if(cliente.telefones.length === 0) return false

        cliente.telefones.forEach(t=> {
            if(t.ddd.trim().length === 0) return false;
            if(t.numero.trim().length === 0) return false;
        })

        return true;
    }

    function salvar(){
        const isValid = validarCadastro()
        if(!isValid){
            alert('Preencha todos os campos obrigatórios!')
            return;
        }

        fetch('http://localhost:32831/cliente/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        }).then(r=> {
            alert(r.status === 200 ? 'Cliente cadastrado com sucesso!' : 'Erro ao cadastrar cliente.')
            navigate('/')
        })
    }

    return (
        <div className="container-fluid">
            <h4>Informações do cliente:</h4>
            <div className="input-group mb-3">
                <input 
                    value={cliente.nome} 
                    onChange={(e)=> setCliente({...cliente, nome: e.target.value})} 
                    type="text" 
                    className="form-control" 
                    placeholder="Nome *" 
                    aria-label="Nome" 
                    aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input 
                    value={cliente.nomeSocial} 
                    onChange={(e)=> setCliente({...cliente, nomeSocial: e.target.value})} 
                    type="text" 
                    className="form-control" 
                    placeholder="Nome social *" 
                    aria-label="Nome social" 
                    aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3"> 
                <input 
                    value={cliente.email} 
                    onChange={(e)=> setCliente({...cliente, email: e.target.value})} 
                    type="text" 
                    className="form-control" 
                    placeholder="E-mail *" 
                    aria-label="E-mail" 
                    aria-describedby="basic-addon1" />
            </div>
            <h4 className='mt-2'>Endereço:</h4>
                <div className="input-group mb-3">
                    <input 
                        value={cliente.endereco.codigoPostal} 
                        onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, codigoPostal: e.target.value + ''}})} 
                        type="number" 
                        className="form-control" 
                        placeholder="Código Postal *" 
                        aria-label="Código Postal" 
                        aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input 
                        value={cliente.endereco.rua} 
                        onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, rua: e.target.value}})} 
                        type="text" 
                        className="form-control" 
                        placeholder="Rua *" 
                        aria-label="Rua" 
                        aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input 
                        value={cliente.endereco.numero} 
                        onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, numero: e.target.value + ''}})} 
                        type="number" 
                        className="form-control" 
                        placeholder="Número *" 
                        aria-label="Número" 
                        aria-describedby="basic-addon1" />                    
                </div>
                <div className="input-group mb-3">
                    <input 
                        value={cliente.endereco.bairro} 
                        onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, bairro: e.target.value}})} 
                        type="text" 
                        className="form-control" 
                        placeholder="Bairro *" 
                        aria-label="Bairro" 
                        aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input 
                        value={cliente.endereco.cidade} 
                        onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, cidade: e.target.value}})} 
                        type="text" 
                        className="form-control" 
                        placeholder="Cidade *" 
                        aria-label="Cidade" 
                        aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input 
                        value={cliente.endereco.estado} 
                        onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, estado: e.target.value}})} 
                        type="text" 
                        className="form-control" 
                        placeholder="Estado *" 
                        aria-label="Estado" 
                        aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input 
                        value={cliente.endereco.informacoesAdicionais} 
                        onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, informacoesAdicionais: e.target.value}})} 
                        type="text" 
                        className="form-control" 
                        placeholder="Informações adicionais (Opcional)" 
                        aria-label="Informações adicionais" 
                        aria-describedby="basic-addon1" />
                </div>
            <div className='m-4'>
                {cliente.telefones.map((tel, i) => (
                    <div key={i} className="input-group mb-3">
                        <input 
                            value={tel.ddd} 
                            onChange={(e)=> {
                                const telefones = [...cliente.telefones]
                                const tel = telefones[i]
                                if(tel){
                                    telefones[i].ddd = e.target.value + ''
                                }
                                setCliente({...cliente, telefones})
                            }}
                            type="number" 
                            className="form-control" 
                            placeholder="DDD *" 
                            aria-label="DDD" 
                            aria-describedby="basic-addon1" />
                        <input 
                            value={tel.numero} 
                            onChange={(e)=> {
                                const telefones = [...cliente.telefones]
                                const tel = telefones[i]
                                if(tel){
                                    telefones[i].numero = e.target.value + ''
                                }
                                setCliente({...cliente, telefones})
                            }}
                            type="number" 
                            className="form-control" 
                            placeholder="Telefone *" 
                            aria-label="Telefone" 
                            aria-describedby="basic-addon1" />
                    </div>
                ))}
                <button className='btn btn-sm btn-light' onClick={adicionarTelefone}>+ Adicionar Telefone</button>
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" onClick={salvar} style={{ background: "#e3f2fd" }}>Cadastrar</button>
            </div>
        </div>
    )
}
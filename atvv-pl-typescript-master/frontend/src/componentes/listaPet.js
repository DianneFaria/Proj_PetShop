import React, { useState, useEffect } from 'react';
import api from '../services/api';


export default function ListaPet(props) {
    const [pets, setPets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [petEditando, setPetEditando] = useState(null); 


    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await api.get('/listaPet'); 
                setPets(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao obter pets:', error);
                setIsLoading(false);
            }
        };

        fetchClientes();
    }, []); // Este efeito será executado apenas uma vez ao montar o componente


    const handleEditarPet = (pet) => {
        setPetEditando(pet);
    };    

    const handleSalvarAlteracoes = async () => {
        try {
            const response = await api.put(`/editarPet/${petEditando.nomePet}`, petEditando);
            console.log('Pet atualizado:', response.data);
            // Atualizar a lista de pets após a atualização
            const updatedPets = pets.map(pet => {
                if (pet.nomePet === petEditando.nomePet) {
                    return response.data;
                }
                return pet;
            });
            setPets(updatedPets);
            setPetEditando(null);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao atualizar pet:', error);
        }
    };

    const handleExcluirPet = async (nomePet) => {
        try {
            await api.delete(`/excluirPet/${nomePet}`);
            const updatedPets = pets.filter(pet => pet.nomePet !== nomePet);
            setPets(updatedPets);
        } catch (error) {
            console.error('Erro ao excluir pet:', error);
        }
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="container-fluid">
            {petEditando ? (
                <div>
                    {/* Formulário de edição do pet */}
                    <h4>Editar Pet</h4>
                    <form>
                        {/* Inputs para editar as informações do pet */}
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="cpfDono" 
                            value={petEditando.cpfDono} 
                            onChange={event => setPetEditando(prevState => ({
                                ...prevState,
                                cpfDono: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="nomePet" 
                            value={petEditando.nomePet} 
                            onChange={event => setPetEditando(prevState => ({
                                ...prevState,
                                nomePet: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="tipo" 
                            value={petEditando.tipo} 
                            onChange={event => setPetEditando(prevState => ({
                                ...prevState,
                                tipo: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="raca" 
                            value={petEditando.raca} 
                            onChange={event => setPetEditando(prevState => ({
                                ...prevState,
                                raca: event.target.value
                            }))} />
                        <p />
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="genero" 
                            value={petEditando.genero} 
                            onChange={event => setPetEditando(prevState => ({
                                ...prevState,
                                genero: event.target.value
                            }))} />
                        <p />
                        <button type="submit"
                        onClick={handleSalvarAlteracoes}
                        className="btn btn-primary">Salvar Alterações</button>
                    </form>
                </div>
            ) : (
                <div>
                    {/* Lista de pets */}
                    <div className="list-group">
                        {pets.map(pet => (
                            <div key={pet.id} className="list-group-item list-group-item-action">
                                <p className='col'>CPF do dono: {pet.cpfDono}</p>
                                <p className='col'>Nome do pet: {pet.nomePet}</p>

                                <button className='col m-2 btn btn-light' 
                                onClick={() => handleEditarPet(pet)}>Editar</button>

                                <button className='col m-2 btn btn-light'
                                onClick={() => handleExcluirPet(pet.nomePet)}>Excluir</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}    


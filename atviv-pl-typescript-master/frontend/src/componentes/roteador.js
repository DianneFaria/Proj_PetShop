/* eslint-disable no-unused-vars */
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
// Inicializou a biblioteca que cria as rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioEdicaoCliente from "./formularioEdicaoCliente";

export default function Roteador() {

    function Barra(){
        return (
            <BarraNavegacao tema="#e3f2fd" botoes={['Clientes', 'Cadastrar']} />
        )
    }

    return (
        // Forma padrão da biblioteca react-router-dom chamar as rotas
        <BrowserRouter>
            <Routes>
                <Route path="*" index element={<><Barra /><ListaCliente /></>} />
                <Route path="/Clientes" element={<><Barra /><ListaCliente /></>} />
                <Route path="/Cadastrar" element={<><Barra /><FormularioCadastroCliente /></>} />
                <Route path="/Atualizar" element={<><Barra /><FormularioEdicaoCliente /></>} />
            </Routes>
        </BrowserRouter>
    )
}
/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import FormularioCadastroClienteEPet from "./cliente/formularioCadastroClienteEPet";
import FormularioCadastroProduto from "./produto/formularioCadastroProduto";
import FormularioCadastroServico from "./servico/formularioCadastroServico";
import FormularioCadastroCompra from "./compra";
import Analises from "./analises";


export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente/Pet', 'Cadastrar Produto', 'Cadastrar Serviço', 'Comprar', 'Análises']} />
        if (tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastrar Cliente/Pet') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroClienteEPet tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastrar Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastrar Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Comprar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCompra tema="#e3f2fd" />
                </>
            )
        }else {
            return (
                <>
                    {barraNavegacao}
                    <Analises tema="#e3f2fd" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}
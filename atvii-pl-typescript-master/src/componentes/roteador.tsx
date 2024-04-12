import React, { useState } from 'react';
import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from './listaClientes';
import ListaProduto from './listaProdutos';
import ListaServico from './listaServicos';
import FormularioCadastroClienteEPet from './cliente/formularioCadastroClienteEPet';
import FormularioCadastroProduto from './produto/formularioCadastroProduto';
import FormularioCadastroServico from './servico/formularioCadastroServico';
import FormularioCadastroCompra from './compra';
import Analises from './analises';



type State = {
    tela: string
}

export default class Roteador extends React.Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: React.MouseEvent<HTMLButtonElement>) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = (
            <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente/Pet', 'Cadastrar Produto', 'Cadastrar Serviço', 'Comprar', 'Análises']} />
        );

        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar Cliente/Pet') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroClienteEPet tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Comprar') {
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
}

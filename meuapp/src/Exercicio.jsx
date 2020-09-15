import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};


export default props => {
    const dados = mario;
    let soma = 0;

    function Somar(){
       for (let index = 0; index < dados.compras.length; index++) {
            const element = dados.compras[index];
            const numeros = +element.preco.split('R$ ').join('');
            soma += numeros;
        }
        return soma;
    }

    return (
        <div>
            <h1>Exercicios</h1>
            <h2>{dados.cliente}</h2>
            <div>
                <p>Idade: {dados.idade}</p>
                <p>Compras: {dados.compras.map(item => `${item.nome} ${item.preco} `)}</p>
                <p>Situação cadastral: {dados.ativa === true ? "Ativa" : "Inativa"}</p>
                <p>Total gastos = {Somar()}</p>
            </div>
        </div>
    )
};
import React from 'react'
import Produtos2 from './Produtos2';
import Titulo from './Titulo'

const Produtos = () => {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];
    
    produtos.map(prod =>{
        const {nome, propriedades} = prod;
        console.log(nome, propriedades)
    })
    
    return (
        <section>
            <Titulo texto="Produtos"></Titulo>
    {produtos.map(produtos => <Produtos2 key={produtos.nome} {...produtos}></Produtos2>)}
        </section>
    )
}

export default Produtos

import React from 'react';



export default props => {
    const nome = "Ricardo";
    const ativo = true;
    const produtos = ['produto 1', 'produto 2', 'produto 3'];



    const estiloH1 = {
        color: "red",
        fontSize: "3rem",
        fontFamily: "Helvetica",
    };


    const livros = [
        { nome: 'A Game of Thrones', ano: 1996 },
        { nome: 'A Clash of Kings', ano: 1998 },
        { nome: 'A Storm of Swords', ano: 2000 },
    ];






    return (
        <div>
            {/* <a className="ativo" href="https://www.google.com">site</a>
            <label htmlFor="input">Titutlo do input</label>
            <div>
                {nome}
                <p className={ativo ? "ativo" : "inativo"}>Palavra com classe ternaria</p>
                <h1 style={{fontFamily: "sans-serif", fontSize: '1rem'}}>Titulo com classes css inline</h1>
                <h1 style={estiloH1}>Titulo com classes css</h1>
            </div> */}

            {/* <div>
                <ul>
                    {produtos.map((item) => <li key={item}>{item}</li>)}
                </ul>
            </div> */}

            {/* <ul>
                {livros.filter(({ano}) => ano >= 1998 ).map(({ nome, ano }) => <li key={nome}>{nome} - {ano}</li>)}
            </ul> */}

        </div>
    )

}
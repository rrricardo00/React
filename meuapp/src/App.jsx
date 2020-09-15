import React from 'react';


export default props => {
    const nome = "Ricardo";
    const ativo = true;

    const estiloH1 = {
        color: "red",
        fontSize: "3rem",
        fontFamily: "Helvetica",
    };

    return (
        <div>
            <a className="ativo" href="https://www.google.com">site</a>
            <label htmlFor="input">Titutlo do input</label>
            <div>
                {nome}
                <p className={ativo ? "ativo" : "inativo"}>Palavra com classe ternaria</p>
                <h1 style={{fontFamily: "sans-serif", fontSize: '1rem'}}>Titulo com classes css inline</h1>
                <h1 style={estiloH1}>Titulo com classes css</h1>
            </div>

        </div>
    )

}
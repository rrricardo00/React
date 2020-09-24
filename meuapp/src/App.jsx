import React from 'react';

// const Titulo = ({cor, texto, children}) => {
// return <h1 style={{color: cor}}>{texto} {children}</h1>    
// };


const button = {}

export default props => {


    // const nome = "Ricardo";
    // const ativo = true;
    // const produtos = ['produto 1', 'produto 2', 'produto 3'];

    // const estiloH1 = {
    //     color: "red",
    //     fontSize: "3rem",
    //     fontFamily: "Helvetica",
    // };


    // const livros = [
    //     { nome: 'A Game of Thrones', ano: 1996 },
    //     { nome: 'A Clash of Kings', ano: 1998 },
    //     { nome: 'A Storm of Swords', ano: 2000 },
    // ];

    // const produtos = [
    //     {
    //         id: 1,
    //         nome: 'Smartphone',
    //         preco: 'R$ 2000',
    //         cores: ['#29d8d5', '#252a34', '#fc3766'],
    //     },
    //     {
    //         id: 2,
    //         nome: 'Notebook',
    //         preco: 'R$ 3000',
    //         cores: ['#ffd045', '#d4394b', '#f37c59'],
    //     },
    //     {
    //         id: 3,
    //         nome: 'Tablet',
    //         preco: 'R$ 1500',
    //         cores: ['#365069', '#47c1c8', '#f95786'],
    //     },
    // ];

    // const valor = 1500;


    // function handleClick(teste) {
    //     console.log(teste.target)
    // }

    //window/document events usar normal e passar para dentro de um hook(recomendado)

    // const Teste = () =>{
    //     const active = false;
    //     if(active){
    //         return <p>Teste</p>
    //     }else{
    //         return null
    //     }
    // }


    return (
        <React.Fragment>

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
            {/* {produtos.filter(({preco}) => Number(preco.split('R$ ').join('')) > valor).map(({id, nome, preco, cores}) => <div key={id} style={{backgroundColor: cores[Math.floor(Math.random() * cores.length)]}}>{nome} {Number(preco.split('R$ ').join(''))}</div>)} */}


            {/* <button onClick={(event)=>console.log(event.target.style.background = "red")}>Clique</button> */}


            {/* <Titulo cor="red" texto="Meu titulo">
              <p>Teste children vermelho</p>
            </Titulo>
            <Titulo cor="green" texto="Meu titulo 1"></Titulo>
            <Titulo cor="blue" texto="Meu titulo 2"></Titulo> */}

        </React.Fragment>
    )

}
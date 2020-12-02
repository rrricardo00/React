import React from 'react'

const Produto = ({ produto }) => {

    // React.useEffect(() => {
    //     function handleScoll(e) {
    //         console.log(e)
    //     }

    //     window.addEventListener('scroll', handleScoll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScoll);
    //     }
    // }, []);

    // return (
    //     <div style={{ height: '200vh' }}>
    //         <p>Meu Produto</p>
    //     </div>
    // )

    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        if (produto !== null)
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`).then(respons => respons.json()).then(response => setDados(response)); 
    }, [produto])

    if (dados === null) return null;
    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco}</p>
        </div>
    )



}

export default Produto

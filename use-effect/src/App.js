import React from 'react'
import Produto from './Produto';

const App = () => {
const [ativo, setAtivo] = React.useState(false);

  // const [contar, setContar] = React.useState(0);
  // const [dados, setDados] = React.useState(null);


  // React.useEffect(() => {
  //   fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
  //   .then(response => response.json())
  //   .then(response => setDados(response));
  // }, []);


  // React.useEffect(() =>{
  //   console.log('executou effect')
  // }, []);

  // React.useEffect(() =>{
  //   document.title = 'Total ' + contar;
  // }, [contar]);

 

  return (
    <div>
      {/* {dados && (<div>
        <h1>{dados.nome}</h1>
        <h3>{dados.preco * contar}</h3>
      </div>)}
      <button onClick={() => setContar(contar + 1)}>{contar}</button> */}
      {ativo && (<Produto></Produto>)}
      <button onClick={() => setAtivo(!ativo)}>Toggle</button>
      
    </div>
  )
}

export default App

import React from 'react'
import Produto from './Produto'

// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook

export const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(e) {
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`);
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }


  return (
    <div>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>
      {carregando && <p>Carregando</p>}
      {!carregando && dados && <Produto dados={dados}></Produto>}


    </div>
  )
}

export default App;

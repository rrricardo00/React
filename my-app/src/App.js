import React from 'react'
import Produto from './Produto'

export const App = () => {
  const [dados, setDados] = React.useState(null);

  function handleClick(e) {
    console.log(e.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>
      <Produto></Produto>
    </div>
  )
}

export default App;

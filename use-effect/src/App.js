import React from 'react'

const App = () => {


  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);


  React.useEffect(()=>{
    
  });


  // React.useEffect(() =>{
  //   console.log('executou effect')
  // }, []);

  // React.useEffect(() =>{
  //   document.title = 'Total ' + contar;
  // }, [contar]);


  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default App

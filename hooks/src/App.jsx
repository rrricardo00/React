import React from 'react'

const App = () => {

    const [ativo, setAtivo] = React.useState(true);

    return (
        <div>
           <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Ativado' : 'Desativado'}</button>
        </div>
    )
}

export default App

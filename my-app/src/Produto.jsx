import React from 'react'

const Produto = ({ dados }) => {
    return (
        <div>
            
            {dados.id}<br />
            {dados.preco}<br/>
            <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo}/>
        </div>
    )
}

export default Produto

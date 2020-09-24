import React from 'react';
import Header from './Header';
import Produtos from './Produtos';
import Home from './Home';

const Exercicio2 = () => {
    let Pagina = Produtos;
    const {pathname} = window.location;
    if(pathname === '/produtos'){
        Pagina = Produtos;
    }else{
        Pagina = Home;
    }

    return (
       
        <div>
            
            <Header></Header>
            
            <Pagina />
           
        </div>
    )
}

export default Exercicio2

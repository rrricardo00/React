import React from 'react'

const Produto = () => {

    React.useEffect(() => {
        function handleScoll(e) {
            console.log(e)
        }

        window.addEventListener('scroll', handleScoll);

        return () => {
            window.removeEventListener('scroll', handleScoll);
        }
    }, []);

    return (
        <div style={{ height: '200vh' }}>
            <p>Meu Produto</p>
        </div>
    )
}

export default Produto

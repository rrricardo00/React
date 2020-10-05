import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {

    const [modal, setModal] = React.useState(false)

    const [ativo, setAtivo] = React.useState(true);

    return (
        <div>
            <div>{modal ? 'Modal aberto' : 'Modal fechado'} </div>
            <Modal modal={modal} setModal={setModal}></Modal>
            <ButtonModal setModal={setModal}></ButtonModal>
           {/* <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Ativado' : 'Desativado'}</button> */}
        </div>
    )
}

export default App

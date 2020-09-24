import React from 'react';
import Button from './Button';
import Input from './Input';

export default () => {
    const arr = ['item 1', 'item 2']
    return (
        <React.Fragment>
            <Input id="email" label="Email" required></Input>
            <Input id="senha" type="password" label="Senha" required></Input>
            <Button item={arr}></Button>
        </React.Fragment>
    )

}
import React from 'react'

const Input = ({label, id, ...props}) => {
    return (
        <div>
            <label htmlFor={id} >{label}</label><br/>
            <input id={id} type="text" {...props} /><br/>
        </div>
    )
}

export default Input

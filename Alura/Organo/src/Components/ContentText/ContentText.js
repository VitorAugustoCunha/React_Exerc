import { useState } from 'react'
import './ContentText.css'

export const ContentText = (props) => {

    const onDigit = (e) => {
        props.on_Changed(e.target.value)
    }

    return (
        <div className='content-text'>
            <label>{props.name}</label>
            <input value={props.value} placeholder={props.placeholder} onChange={onDigit} required={props.required}/>
        </div>
    )
}

import React from 'react';
import './input-text.scss'

const InputText = ({type, classname, placeholder, change, value}) => {
  return (
    <>
        <input type={type ? type : "text"} value={value} onChange={change} className={`input ${classname}`} placeholder={placeholder}/>
    </>
  )
}

export default InputText
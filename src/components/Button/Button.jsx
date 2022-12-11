import React from 'react';
import './button.scss';

const Button = ({children, status=false, change}) => {
  return (
    <button onClick={change} disabled={!status} className={`button ${!status && 'inactive-button'}`}>{children}</button>
  )
}

export default Button
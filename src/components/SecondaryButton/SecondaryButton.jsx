import React from 'react';
import './secondary_button.scss';

const SecondaryButton = ({children}) => {
  return (
    <button className="secondary-button">
        {children}
    </button>
  )
}

export default SecondaryButton
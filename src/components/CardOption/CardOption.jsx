import React from "react";
import "./card_option.scss";

const CardOption = ({ path, text, click, value, selected }) => {
    return (
        <label className='card-option'>
            <div className={`card-image ${selected == value ? 'selected' : ''}`}>
                <img src={path} alt="" />
            </div>
            <p className="card-text">{text}</p>
            <input type="radio" onChange={click} name="option" value={value}/>
        </label>
    );
};

export default CardOption;

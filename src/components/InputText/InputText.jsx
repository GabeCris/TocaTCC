import React from "react";
import "./input-text.scss";

const InputText = ({
    type = "text",
    classname,
    placeholder,
    change,
    value,
    maxLength,
    inputNull,
}) => {
    return (
        <>
            <input
                type={type}
                value={value}
                onChange={change}
                className={`input ${classname} ${inputNull ? "inputNull" : ''}`}
                placeholder={placeholder}
                maxLength={maxLength}
            />
        </>
    );
};

export default InputText;

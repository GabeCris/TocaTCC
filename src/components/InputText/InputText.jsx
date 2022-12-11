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
    focus,
    disfocus
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
                onFocus={focus}
                onBlur={disfocus}
            />
        </>
    );
};

export default InputText;

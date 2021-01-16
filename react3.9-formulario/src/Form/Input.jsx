import { useState } from "react";

const Input = ({ children, inputId, state, setState, ...props }) => {


    return (
        <div>
            <label 
                htmlFor={inputId}>{children}</label>
            <input 
                id={inputId}
                name={inputId}
                type='text' 
                {...props}
            />
        </div>
    );
};

export default Input;

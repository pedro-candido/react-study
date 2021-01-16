import { useState } from "react";

const Select = ({ options, state, setState, ...props }) => {

    
    const handleChange = (event) => setState(event.target.value)

    return (
        <select value={state} onChange={handleChange} {...props}>
            <option value="" disabled>Selecione</option>
            {options.map((item, index) => (
                <option key={item} value={item} style={{ textTransform: 'capitalize' }}>
                    {item}
                </option>
            ))}
        </select>
    );
};

export default Select;

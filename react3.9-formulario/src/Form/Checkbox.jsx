const Checkbox = ({ state, setState, buttons }) => {
    const handleChange = (event) => {
        console.log(event.target.checked, event)
        if(event.target.checked) setState([...state, event.target.id])
        else {
            setState(
                state.filter((item) => item !== event.target.id)
            )
        }
    };

    return (
        <div>
            {buttons.map((button) => (
                <label
                    key={button}
                >
                    {button}
                    <input 
                        type='checkbox' 
                        name={button} 
                        id={button}
                        checked={state.includes(button)}
                        onChange={handleChange}
                    />
                </label>
            ))}
        </div>
    );
};

export default Checkbox;

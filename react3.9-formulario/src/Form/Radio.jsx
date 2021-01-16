const Radio = ({ state, setState, buttons }) => {
    const handleChange = (event) => {
        console.log(event);
        setState(event.target.value);
    };

    return (
        <>
            {buttons.map((button) => (
                <label key={button} htmlFor={button}>
                    {button}
                    <input
                        type='radio'
                        name='produtos'
                        value={button}
                        checked={state === button}
                        onChange={handleChange}
                        id={button}
                    />
                </label>
            ))}

            <br />
            {state}
        </>
    );
};

export default Radio;

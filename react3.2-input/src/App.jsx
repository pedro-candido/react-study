import { useState } from 'react';

const App = () => {
    const [form, setForm] = useState({
        nome: '',
        email: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setForm({ ...form, [id]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='nome'>Nome</label>
            <input
                type='text'
                id='nome'
                name='nome'
                value={form.nome}
                onChange={handleChange}
            />
            <br />
            <label htmlFor='email'>email</label>
            <input
                type='email'
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange}
            />

            <button type='submit'>Enviar</button>

            {form.nome}
            {form.email}
        </form>
    );
};

export default App;

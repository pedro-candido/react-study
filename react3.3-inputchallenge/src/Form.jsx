import { useState } from 'react';
import axios from 'axios';

const formFields = [
    { id: 'nome', label: 'Nome', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'senha', label: 'Senha', type: 'password' },
    { id: 'cep', label: 'Cep', type: 'text' },
    { id: 'rua', label: 'Rua', type: 'text' },
    { id: 'numero', label: 'Numero', type: 'text' },
    { id: 'bairro', label: 'Bairro', type: 'text' },
    { id: 'cidade', label: 'Cidade', type: 'text' },
    { id: 'estado', label: 'Estado', type: 'text' }
];

const Form = () => {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(form);
        try {
            const { data } = await axios.post(
                'https://ranekapi.origamid.dev/json/api/usuario',
                form
            );

            alert(`Usuário ${data.first_name} cadastrado`);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setForm({ ...form, [id]: value });
        console.log(id, value);
    };

    return (
        <form onSubmit={handleSubmit} className='w-25'>
            {formFields.map(field => <div
                key={field.id}
                className='d-flex flex-column'>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                    id={field.id}
                    name={field.id}
                    onChange={handleChange}
                    type={field.type}
                    value={form[field.id]}
                />
            </div>
            )}

            <button className='btn btn-primary mt-2' type='submit'>
                Enviar
            </button>
        </form>
    );
};

export default Form;

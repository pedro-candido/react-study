import { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';

const Form = () => {
    const [nome, setNome] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [option, setOption] = useState('');
    const [radio, setRadio] = useState('notebook');
    const [checkbox, setCheckbox] = useState([]);

    const [error, setError] = useState('')

    const handleBlur = (event) => {
        validateCep(event.target.value)
    };

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(validateCep(cep)) console.log('enviou')
        else console.log('nao enviou')
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input state={nome} setState={setNome} inputId='nome' required>
                Nome
            </Input>
            <Input
                onBlur={handleBlur}
                placeholder='Ex.:09540-635'
                onChange={handleCepChange}
                state={cep}
                setState={setCep}
                inputId='cep'
                required
            >
                Cep
            </Input>
            {error}
            <Input state={email} setState={setEmail} inputId='email'>
                Email
            </Input>

            <Select
                state={option}
                setState={setOption}
                options={['notebook', 'smartphone']}
            />

            <Radio
                state={radio}
                setState={setRadio}
                buttons={['notebook', 'smartphone']}
            />

            <br></br>

            <Checkbox
                state={checkbox}
                setState={setCheckbox}
                buttons={['amarelo', 'vermelho', 'azul']}
            />

            <button>Enviar</button>
        </form>
    );
};

export default Form;

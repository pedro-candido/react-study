import { useState } from "react"

const types = {
    cep:{
        regex: /^\d{5}-\d{3}$/,
        message: 'Coloque o valor correto'
    }
}

const useForm = (type) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState(null)

    const validate = (value) =>{
        if(value.length === 0) {
            setError('Preencha um valor')
            return false
        }
        if(!types[type].regex.test(cep)) {
            setError('Preencha um cep válido')
            return false
        }
        setError('')
        return true
    }

    const onChange = (event) =>{
        if(error)validate(event.target.value)
        setValue('')
    }

    return {
       value, setValue
    }
}

export default useForm

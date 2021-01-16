import { useState } from "react"

const useForm = () => {

    const [value, setValue] = useState('')

    const [error, setError] = useState(null)

    return {
        value, setValue
    }
}

export default useForm

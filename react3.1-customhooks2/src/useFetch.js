const { useState, useCallback } = require("react")

const useFetch = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const request = useCallback(async (url, options) => {
        let response, json

        try {
            setError(null)
            setLoading(true)
            response = await fetch(url, options)
            json = await response.json()
        }
        catch (error) {
            setError('Erro')
        } finally {
            setData(json)
            setLoading(false)
            return { response, json }
        }
    }, [])

    return { data, error, loading, request }
}

export default useFetch
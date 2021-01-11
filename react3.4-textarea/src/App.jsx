import { useState } from "react"

const App = () => {
    const [valor, setValor] = useState('')

    return (
        <form>
            <textarea
                value={valor}
                onChange={(event) => setValor(event.target.value)}
                rows="5"
            />
        </form>
    )
}

export default App

import { useState } from "react"

const App = () => {
    const [select, setSelect] = useState('')

    return (
        <form>
            <select value={select} onChange={(event) => setSelect(event.target.value)} name="" id="">
                <option value="" disabled>Selecione um produto</option>
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
            </select>

            {select}
        </form>
    )
}

export default App

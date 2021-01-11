import { useState } from 'react'

const coresArray = ['vermelho', 'azul', 'verde', 'amarelo', 'cinza']

const App = () => {
  const [cores, setCores] = useState([])

  const checkColors = (color) => {
    return cores.includes(color)
  }

  const handleChange = (event) => {
    if (event.target.checked) setCores([...cores, event.target.value])
    else {
      setCores(
        cores.filter(cor => cor !== event.target.value)
      )
    }
  }

  return (

    <form>
      {coresArray.map(cor => {
        return <label htmlFor={cor} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            onChange={handleChange}
            name={cor}
            id={cor}
            value={cor}
            checked={checkColors(cor)}
          />
          {cor}
        </label>
      })}

      {cores}
    </form>
  )
}

export default App

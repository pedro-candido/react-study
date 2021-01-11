import { useState } from "react"

const App = () => {
  const [radio, setRadio] = useState()

  const handleChange = (event) => {
    setRadio(event.target.value)
  }


  return (
    <form>
      <label htmlFor="notebook">
        Notebook
                <input
          id="notebook"
          type="radio"
          value="notebook"
          name="produto"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="smartphone">
        smartphone
        <input
          id="smartphone"
          type="radio"
          value="smartphone"
          name="produto"
          onChange={handleChange}
        />
      </label>
    </form>
  )
}

export default App

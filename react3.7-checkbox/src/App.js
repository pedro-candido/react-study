import { useState } from "react"

const App = () => {

  const [produtos, setProdutos] = useState(['smartphone'])

  const handleChange = (event) => {
    if (event.target.checked) setProdutos([...produtos, event.target.value])
    else {
      setProdutos(
        produtos.filter((produto, index) => produto !== event.target.value)
      )
    }
  }

  const checkProduct = (product) =>{
    return produtos.includes(product)
  }

  return (
    <form>
      <label htmlFor="notebook">
        Notebook
      <input
          type="checkbox"
          id="notebook"
          value="notebook"
          checked={checkProduct('notebook')} 
          onChange={handleChange}
        />
      </label>
      <label htmlFor="smartphone">
        Smartphone
        <input
          type="checkbox"
          id="smartphone"
          value="smartphone"
          checked={checkProduct('smartphone')}
          onChange={handleChange}
        />
      </label>
    </form>
  )
}

export default App

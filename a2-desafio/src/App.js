import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const produtos = ['1', '2', '3']

  const handleClick = (event) => {
    if (event.target.innerText === '+') setCount(count + 1)
    else {
      if (count === 0) return null
      else setCount(count - 1)
    }
  }

  return (
    <div>
      {count > 10 && <p>{produtos}</p>}
      {count}
      <br />
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick}>-</button>
    </div>
  )
}

export default App

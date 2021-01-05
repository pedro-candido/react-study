import useLocalStorage from './useLocalStorage'

function App() {
  const [ produto, setProduto ] = useLocalStorage('product', '')
  
  const handleClick = (event) => {
    setProduto(event.target.innerText)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
}

export default App;

const App = () => {

  const livros = [
    {name: 'Era do gelo', ano: 2000},
    {name: 'Era do gelo 2', ano: 2005},
    {name: 'Era do gelo 3', ano: 2010},
  ]

  return (
    <>
      {/* Retornar o livro que o ano de lançamento seja maior ou igual a 2005*/}
      {
        livros
          .filter((livro) => livro.ano >= 2005)
          .map(({name, ano}) => <li key={name}>Livro: {name} - Ano: {ano}</li>)
      }
    </>
  )
}

export default App

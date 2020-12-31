const App = () =>{
    const livros = [
        {name: 'Era do gelo', ano: 2000},
        {name: 'Era do gelo 2', ano: 2005},
        {name: 'Era do gelo 3', ano: 2010},
    ]

    return (
        <>
            {livros
                .filter(({ano}) => ano >= 2005)
                .map(livro =>(
                <li key={livro.name}>Livro: {livro.name} - Ano: {livro.ano}</li>
            ))}
        </>
    )
}

export default App()
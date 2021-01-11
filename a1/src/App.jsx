const App = () =>{
    const pedro = {
        nome: 'Pedro',
        idade: 22,
        todo: [
            {task: 'Lavar a louça'},
            {task: 'Ensinar o ivan'},
        ]
    }

    const lorenzo = {
        nome: 'Lorenzo',
        idade: 6,
        todo: [
            {task: 'Estudar'},
            {task: 'Jogar pokemon'},
        ]
    }

    let tarefas = (tasks) =>{
        let listaTarefas = tasks.map(
            (todo, index) => <li key={index}>{todo.task}</li>
        )
        return listaTarefas
    }

    return (
        <div>
            {/* Mostrar nome e mostrar idade */}
            <h4>Nome: {pedro.nome}</h4>
            <h4>Idade: {pedro.idade}</h4>
            {/* Tarefas */}
            <ul>
                {tarefas(pedro.todo)}
            </ul>
            
            <span
                style={pedro.idade >= 18 ? {color: 'green'} : {color: 'red'} }
                >
                {pedro.idade >= 18 ? <h1>Pode beber</h1> : <h1>Não pode beber</h1>}
            </span>
            {/* Se a idade for maior ou igual a 18, pode beber */}
        </div>
    )
}

export default App
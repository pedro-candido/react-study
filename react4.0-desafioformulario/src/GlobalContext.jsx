import {createContext, useState} from 'react'

const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()'
      ],
      resposta: 'React.createElement()',
      id: 'p1'
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import component from "./Component"',
        'require("./Component")',
        'import "./Component"'
      ],
      resposta: 'import component from "./Component"',
      id: 'p2'
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: [
        'useEffect()',
        'useFetch()',
        'useCallback()'
      ],
      resposta: 'useFetch()',
      id: 'p3'
    },
  ]

localStorage.setItem('question', 0)


export const GlobalContext = createContext(perguntas)

export const GlobalStorage = ({children}) =>{
    return <GlobalContext.Provider value={perguntas}>
        {children}
    </GlobalContext.Provider>

}
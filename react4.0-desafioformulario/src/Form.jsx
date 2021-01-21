import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';

const Form = () => {
    const questions = useContext(GlobalContext);
    const [question, setQuestion] = useState(0);
    const [answer, setAnswer] = useState([])
    const [grade, setGrade] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        // if(answer === questions[question].resposta) setGrade(grade+1)
        setTimeout(() => setQuestion(question + 1), 500)
        
    };

    useEffect(()=>{
        localStorage.setItem('question', question);
    }, [question])

    if (question !== 3)
        return (
            <form onSubmit={handleSubmit}>
                <h2>{questions[question].pergunta}</h2>
                {questions[question].options.map((alternativa, index) => (
                    <div key={alternativa}>
                        <input
                            name={questions[question].pergunta}
                            type='radio'
                            id={index}
                        />
                        <label htmlFor={index}>{alternativa}</label>
                    </div>
                ))}
                <br />
                <button>Next</button>
            </form>
        );
    else
        return (
            <div>
                <p>Acabou</p>
                <p>Deseja refazer?</p>
                <button onClick={() => setQuestion(0)}>Sim</button>
            </div>
        );
};

export default Form;

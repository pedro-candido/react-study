import { useEffect } from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

const App = () => {
    const [produto, setProduto] = useLocalStorage('produto', '');
    const { request, data, loading, error } = useFetch();

    const handleClick = (event) => setProduto(event.target.innerText);

    useEffect(() => {
        const fetchData = async () => {
            const {response, json} = await request(
                'https://ranekapi.origamid.dev/json/api/produto/'
            );
        };
        fetchData()
    }, [request]);

    console.log(data);

    return (
        <div>
            <p>Produto: {produto}</p>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>

            {loading && <h1>Carregando...</h1>}
            {error && <h1>error</h1>}
            {data?.map((produto) => (
                <div key={produto.id}>
                    <h1>{produto.nome}</h1>
                </div>
            ))}
        </div>
    );
};

export default App;

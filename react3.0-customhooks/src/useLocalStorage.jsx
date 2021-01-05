import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const local = localStorage.getItem(key);
        return local ? local : initialValue;
    });

    useEffect(()=>{
        localStorage.setItem(key, state)
    }, [key, state])
};

export default useLocalStorage;

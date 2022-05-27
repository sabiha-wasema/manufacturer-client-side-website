import { useEffect, useState } from 'react';


const CustomHook = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    return [tools, setTools];
};

export default CustomHook;
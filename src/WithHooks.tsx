import React, { useState, useEffect } from 'react';

const useInput = (defaultValue: string) =>{
    const [value, setValue] = useState(defaultValue);
    function onChange(e:React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }
    return {value, onChange};
}

const App: React.FC = () => {
    const name = useInput('serval')
    const type = useInput('friends')

    useEffect(()=>{
        document.title = `${name.value} is ${type.value}`
    }, [name, type])

    return (
        <div>
            <input {...name} />
            <input {...type} />
        </div>
    )
}

export default App
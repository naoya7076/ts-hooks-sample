import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
    const [name, setName] = useState('serval')
    const [type, setType] = useState('friends')

    useEffect(()=>{
        document.title = `${name} is ${type}`
    }, [name, type])

    function handleChangeName(e: React.ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }

    function handleChangeRace(e: React.ChangeEvent<HTMLInputElement>){
        setType(e.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleChangeName} />
            <input value={type} onChange={handleChangeRace} />
        </div>
    )
}

export default App
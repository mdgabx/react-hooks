import React, { useEffect, useState } from 'react';

const HookCounterOne = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log('count updated!!!')
        document.title = `Count: ${count}`;
    }, [count])

    const incrementCount = () => {
        setCount(prevValue => prevValue + 1); 
    }

    const handleInput = (event) => {
        setName(event.target.value)
    }

    return (
        <>
            <input type="text" value={name} onChange={handleInput} />
            <button onClick={incrementCount}>Count {count}</button>
        </>
    )
}

export default HookCounterOne
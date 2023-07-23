import React, { useEffect, useRef, useState } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle';

const FocusInput = () => {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <>
            <p>Count - {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <input type="text" ref={inputRef}/>

        </>
    )
}

export default FocusInput
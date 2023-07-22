import { useState } from "react";

const HookCounterTwo = () => {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(initialValue)}>Reset</button>
        </div>
    )
}

export default HookCounterTwo
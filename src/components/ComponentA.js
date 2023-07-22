import React, { useContext } from 'react'
import { CountContext } from '../App';

const ComponentA = () => {
    const countContext = useContext(CountContext)

    return (
        <div>
            Component A - {countContext.countState}
            <div>
                <button onClick={() => countContext.dispatchCount('increment')}>Increment</button>
                <button onClick={() => countContext.dispatchCount('decrement')}>Decrement</button>
                <button onClick={() => countContext.dispatchCount('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentA;
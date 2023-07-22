import React, { useContext } from 'react'
import { CountContext } from '../App';

const ComponentD = () => {
    const countContext = useContext(CountContext)

    return (
        <div>
            Component D - {countContext.countState}
            <div>
                <button onClick={() => countContext.dispatchCount('increment')}>Increment</button>
                <button onClick={() => countContext.dispatchCount('decrement')}>Decrement</button>
                <button onClick={() => countContext.dispatchCount('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentD;
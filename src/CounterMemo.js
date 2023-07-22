import React, { useMemo, useReducer } from 'react'

const initialState = {
    countOne: 0,
    countTwo: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT_COUNT_ONE':
            return {
                ...state,
                countOne: state.countOne + action.payload.value
            }

        case 'INCREMENT_COUNT_TWO':
                return {
                    ...state,
                    countTwo: state.countTwo + action.payload.value
                }
        
        default:
            return state;
    }
}


const CounterMemo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const isEven = useMemo(() => {
        let i = 0;
        while( i < 1000000000) {
            i++;
        }

        return state.countOne % 2 === 0
    }, [state.countOne])

    return (
        <>
            <button onClick={() => dispatch({type: 'INCREMENT_COUNT_ONE', payload: {value: 1}})}>Count - {state.countOne}</button>
            { isEven ? 'Even' : 'Odd' }
            <button onClick={() => dispatch({type: 'INCREMENT_COUNT_TWO', payload: {value: 1}})}>Count - {state.countTwo}</button>

        </>
    )
}

export default CounterMemo
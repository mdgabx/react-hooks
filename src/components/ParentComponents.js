import React, { useCallback, useReducer } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const initialState = {
    age: 0,
    salary: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT_AGE':
            return {
                ...state,
                age: state.age + action.payload.value
            }

        case 'INCREMENT_SALARY':
            return {
                ...state,
                salary: state.salary + action.payload.value
            }

        default:
            return state;
    }
}


const ParentComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const handleAge = useCallback(() => {
        dispatch({ type: 'INCREMENT_AGE', payload: { value: 1 } })
    }, [state.age])

    const handleSalary = useCallback(() => {
        dispatch({ type: 'INCREMENT_SALARY', payload: { value: 1000 } })
    }, [state.salary])

    return (
        <>
            <Title />
            <Count text="Age" count={state.age} />
            <Button handleClick={handleAge}>Increment Age</Button>
            <Count text="Salary" count={state.salary}  />
            <Button handleClick={handleSalary}>Increment Salary</Button>
        </>
    )
}

export default ParentComponent
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialValue = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something is wrong',
                post: {}
            }   
               
        default: 
            return state
    }
}


const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/30')
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])

    return (
        <>
            { state.error && <h2>{state.error}</h2>} 
            { state.loading ? (<p>Loading...</p>) : (<p>{state.post.title}</p>) }
            
        </>
    )
}

export default DataFetchingTwo
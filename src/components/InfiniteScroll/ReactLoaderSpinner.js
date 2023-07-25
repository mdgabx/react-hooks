import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const initialState = {
    photos: null, // Initialize with null or empty value
    error: '',
    loading: true
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PHOTOS_SUCCESS':
            return {
                ...state,
                error: '',
                loading: false,
                photos: state.photos ? state.photos.concat(action.payload) : action.payload // Update photos with the actual data
            };

        case 'GET_PHOTOS_FAILED':
            return {
                ...state,
                loading: false,
                error: 'Failed to show',
                photos: []
            };

        default:
            return state;
    }
};

const Scroll = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: 'GET_PHOTOS_SUCCESS',
                    payload: res.data
                });
            })
            .catch((err) => {
                console.warn(err);
                dispatch({
                    type: 'GET_PHOTOS_FAILED'
                });
            });
    }, []);

    const fetchMoreData = () => {
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/photos')
                .then((res) => {
                    dispatch({
                        type: 'GET_PHOTOS_SUCCESS',
                        payload: res.data
                    });
                })
                .catch((err) => {
                    dispatch({
                        type: 'GET_PHOTOS_FAILED'
                    });
                });
        });
    };

    return (
        <>
            <h1>Scroll</h1>
            {state.error && <h2>{state.error}</h2>}
            {state.loading === true ? <h2>Loading...</h2> : (
                <InfiniteScroll
                    dataLength={state.photos ? state.photos.length : 0}
                    hasMore={true}
                    next={fetchMoreData}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                    endMessage={<h2>Yay! You have seen it all</h2>}
                >
                    {state?.photos.map((photo) => { // Check if photos is not null before mapping
                        return (
                            <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
                        );
                    })}
                </InfiniteScroll>
            )}
        </>
    );
};

export default Scroll;

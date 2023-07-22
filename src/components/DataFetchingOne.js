import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetchingOne = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLoading(false)
                setError('')
                setPost(res.data)
            })
            .catch(err => {
                setLoading(false)
                setError('Something is wrong')
                setPost({})
            })


    }, [])

    return (
        <div>
            {loading ? ( <h2>Loading...</h2> ) : (<h2>{post.title}</h2>) }
            {error && <h2>{error}</h2>}
        </div>
    )
}

export default DataFetchingOne;
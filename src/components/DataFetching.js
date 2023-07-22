import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleButtonClick = () => {
        setIdFromButtonClick(id)
    }
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => console.warn(err))
    }, [idFromButtonClick])


    return (
        <>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleButtonClick} >Fetch Post</button>
            <p>{ post.title }</p>
            {/* <ul>
                {
                    posts.map(post => (
                            <li key={post.id}>{post.title}</li>
                        )
                    )
                }
            </ul> */}
        </>
    )
}

export default DataFetching;
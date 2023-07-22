import React from 'react'

const Count = ({count, text}) => {
    console.log(`Rendering ${text}`)

    return (
        <>
            <p>Count - {count} </p>
        </>
    )
}

export default React.memo(Count);
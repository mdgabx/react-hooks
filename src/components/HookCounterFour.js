import React, { useState } from "react"

const HookCounterFour = () => {
    const [items, setItems] = useState([])
    
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.round(Math.random() * 9) + 1 
        }])
    }

    return (
        <>
            <button onClick={addItem}>Add item</button>
            <ul>
                { items.map((item) => {
                    return (
                        <li key={item.id}>{item.value}</li>
                    )
                })
                }
            </ul>
        </>
    )
}

export default HookCounterFour
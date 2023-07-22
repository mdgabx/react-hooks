import React, { useState, useEffect } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const mouseCoords = (event) => {
        console.log('Coords')
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', mouseCoords)

        return () => {
            window.removeEventListener('mousemove', mouseCoords)
        };

    }, [])

    return (
        <>
            <div>
                Hook - X {x} : Y {y}
            </div>
        </>
    )
}

export default HookMouse;
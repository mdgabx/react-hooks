import { useState } from "react"

const HookCounterThree = () => {
    const [name,setName] = useState({firstname:"", lastname: ""})

    const handleFirstname = (e) => {
        setName({...name, firstname: e.target.value})
    }

    const handleLastaname = (e) => {
        setName({...name, lastname: e.target.value})
    }

    return (
        <>
            <form>
                <input type="text" value={name.firstname} onChange={handleFirstname}/>
                <input type="text" value={name.lastname} onChange={handleLastaname}/>
                <h2>Firstname: {name.firstname} </h2>
                <h2>Lastname: {name.lastname} </h2>
                <p>{ JSON.stringify(name) }</p>
            </form>
        </>        
    )
}

export default HookCounterThree
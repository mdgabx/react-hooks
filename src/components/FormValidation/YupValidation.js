import React from 'react'
import * as yup from 'yup'

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required()
})


const YupValidation = () => {

    const loginUser = async (event) => {
        event.preventDefault();

        let formData = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }

        const isValid = await loginUser.isValid(formData)

        console.log(isValid)

    }

    return (
        <div>
            <form type="submit" onSubmit={loginUser}>
                <input type="text" placeholder='Name...' />
                <input type="text" placeholder='123@example.com' />
                <input type="text" placeholder='password' />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YupValidation
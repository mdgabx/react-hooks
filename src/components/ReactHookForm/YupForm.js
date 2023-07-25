import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Email format not valid").required("Email is required"),
    channel: yup.string().required("Channel is required"),
})

const YupForm = () => {

    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            channel: "",
        },
        resolver: yupResolver(schema)
    });

    const { register, handleSubmit, formState } = form;

    const {
        errors
    } = formState

    const onSubmit = (data) => {
        console.log('data', data)
    } 

    return (
        <>
            <h1>Yup form</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" {...register("username")} />
                    <p>{errors.username?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="username" {...register("email")} />
                    <p>{errors.email?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" {...register("channel")} />
                    <p>{errors.channel?.message}</p>
                </div>

                <button type="submit">Submit</button>

            </form>
        </>
    )
}

export default YupForm
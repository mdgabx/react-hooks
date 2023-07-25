import React, { useEffect } from 'react'
import { useForm, useFieldArray, FieldErrors } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"
// import axios from 'axios'

export const YoutubeForm = () => {
    const form = useForm({
        defaultValues: {
            username: "admin",
            email: "",
            channel: "",
            social: {
                twitter: "",
                facebook: "",
            },
            phoneNumbers: ["", ""],
            phNumbers: [{
                number: "",
            }],
            age: 0,
            dob: new Date()
        },
        mode: "all" // onBlur and onChange
        // mode: "onChange"
        // mode: "onTouched",
        // mode: "onBlur",
    })

 
// const form = useForm({
//     defaultValues: () => {
//         return axios.get('https://jsonplaceholder.typicode.com/users/1')
//             .then(response => {
//                 const data = response.data;
//                 return {
//                     username: "Bruce",
//                     email: data.email,
//                     channel: "",
//                 };
//             })
//             .catch(error => {
//                 // Handle error
//                 console.warn(error);
//                 // return {
//                 //     username: "Bruce",
//                 //     email: "",
//                 //     channel: "",
//                 // };
//             });
//     }
// });

    const { 
        register, 
        control, 
        handleSubmit, 
        formState, 
        getValues, 
        watch, 
        setValue,
        reset,
        trigger
    } = form

    const { 
        errors, 
        touchedFields, 
        dirtyFields, 
        isDirty, 
        isValid, 
        isSubmitting, 
        isSubmitted, 
        isSubmitSuccessful, 
        submitCount,
    } = formState

    console.log(touchedFields, dirtyFields, isDirty)
    console.log('isSubmitting', isSubmitting)
    console.log('isSubmitted', isSubmitted)
    console.log('submitSuccessgul', isSubmitSuccessful)
    console.log('submitCount', submitCount)

    const {fields, append, remove } =  useFieldArray({
        name: 'phNumbers',
        control
    })

    // const { name, ref, onChange, onBlur } = register("username")

    // name={name} 
    // ref={ref} 
    // onChange={onChange} 
    // onBlur={onBlur}>

    const onSubmit = (data) => {
        console.log(data)
    }

    // const  watchUsername = watch("username")
    // const watchVar = watch(["username", "email"])
     const watchForm = watch();

    // useEffect(() => {
    //     // const subscription =  useWatch((value) => {
    //     //     console.log(value)
    //     // })

    //     // return () => {
    //     //     subscription.unsubscribe()
    //     // }
    // }, [])

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful])

    const handleGetValues = () => {
        console.log('Get values', getValues("social"))
    }

    const handleSetValues = () => {
        setValue("username", "", {
            shouldDirty: true,
            shouldValidate: true,
            shouldTouch: true
        })
    }

    const onError = (errors) => {
        console.log("Form errors", errors)
    }

  return (
    <div>
        <p>Watched value: {JSON.stringify(watchForm)} </p>

        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div className='form-control'>
                <label htmlFor='username'>Username</label>
                <input type="text" id="username" 
                {...register("username", {
                    required: {
                        value: true,
                        message: "Username is required"
                }})} />
                <p>{errors.username?.message}</p>
            </div>

            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="text" id="email"   
                {...register("email", {
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email"
                    },
                    validate: {
                        notAdmin: (fieldValue) => {
                            return (
                                fieldValue !== "admin@example.com" || "Enter a different email address"
                            );
                        },
                        notBlackListed: (fieldValue) => {
                            return (!fieldValue.endsWith("baddomain.com") || "email address not supported");
                        },
                        emailAvailable: async (fieldValue) => {
                            const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
                            const data = response.json()

                            return data.length == 0 || "Email already exist"
                        }
                    },

                })} />
                <p>{errors.email?.message}</p>
            </div>
          
                
            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input type="text" id="channel"  
                {...register("channel", {
                    required: {
                        value: true,
                        message: "Channel is required"
                    }
                })} />
                <p>{errors.channel?.message}</p>
            </div>
           
           <div className='form-control'>
            <label htmlFor='twitter'>Twitter</label>
                <input type="text" id="twitter"  
                {...register("social.twitter", {
                    disabled: watch("channel") === "",
                    required: {
                        value: true,
                        message: "Enter twitter profile"
                    }
                })} />
                <p>{errors.social?.twitter?.message}</p>

           </div>

            <div className='form-control'>
                <label htmlFor='facebook'>Facebook</label>
                <input type="text" id="facebook"  
                {...register("social.facebook", {
                    required: {
                        value: true,
                        message: "No facebook found"
                    }
                })} />
                <p>{errors.social?.facebook?.message}</p>
            </div>

             <div className="form-control">
                <label htmlFor='primary-phone'>Primary phone number</label>
                <input type="text" id="primary-phone"  
                {...register("phoneNumbers.0", {
                    required: {
                        value: true,
                        message: "Phone number 1 is required"
                    }
                })} />
                <p>{errors.phoneNumbers?.[0]?.message}</p>
             </div>

             <div className="form-control">
                <label htmlFor='secondary-phone'>secondary phone number</label>
                <input type="text" id="secondary-phone"  
                {...register("phoneNumbers.1", {
                    required: {
                        value: true,
                        message: "Phone number 2 is required"
                    }
                })} />
                <p>{errors.phoneNumbers?.[1]?.message}</p>
             </div>

             <div>
                <label>List of phone munbers</label>
                <div>
                    {
                        fields.map((field, index) => {
                            return (
                                <div key={field.id}>
                                    <input type="text" {...register(`phNumbers.${index}.number`, {
                                        required: {
                                            value: true,
                                            message: "Phone number is required"
                                        }
                                    })} />
                                    {
                                        index > 0 && (
                                            <button type="button" onClick={() => remove(index)}>Remove phone</button>
                                        )
                                    }

                                    <p>{errors.phNumbers?.[index]?.number?.message}</p>
                                </div>
                            )
                        })
                    }
                    <button type="button" onClick={() => append({ number: "" })}>Add phone</button>
                   
                </div>
             </div>

             <div className='form-control'>
                <label htmlFor='age'>Age</label>
                <input type="number" id="age"  
                {...register("age", {
                    valueAsNumber: true,
                    required: {
                        value: true,
                        message: "Age is required"
                    }
                })} />
                <p>{errors.age?.message}</p>
            </div>

            <div className='form-control'>
                <label htmlFor='dob'>DOB</label>
                <input type="date" id="dob"  
                {...register("dob", {
                    valueAsDate: true,
                    required: {
                        value: true,
                        message: "Date of birth is required"
                    }
                })} />
                <p>{errors.channel?.message}</p>
            </div>
           

            <button disabled={!isDirty || !isValid || isSubmitting} type="submit">Submit</button>
            <button type="button" onClick={handleGetValues}>Get Values</button>
            <button type="button" onClick={handleSetValues}>Set Values</button>
            <button type="button" onClick={() => reset()}>Reset</button>
            <button type="button" onClick={() => trigger()}>Validate</button>

            <DevTool control={control}  />
        </form>
    </div>

  )
}

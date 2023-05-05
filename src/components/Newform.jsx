import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Newform = () => {
    const [forms, setForms] = useState({name: "", age: "", rollno: ""})
    const inputHandler = (e) => {
        const {name, value} = e.target
        setForms((forms) => ({
            ...forms, [name]: value
        }))
    }
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <TextField label="name" name='name' value={forms.name} onChange={inputHandler}/> <br/>
        <TextField label="age" name='age' value={forms.age} onChange={inputHandler}/><br />
        <TextField label="Roll No" name='rollno' value={forms.rollno} onChange={inputHandler}/>
        <h1>{JSON.stringify(forms)}</h1>
    </div>
  )
}

export default Newform
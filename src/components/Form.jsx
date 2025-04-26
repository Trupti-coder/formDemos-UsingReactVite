import React, { useState } from 'react'

const Form = () => {

    let[formData,setFormData]=useState({



    })


    function handleSubmit(event){
        event.preventDefault();

    }




  return (
    <>
    <div>Form</div>
    <h1>Creating a normal Form</h1>
    <form onSubmit={handleSubmit}>
        <div>
            FirstName:<input type='text' placeholder='Enater FirstName' name='firstname' />
        </div>
        <div>
            LastName:<input type='text' placeholder='Enter LastName' name='lastname' />
        </div>
        <div>
            Age:<input type='number' placeholder='Enter Age' name='age' />
        </div>
        <div>
            City:<input type='text' placeholder='Enter City' name='city' />
        </div>
        <div>
            Gender:<input type='radio' />
            <input type='radio' />
            <input type='radio' />
        </div>
        <div>
            Standard:<select>
                <option>--Select--</option>
                <option>10'th</option>
                <option>12'th</option>
                <option>Graduate</option>
                <option>Post Graduate</option>
                <option>Deploma</option>
           </select>
        </div>
        <div>
            Email:<input type='email' placeholder='Enter Email' />
        </div>
        <div>
            Password:<input type='password' placeholder='Enter Password'/>
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Form;
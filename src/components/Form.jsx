import React, { useState } from 'react'

const Form = () => {

    let[formData,setFormData]=useState({

        firstname:"",
        lastname:"",
        age:"",
        city:"",
        gender:"",
        email:"",
        password:"",





    });

    function handleChange(event){
         
          let{name,value}=event.target
        
        setFormData((prev)=>({
            ...prev,
            [name]:value,

        }));

    }


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
            Gender:<input type='radio' name='gender' />
            <input type='radio' name='gender' />
            <input type='radio'  name='gender'/>
        </div>
        <div>
            Standard:<select name='course' >
                <option value="">--Select--</option>
                <option value="10'th">10'th</option>
                <option value="12'th">12'th</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Deploma">Deploma</option>
           </select>
        </div>
        <div>
            Email:<input type='email' placeholder='Enter Email'  name='email'/>
        </div>
        <div>
            Password:<input type='password' placeholder='Enter Password' name='password'/>
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Form;
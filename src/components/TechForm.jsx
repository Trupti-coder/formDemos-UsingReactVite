import React, { useState } from 'react'

const TechForm = () => {

    let[formData,setFormData]=useState({

        name:"",
        subject:"",
        gender:"",
        city:"",
        email:"",
        password:"",


    });

    function handleSubmit(){
        
    }
  return (
   <>
    <div>TechForm</div>
    <div>Creating a form </div>
    <form onSubmit={handleSubmit}>
        <div>
            Name:<input type='text' placeholder='Enter Name' name='name' />
        </div>
        <div>
         Select Subject:<input type='checkbox' value="English" name='subject' />English
         <input type='checkbox' value="Mathematics" name='subject' />Mathematics
         <input type='checkbox' value="Social-Science" name='subject' />Social-Science
        </div>
        <div>
            Gender:<input type='radio' value="Male" name='gender' />Male
            <input type='radio' value="Female" name='gender'/>Female
            <input type='radio' value="Other" name='gender' />Other
        </div>
        City:<select name='city'>
            <option>--Select--</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Delhi</option>

        </select>
        <div>
            Email:<input type='email' placeholder='Enter Email' name='email' />
        </div>
        <div>
            Password:<input type='password' placeholder='Enter Password' name='password' />
        </div>

    </form>

  </>
  )
}

export default TechForm;
import React, { useState } from 'react'

const UserForm = () => {

    let[formData,setFormData]=useState({

        firstName:"",
        lastName:"",
        city:"",
        age:"",
        gender:"",
        email:"",
        password:"",


    });


    function handleChange(event){
        const{name,value,type}=event.target;

    }

    function handleSubmit(event){
        event.preventDefault();

    }




  return (
   <>
    <div>
        <div>UserForm</div>
        <form onSubmit={handleSubmit}>
            <div>
               First Name:<input type='text' placeholder='Enter your name' name='firstName' />
            </div>
            <div>
                Last Name:<input type='text' placeholder='Enter your Last Name' name='lastName' />
            </div>
            <div>
                City:<input type='text' placeholder='Enter your city name' name='city' />
            </div>
            <div>
                Age:<input type='number' placeholder='Enter your Age ' name='age' />
            </div>
           <div>
            <fieldset>
                <legend>Present Address</legend>
                Division:<input type='text' name='division' />
                District:<input type='text' name='district' />
                Address:<input type='text' name='address' />
            </fieldset>
           </div>
            <div>
                <input type='radio' name='gender' />Male 
                <input type='radio' name='gender' />Female 
                <input type='radio' name='gender' />Other
            </div>
            <div>
                Emai:<input type='email' name='email' placeholder='Enter your Email' />
            </div>
            <div>
                Password:<input type='password' name='password' placeholder='Enter Your Password' />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    
   </>
  )
}

export default UserForm
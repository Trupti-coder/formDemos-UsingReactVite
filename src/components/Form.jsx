import React, { useState } from 'react';


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

        let existingUser;

        if(localStorage.getItem("formData")){
            existingUser=JSON.parse(localStorage.getItem("formData")) || [];

        }

        if(!Array.isArray(existingUser)){
            existingUser=[];
        }

        existingUser.push(formData);
        localStorage.setItem("formData",JSON.stringify(existingUser));



    }




  return (
    <>
    <div>Form</div>
    <h1 className={styles.title}>Creating a normal Form</h1>
    <form onSubmit={handleSubmit}>
        <div>
            FirstName:<input type='text' placeholder='Enater FirstName' name='firstname' value={formData.firstname} />
        </div>
        <div>
            LastName:<input type='text' placeholder='Enter LastName' name='lastname' value={formData.lastname} />
        </div>
        <div>
            Age:<input type='number' placeholder='Enter Age' name='age' value={formData.age} />
        </div>
        <div>
            City:<input type='text' placeholder='Enter City' name='city' value={formData.city} />
        </div>
        <div>
            Gender:<input type='radio' name='gender' value="Male" />Male
            <input type='radio' name='gender' value="Female" />Female
            <input type='radio'  name='gender' value="Other"/>Other
        </div>
        <div>
            Standard:<select name='course' onChange={handleChange} >
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
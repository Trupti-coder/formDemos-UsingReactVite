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


    function handleChange(event){

        const {name,value,type,checked}=event.target;

        if(type==='checkbox'){
            setFormData((prev)=>({


                
            }))
        }

      

    }




    function handleSubmit(event){
        event.preventDefault();

        let existingUser;

        if(localStorage.getItem("formData")){
            existingUser=JSON.parse(localStorage.getItem(formData))||[];
        }

        if(!Array.isArray(existingUser)){
            existingUser=[];
        }


        localStorage.setItem("formData",JSON.stringify(existingUser));



    }
  return (
   <>
    <div>TechForm</div>
    <div>Creating a form </div>
    <form onSubmit={handleSubmit}>
        <div>
            Name:<input type='text' placeholder='Enter Name' name='name' value={formData.name} onChange={handleChange} />
        </div>
        <div>
         Select Subject:<input type='checkbox' value={formData.subject} name='subject' onChange={handleChange} />English
         <input type='checkbox' value={formData.subject} name='subject' onChange={handleChange} />Mathematics
         <input type='checkbox' value={formData.subject} name='subject' onChange={handleChange} />Social-Science
        </div>
        <div>
            Gender:<input type='radio' value={formData.gender} name='gender' onChange={handleChange} />Male
            <input type='radio' value={formData.gender} name='gender'onChange={handleChange} />Female
            <input type='radio' value={formData.gender} name='gender'onChange={handleChange} />Other
        </div>
        City:<select name='city' value={formData.city} onChange={handleChange}>
            <option>--Select--</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Delhi</option>

        </select>
        <div>
            Email:<input type='email' placeholder='Enter Email' value={formData.email} name='email' onChange={handleChange} />
        </div>
        <div>
            Password:<input type='password' placeholder='Enter Password' value={formData.password} name='password' onChange={handleChange} />
        </div>

        <button type='submit'>Submit</button>

    </form>

  </>
  )
}

export default TechForm;
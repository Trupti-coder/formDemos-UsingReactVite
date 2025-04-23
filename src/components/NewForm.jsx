import React, { useState } from 'react'

import Styles from './NewForm.module.css';

const NewForm = () => {


let[formData,setFormData]=useState({

    schoolName:"",
    studFirstName:"",
    studLatName:"",
    parentFirstName:"",
    parentLastName:"",
    email:"",
    preferedSport:"",

})

    function handleChange(event){

        let{name,value}=event.target;
        setFormData((prev)=>({

            ...prev,
            [name]:value,



        }))

       


    }

    function handleSubmit(event){
        event.preventDefault();

        let existingUser;

        if(localStorage.getItem("formData")){

            existingUser=JSON.parse(localStorage.getItem("formData"));


        }

        if(!Array.isArray(existingUser)){
            existingUser=[];
        }

        existingUser.push(formData);

        localStorage.setItem("formData",JSON.stringify(existingUser));



    }
  return (
   <>

     <div>NewForm</div>
     <div>School Championship Registration Form</div>
     <form onSubmit={handleSubmit}>
        <div>
            School Name:<input type='text' placeholder='Enter School Name' name='schoolName' value={formData.schoolName} onChange={handleChange} />
        </div>
        <div>
           Schooler Name <input type='text' placeholder='First Name'  name='studFirstName' value={formData.studFirstName} onChange={handleChange}/>
           <input type='text' placeholder='Last Name' value={formData.studLatName}  name='studLastName'/>
        </div>

        <div>
            Parent Name:<input type='text' placeholder='First Name' name='parentFirstName' value={formData.parentFirstName} onChange={handleChange} />
            <input type='text' placeholder='Last Name' name='parentLastName' value={formData.parentLastName} onChange={handleChange} />
        </div>

        <div>
            Parent email:<input type='email' placeholder='Enter Email' name='email' value={formData.parentEmail} onChange={handleChange} />
        </div>
        <div>
            Prefered Sport:<input type='text' placeholder='Enter Prefered Sport' name='preferedSport' value={formData.preferedSport} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Submit</button>

        </div>

     </form>
   </>
  )
}

export default NewForm
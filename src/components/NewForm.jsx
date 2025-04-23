import React, { useState } from 'react'

const NewForm = () => {


let[formData,setFormData]=useState({

    schoolName:"",
    studFirstName:"",
    studLatName:"",

})

    function handleChange(event){

       


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
            School Name:<input type='text' placeholder='Enter School Name' name='schoolName' onChange={handleChange} />
        </div>
        <div>
           Schooler Name <input type='text' placeholder='First Name'  name='studFirstName' onChange={handleChange}/>
           <input type='text' placeholder='Last Name'  name='studLastName'/>
        </div>

        <div>
            Parent Name:<input type='text' placeholder='First Name' name='parentFirstName' onChange={handleChange} />
            <input type='text' placeholder='Last Name' name='parentLastName' onChange={handleChange} />
        </div>

        <div>
            Parent email:<input type='email' placeholder='Enter Email' name='email' onChange={handleChange} />
        </div>
        <div>
            Prefered Sport:<input type='text' placeholder='Enter Prefered Sport' name='preferedSport' onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Submit</button>

        </div>

     </form>
   </>
  )
}

export default NewForm
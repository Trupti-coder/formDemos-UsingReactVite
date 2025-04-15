import React, { useState } from 'react'

const UserForm = () => {

    let[formData,setFormData]=useState({

        firstName:"",
        lastName:"",
        city:"",
        age:"",
        division:"",
        district:"",
        address:"",
        gender:"",
        email:"",
        password:"",


    });


    function handleChange(event){

        const{name,value,type}=event.target;
        setFormData((prev)=>({
            ...prev,
            [name]:type==="checkbox"?checked:value,
        }))

    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
        let existingUser;

        if(localStorage.getItem("formData")){
            existingUser=JSON.parse(localStorage.getItem("formData"))||[]
        }


    }




  return (
   <>
    <div>
        <div>UserForm</div>
        <form onSubmit={handleSubmit}>
            <div>
               First Name:<input type='text' placeholder='Enter your name' name='firstName' value={formData.firstName} />
            </div>
            <div>
                Last Name:<input type='text' placeholder='Enter your Last Name' name='lastName' value={formData.lastName} />
            </div>
            <div>
                City:<input type='text' placeholder='Enter your city name' name='city' value={formData.city} />
            </div>
            <div>
                Age:<input type='number' placeholder='Enter your Age ' name='age' value={formData.age} />
            </div>
           <div>
            <fieldset>
                <legend>Present Address</legend>
                Division:<input type='text' name='division' placeholder='Enter your Division' value={formData.division}  />
                District:<input type='text' name='district' placeholder='Enter your District' value={formData.district} />
                Address:<input type='text' name='address' placeholder='Enter your Address' value={formData.address}  />
            </fieldset>
           </div>
            <div>
                <input type='radio' name='gender' value="Male" checked={formData.gender==='Male'}  />Male 
                <input type='radio' name='gender' value="Female" checked={formData.gender==="Female"} />Female 
                <input type='radio' name='gender' value="Other" checked={formData.gender==="Other"} />Other
            </div>
            <div>
                Emai:<input type='email' name='email' placeholder='Enter your Email' value={formData.email} />
            </div>
            <div>
                Password:<input type='password' name='password' placeholder='Enter Your Password' value={formData.password} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    
   </>
  )
}

export default UserForm
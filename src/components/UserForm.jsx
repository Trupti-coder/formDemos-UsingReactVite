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

        const{name,value,type,checked}=event.target;
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

        if(!Array.isArray(existingUser)){
            existingUser=[];
        }

        existingUser.push(formData);

        localStorage.setItem("formData",JSON.stringify(existingUser));
        alert("form Submited and data successfuly saved to localstorage...!");
    


    }

  return (
   <>
    <div>
        <div>UserForm</div>
        <form onSubmit={handleSubmit}>
            <div>
               First Name:<input type='text' placeholder='Enter your name' name='firstName' value={formData.firstName} onChange={handleChange} />
            </div>
            <div>
                Last Name:<input type='text' placeholder='Enter your Last Name' name='lastName' value={formData.lastName} onChange={handleChange} />
            </div>
            <div>
                City:<input type='text' placeholder='Enter your city name' name='city' value={formData.city} onChange={handleChange} />
            </div>
            <div>
                Age:<input type='number' placeholder='Enter your Age ' name='age' value={formData.age} onChange={handleChange} />
            </div>
           <div>
            <fieldset>
                <legend>Present Address</legend>
                Division:<input type='text' name='division' placeholder='Enter your Division' value={formData.division}  onChange={handleChange} />
                District:<input type='text' name='district' placeholder='Enter your District' value={formData.district} onChange={handleChange} />
                Address:<input type='text' name='address' placeholder='Enter your Address' value={formData.address} onChange={handleChange} />
            </fieldset>
           </div>
            <div>
                <input type='radio' name='gender' value="Male" checked={formData.gender==='Male'} onChange={handleChange}  />Male 
                <input type='radio' name='gender' value="Female" checked={formData.gender==="Female"} onChange={handleChange} />Female 
                <input type='radio' name='gender' value="Other" checked={formData.gender==="Other"} onChange={handleChange} />Other
            </div>
            <div>
                Emai:<input type='email' name='email' placeholder='Enter your Email' value={formData.email} onChange={handleChange} />
            </div>
            <div>
                Password:<input type='password' name='password' placeholder='Enter Your Password' value={formData.password} onChange={handleChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    
   </>
  )
}

export default UserForm
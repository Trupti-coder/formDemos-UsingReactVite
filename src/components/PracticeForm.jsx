import React, { useState } from 'react';
import styles from './PracticeForm.module.css';

const PracticeForm = () => {

    let[formData,setFormData]=useState({

      name:"",
      city:"",
      age:"",
      subject:"",
      gender:"",
      email:"",
      password:"",



    });

    function handleChange(event){

      const{name,value}=event.target;

      setFormData((prev)=>({

        ...prev,
        [name]:value,

      }));


    }


    function handleSubmit(event){

        event.preventDefault();

        let existingUser;
        if(localStorage.getItem("formData")){
          existingUser=JSON.parse(localStorage.getItem("formData")) ||[];
        }

        if(!Array.isArray(existingUser)){
          existingUser=[];
        }


        existingUser.push(formData);
        
      localStorage.setItem("formData",JSON.parse(existingUser));
      alert("Data saved Successfully to localstorage...!");


    }
  return (
    <>
    <div className={styles.title}>PracticeForm</div>
    <div>
        Creating a SignUp Form
    </div>
    <form onSubmit={handleSubmit} >
      <div>
        Name:<input type='text' name='name' onChange={handleChange}  />
      </div>
      <div>
        City:<input type='text' name='city' onChange={handleChange} />
      </div>
      <div>
        Age:<input type='text' name='age' onChange={handleChange} />
      </div>
      <div>

      </div>
      <div>
        Select Special Subject:<select name='subject' onChange={handleChange}  value={formData.subject}>
            <option value="">--Select--</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option  value="Mathematics">Mathematics</option>
            <option value="Marathi">Marathi</option>
            <option value="Hindi">Hindi</option>
        </select>
      </div>
      <div>
       <input type='radio' name='gender' onChange={handleChange} value="Male" checked={formData.gender==="Male"} />Male 
       <input type='radio' name='gender' onChange={handleChange} value="Female" checked={formData.gender==="Female"} />Female 
       <input type='radio' name='gender' onChange={handleChange} value="Other" checked={formData.gender==="Other"}  />Other
      </div>
      <div>
        Email:<input type='email' name='email'  onChange={handleChange}/>
      </div>
      <div>
        Password:<input type='password'  name='password' onChange={handleChange}/>
      </div>
      <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default PracticeForm;
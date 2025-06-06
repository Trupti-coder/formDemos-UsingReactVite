import React, { useState } from 'react'
import styles from './SimpleForm.module.css';


const SimpleForm = () => {

    let[formData,setFormData]=useState({

        studName:"",
        studFatherName:"",
        studMotherName:"",
        studAge:"",
        city:"",
        district:"",
        division:"",
        address:"",
        gender:"",
        courseSection: '',
        qualification: '',
        email: '',
        password: '',


    });

    function handleChange(event){

        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));

    }

    function handleSubmit(event){
        event.preventDefault();
        console.log('Form submitted:', formData);
        let existingUser;

        if(localStorage.getItem("formData")){
            existingUser=JSON.parse(localStorage.getItem("formData"))||[];
        }

        if(!Array.isArray(existingUser)){
            existingUser=[];
        }

        existingUser.push(formData);

        localStorage.setItem("formData",JSON.stringify(existingUser));
        alert("Data successfuly Saved to localstorage...");

    }


  return (
   <>
    <div>SimpleForm</div>
    <form onSubmit={handleSubmit}>
        <div>
            Student Name:<input type='text' name='studName' placeholder='Enter student name' onChange={handleChange} />
        </div>
        <div>
            Student Father Name:<input type='text'  name='studFatherName' placeholder='Enter student father name' onChange={handleChange}/>
        </div>
        <div>
           Student Mother Name:<input type='text' name='studMotherName' onChange={handleChange} />
        </div>
        <div>
            Student Age:<input type='number'  name='studAge' placeholder='Enter student Age' onChange={handleChange}/>
        </div>
        <div>
            City:<input type='text' name='city' placeholder='Enter student city name' onChange={handleChange} />
        </div>
        <div>
           <fieldset>
           <legend>
                    <h3>Student Permanent Address</h3>
                    <div>
                        District:<input type='text' name='district' placeholder='Enter District name' value={formData.district} onChange={handleChange} />
                    </div>
                    <div>
                        Division:<input type='text ' name='division' placeholder='Enter Division' value={formData.division} onChange={handleChange } />
                    </div>
                    <div>
                        Address:<input type='text' name="address" placeholder='Enter address' value={formData.address} onChange={handleChange} />
                    </div>
                </legend>
           </fieldset>
        </div>
       <div>
        <input type='radio' name='gender' value="Male" onChange={handleChange} />Male 
        <input type='radio' name='gender' value="Female" onChange={handleChange} />Female 
        <input type='radio' name='gender' value="Other" onChange={handleChange} />Other
       </div>
       <div>
        Course Section:<select name='courseSection' value={formData.courseSection} onChange={handleChange}>
            <option>--Select--</option>
            <option value="MERN STACK">MERN STACK</option>
            <option value="MEAN STACK">MEAN STACK </option>
            <option value="JAVA DEVELOPER">JAVA DEVELOPER</option>
            <option value="ANDROID DEVELOPER">ANDROID DEVELOPER</option>
            <option value="IOS DEVELOPER">IOS DEVELOPER</option>
        </select>
       </div>
       <div>
        <h3>Highest qualification</h3>
        <input type='radio' name='qualification' onChange={handleChange} value="10'th"  />10'th 
        <input type='radio' name='qualification' onChange={handleChange} value="12'th" />12'th 
        <input type='radio' name='qualification'onChange={handleChange} value="Graduate" />Graduate 
        <input type='radio' name='qualification'onChange={handleChange} value="Post Graduate" />Post Graduate
       </div>
       <div>
       Email:<input type='email' name='email' placeholder='Enter Email' onChange={handleChange} value={formData.email} />
       </div>
       <div>
        Password:<input type='password' name='password' placeholder='Enter Password' onChange={handleChange} value={formData.password} />
       </div>
       <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default SimpleForm
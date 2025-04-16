import React, { useState } from 'react'

const SimpleForm = () => {

    let[formData,setFormData]=useState({

        studName:"",
        studFatherName:"",
        studMotherName:"",

    });

    function handleSubmit(){

    }
  return (
   <>
    <div>SimpleForm</div>
    <form onSubmit={handleSubmit}>
        <div>
            Student Name:<input type='text' name='studName' placeholder='Enter student name' onChange={handleChange} />
        </div>
        <div>
            Student Father Name:<input type='text'  name='studFatherName ' placeholder='Enter student father name' onChange={handleChange}/>
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
            <textarea>
                <legend>
                    <h3>Student Permanent Address</h3>
                    <div>
                        District:<input type='text' name='district' placeholder='Enter District name' onChange={handleChange} />
                    </div>
                    <div>
                        Division:<input type='text ' name='division' placeholder='Enter Division' onChange={handleChange } />
                    </div>
                    <div>
                        Address:<input type='text' name="address" placeholder='Enter address' onChange={handleChange} />
                    </div>
                </legend>
            </textarea>
        </div>
       <div>
        <input type='radio' />Male 
        <input type='radio' />Female 
        <input type='radio' />Other
       </div>
       <div>
        Course Section:<select>
            <option>MERN STACK</option>
            <option>MEAN STACK </option>
            <option>JAVA DEVELOPER</option>
            <option>ANDROID DEVELOPER</option>
            <option>IOS DEVELOPER</option>
        </select>
       </div>
       <div>
        <h3>Highest qualification</h3>
        <input type='radio' />10'th 
        <input type='radio' />12'th 
        <input type='radio' />Graduate 
        <input type='radio' />Post Graduate
       </div>
       <div>
       Email:<input type='email' />
       </div>
       <div>
        Password:<input type='password' />
       </div>
       <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default SimpleForm
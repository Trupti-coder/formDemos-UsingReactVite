import React, { useState } from 'react'

const SimpleForm = () => {

    let[formData,setFormData]=useState({

    });

    function handleSubmit(){

    }
  return (
   <>
    <div>SimpleForm</div>
    <form onSubmit={handleSubmit}>
        <div>
            Student Name:<input type='text' name='studName' />
        </div>
        <div>
            Student Father Name:<input type='text'  name='studFatherName'/>
        </div>
        <div>
           Student Mother Name:<input type='text' name='studMotherName' />
        </div>
        <div>
            Student Age:<input type='number'  name='studAge'/>
        </div>
        <div>
            City:<input type='text' name='city' />
        </div>
        <div>
            <textarea>
                <legend>
                    <h3>Student Address</h3>
                    <div>
                        District:<input type='text' />
                    </div>
                    <div>
                        Division:<input type='text' />
                    </div>
                    <div>
                        Address:<input type='text' />
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
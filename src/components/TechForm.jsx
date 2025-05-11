import React, { useState } from 'react'

const TechForm = () => {

    let[formData,setFormData]=useState({

    })
  return (
   <>
    <div>TechForm</div>
    <div>Creating a form </div>
    <form>
        <div>
            Name:<input type='text' placeholder='Enter Name' name='name' />
        </div>
        <div>
         Select Subject:<input type='checkbox' value="English" name='subject' />English
         <input type='checkbox' value="Mathematics" name='subject' />Mathematics
         <input type='checkbox' value="Social-Science" />Social-Science
        </div>
        <div>
            Gender:<input type='radio' value="Male" />Male
            <input type='radio' value="Female"/>Female
            <input type='radio' value="Other" />Other
        </div>
        City:<select>
            <option>--Select--</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Delhi</option>

        </select>
        <div>
            Email:<input type='email' placeholder='Enter Email' />
        </div>
        <div>
            Password:<input type='password' placeholder='Enter Password' />
        </div>

    </form>

  </>
  )
}

export default TechForm;
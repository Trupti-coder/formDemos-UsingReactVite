import React, { useState } from 'react'

const PracticeForm = () => {

    let[formData,setFormData]=useState({


        
    })


    function handleSubmit(){


    }
  return (
    <>
    <div>PracticeForm</div>
    <div>
        Creating a SignUp Form
    </div>
    <form onSubmit={handleSubmit}>
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
        Select Subject:<select>
            <option>--Select--</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Mathematics</option>
            <option>Marathi</option>
            <option>Hindi</option>
        </select>
      </div>
      <div>
        Email:<input type='email' name='email' />
      </div>
      <div>
        Password:<input type='password'  name='password'/>
      </div>
    </form>
    </>
  )
}

export default PracticeForm
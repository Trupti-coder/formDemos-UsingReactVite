import React, { useState } from 'react'

const MyForm = () => {


    let[data,setData]=useState({

        firstName:"",
        lastName:"",
        age:"",
        city:"",
        phoneNumber:"",
        email:"",
        password:"",
    })

    function handleSubmit(event){

        event.preventDefault();

    }


  return (
    <>
    <div>MyForm</div>
    <form onSubmit={handleSubmit}>
        <div>
          First Name:<input type='text' name='firstName' placeholder='Enter your firstName' value={setData.firstName} onChange={handleChange} /> 
        </div>
        <div>
         Last Name:<input type='text' name='lasytName' placeholder='Enter your lastName' value={setData.lastName} onChange={handleChange} />
        </div>
        <div>
            Age:<input type='number' name='age' placeholder='Enter your age' value={setData.age} onChange={handleChange} />
        </div>
        <div>
            City:<input type='text' name='city' placeholder='Enter your city name' value={setData.city} />
        </div>
        <div>
            Phone Number:<input type='tel' name='phoneNumber' placeholder='Enter your Phone Number' value={setData.phoneNumber} />
        </div>
        <div>
            Email:<input type='email' name='email' placeholder='Enter your Email Address' value={setData.email} />
        </div>
        <div>
            Password:<input type='password' name='password' placeholder='Enter your Password' value={setData.password} />
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default MyForm
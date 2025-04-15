import React from 'react'

const UserForm = () => {

    function handleSubmit(event){
        event.preventDefault();

    }


  return (
   <>
    <div>
        <div>UserForm</div>
        <form onSubmit={handleSubmit}>
            <div>
               First Name:<input type='text' placeholder='Enter your name' name='firstName' />
            </div>
            <div>
                Last Name:<input type='text' placeholder='Enter your Last Name' name='lastName' />
            </div>
            <div>
                City:<input type='text' placeholder='Enter your city name' name='city' />
            </div>
            <div>
                Age:<input type='number' placeholder='Enter your Age ' name='age' />
            </div>
           
            <div>
                <input type='radio' name='gender' />Male 
                <input type='radio' name='gender' />Female 
                <input type='radio' name='gender' />Other
            </div>
            <div>
                Emai:<input type='email' placeholder='Enter your Email' />
            </div>
            <div>
                Password:<input type='password' placeholder='Enter Your Password' />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    
   </>
  )
}

export default UserForm
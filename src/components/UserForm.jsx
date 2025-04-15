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
               First Name:<input type='text' placeholder='Enter your name' />
            </div>
            <div>
                Last Name:<input type='text' placeholder='Enter your Last Name' />
            </div>
            <div>
                City:<input type='text' placeholder='Enter your city name' />
            </div>
            <div>
                Age:<input type='number' placeholder='Enter your Age' />
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
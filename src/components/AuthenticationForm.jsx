import React from 'react'

const AuthenticationForm = () => {
  return (
   <>

     <div>AuthenticationForm</div>
     <form>
        <div>
            FirstName:<input type='text' />

        </div>
        <div>
            LastName:<input type='text' placeholder='Enter LastName' />
        </div>
        <div>
            Age:<input type='number' placeholder='Enter Age' />
        </div>
        <div>
            CityName:<input type='text'  placeholder='Enter CityName'/>
        </div>
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

export default AuthenticationForm
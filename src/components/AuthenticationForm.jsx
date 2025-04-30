import React from 'react'

const AuthenticationForm = () => {
  return (
   <>

     <div>AuthenticationForm</div>
     <form>
        <div>
            FirstName:<input type='text' placeholder='Enter Firstname' name='firstName' onChange={firstNameChange} />

        </div>
        <div>
            LastName:<input type='text' placeholder='Enter LastName' name='lastName' onChange={lastNameChange} />
        </div>
        <div>
            Age:<input type='number' placeholder='Enter Age' name='age' onChange={ageChange} />
        </div>
        <div>
            CityName:<input type='text'  placeholder='Enter CityName' name='cityName'onChange={cityNameChange} />
        </div>
        <div>
            Email:<input type='email' placeholder='Enter Email'  name='email' onChange={emailChange} />
        </div>
        <div>
            Password:<input type='password' placeholder='Enter Password' name='password' />
        </div>
        <button type='submit'>Submit</button>
     </form>

   </>
  )
}

export default AuthenticationForm
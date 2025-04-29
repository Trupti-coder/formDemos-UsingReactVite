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
            LastName:<input type='text' />
        </div>
        <div>
            Age:<input type='number' />
        </div>
        <div>
            CityName:<input type='text' />
        </div>
     </form>

   </>
  )
}

export default AuthenticationForm
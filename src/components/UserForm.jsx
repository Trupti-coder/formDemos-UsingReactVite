import React from 'react'

const UserForm = () => {


  return (
   <>
    <div>
        <div>UserForm</div>
        <form>
            <div>
                Name:<input type='text' />
            </div>
            <div>
                City:<input type='text' />
            </div>
            <div>
                Age:<input type='text' />
            </div>
            <div>
                <input type='radio' />Male 
                <input type='radio' />Female 
                <input type='radio' />Other
            </div>
            <div>
                Emai:<input type='email' />
            </div>
            <div>
                Password:<input type='password' />
            </div>
        </form>
    </div>
    
   </>
  )
}

export default UserForm
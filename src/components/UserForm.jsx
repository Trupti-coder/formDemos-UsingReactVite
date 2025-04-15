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
            <button type='submit'>Submit</button>
        </form>
    </div>
    
   </>
  )
}

export default UserForm
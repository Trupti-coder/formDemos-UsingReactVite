import React from 'react'

const NewForm = () => {
  return (
   <>

     <div>NewForm</div>
     <div>School Championship Registration Form</div>
     <form>
        <div>
            School Name:<input type='text' />
        </div>
        <div>
           Schooler Name <input type='text' placeholder='First Name' />
           <input type='text' placeholder='Last Name' />
        </div>

        <div>
            Parent Name:<input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
        </div>

        <div>
            Parent email:<input type='email' placeholder='Enter Email' />
        </div>
        <div>
            Prefered Sport:<input type='text' />
        </div>
        <div>
          <button type="submit">Submit</button>

        </div>

     </form>
   </>
  )
}

export default NewForm
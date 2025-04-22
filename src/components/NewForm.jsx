import React from 'react'

const NewForm = () => {


    function handleSubmit(event){
        event.preventDefault();



    }
  return (
   <>

     <div>NewForm</div>
     <div>School Championship Registration Form</div>
     <form onSubmit={handleSubmit}>
        <div>
            School Name:<input type='text' placeholder='Enter School Name' name='schoolName' />
        </div>
        <div>
           Schooler Name <input type='text' placeholder='First Name'  name='studFirstName'/>
           <input type='text' placeholder='Last Name'  name='studLastName'/>
        </div>

        <div>
            Parent Name:<input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
        </div>

        <div>
            Parent email:<input type='email' placeholder='Enter Email' />
        </div>
        <div>
            Prefered Sport:<input type='text' placeholder='Enter Prefered Sport ' />
        </div>
        <div>
          <button type="submit">Submit</button>

        </div>

     </form>
   </>
  )
}

export default NewForm
import React from 'react'

const NewForm = () => {



    function handleChange(event){

       


    }

    function handleSubmit(event){
        event.preventDefault();





    }
  return (
   <>

     <div>NewForm</div>
     <div>School Championship Registration Form</div>
     <form onSubmit={handleSubmit}>
        <div>
            School Name:<input type='text' placeholder='Enter School Name' name='schoolName' onChange={handleChange} />
        </div>
        <div>
           Schooler Name <input type='text' placeholder='First Name'  name='studFirstName' onChange={handleChange}/>
           <input type='text' placeholder='Last Name'  name='studLastName'/>
        </div>

        <div>
            Parent Name:<input type='text' placeholder='First Name' onChange={handleChange} />
            <input type='text' placeholder='Last Name' onChange={handleChange} />
        </div>

        <div>
            Parent email:<input type='email' placeholder='Enter Email' name='email' onChange={handleChange} />
        </div>
        <div>
            Prefered Sport:<input type='text' placeholder='Enter Prefered Sport' name='preferedSport' onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Submit</button>

        </div>

     </form>
   </>
  )
}

export default NewForm
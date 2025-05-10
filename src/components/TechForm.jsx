import React from 'react'

const TechForm = () => {
  return (
   <>
    <div>TechForm</div>
    <div>Creating a form </div>
    <form>
        <div>
            Name:<input type='text' placeholder='Enter Name' />
        </div>
        <div>
         Select Subject:<input type='checkbox' value="English" />English
         <input type='checkbox' value="Mathematics" />Mathematics
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

export default TechForm;
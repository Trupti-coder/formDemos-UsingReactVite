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
            Email:<input type='email' placeholder='Enter Email' />
        </div>
        <div>
            Password:<input type='password' />
        </div>

    </form>

  </>
  )
}

export default TechForm;
import React from 'react'

const MyForm = () => {


  return (
    <>
    <div>MyForm</div>
    <form>
        <div>
          First Name:<input type='text' /> 
        </div>
        <div>
         Last Name:<input type='text' />
        </div>
        <div>
            Age:<input type='number' />
        </div>
        <div>
            City:<input type='text' />
        </div>
        <div>
            Phone Number:<input type='tel' />
        </div>
        <div>
            Email:<input type='email' />
        </div>
        <div>
            Password:<input type='password' />
        </div>
    </form>
    </>
  )
}

export default MyForm
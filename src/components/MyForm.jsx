import React from 'react'

const MyForm = () => {

    function handleSubmit(event){

        event.preventDefault();

    }


  return (
    <>
    <div>MyForm</div>
    <form onSubmit={handleSubmit}>
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
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default MyForm
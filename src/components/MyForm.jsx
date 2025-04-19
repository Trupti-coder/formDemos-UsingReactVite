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
          First Name:<input type='text' placeholder='Enter your firstName' /> 
        </div>
        <div>
         Last Name:<input type='text' placeholder='Enter your lastName' />
        </div>
        <div>
            Age:<input type='number' placeholder='Enter your age' />
        </div>
        <div>
            City:<input type='text' placeholder='Enter your city name' />
        </div>
        <div>
            Phone Number:<input type='tel' placeholder='Enter your Phone Number' />
        </div>
        <div>
            Email:<input type='email' placeholder='Enter your Email Address' />
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
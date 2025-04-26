import React from 'react'

const Form = () => {
  return (
    <>
    <div>Form</div>
    <h1>Creating a normal Form</h1>
    <form>
        <div>
            FirstName:<input type='text' />
        </div>
        <div>
            LastName:<input type='text' />
        </div>
        <div>
            Age:<input type='number' />
        </div>
        <div>
            City:<input type='text' />
        </div>
    </form>
    </>
  )
}

export default Form;
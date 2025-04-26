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
        <div>
            Gender:<input type='radio' />
            <input type='radio' />
            <input type='radio' />
        </div>
        <div>
            Standard:<select>
                <option>--Select--</option>
                <option></option>
           </select>
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

export default Form;
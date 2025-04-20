import React from 'react'

const PracticeForm = () => {
  return (
    <>
    <div>PracticeForm</div>
    <div>
        Creating a SignUp Form
    </div>
    <form>
      <div>
        Name:<input type='text' name='name' />
      </div>
      <div>
        City:<input type='text' name='city' />
      </div>
      <div>
        Age:<input type='text' />
      </div>
      <div>
        Select Subject:<select>
            <option>--Select--</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Mathematics</option>
            <option>Marathi</option>
            <option>Hindi</option>
        </select>
      </div>
      <div>
        Email:<input type='email' name='email' />
      </div>
      <div>
        Password:<input type='password'  name='password'/>
      </div>
    </form>
    </>
  )
}

export default PracticeForm
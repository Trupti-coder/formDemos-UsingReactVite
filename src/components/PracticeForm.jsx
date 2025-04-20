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
        Name:<input type='text' />
      </div>
      <div>
        City:<input type='text' />
      </div>
      <div>
        Age:<input type='text' />
      </div>
      <div>
        Select Subject:<select>
            <option></option>
        </select>
      </div>
    </form>
    </>
  )
}

export default PracticeForm
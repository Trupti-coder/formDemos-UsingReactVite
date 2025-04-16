import React from 'react'

const SimpleForm = () => {
  return (
   <>
    <div>SimpleForm</div>
    <form>
        <div>
            Student Name:<input type='text' />
        </div>
        <div>
            Student Father Name:<input type='text' />
        </div>
        <div>
           Student Mother Name:<input type='text' />
        </div>
        <div>
            Student Age:<input type='number' />
        </div>
        <div>
            City:<input type='text' />
        </div>
        <div>
            <textarea>
                <legend>
                    <h3>Student Address</h3>
                    <div>
                        District:<input type='text' />
                    </div>
                    <div>
                        Division:<input type='text' />
                    </div>
                    <div>
                        Address:<input type='text' />
                    </div>
                </legend>
            </textarea>
        </div>
       <div>
        <input type='radio' />Male 
        <input type='radio' />Female 
        <input type='radio' />Other
       </div>
       <div>
        Course:<select>
            <option>MERN STACK</option>
            <option>MEAN STACK </option>
            <option>JAVA DEVELOPER</option>
            <option>ANDROID DEVELOPER</option>
            <option>IOS DEVELOPER</option>
        </select>
       </div>
    </form>
    </>
  )
}

export default SimpleForm
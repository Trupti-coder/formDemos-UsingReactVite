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
                    <div></div>
                </legend>
            </textarea>
        </div>
    </form>
    </>
  )
}

export default SimpleForm
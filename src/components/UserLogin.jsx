import React from 'react'

const UserLogin = () => {
  return (
    <>
    <div>UserLogin</div>
    <form>
        <div>
            Name:<input type='text' placeholder='Enter Name' />
        </div>
        <div>
            Age:<input type='number' />
        </div>
        <div>
            City:<input type='text' />
        </div>
        <div>
            Email:<input type='email' />
        </div>
        <div>
            Password:<input type='text' />
        </div>
    </form>


    </>
  )
}

export default UserLogin
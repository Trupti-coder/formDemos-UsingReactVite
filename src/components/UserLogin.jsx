import React, { useState } from 'react'

const UserLogin = () => {
    let[name,setName]=useState("");
    
  return (
    <>
    <div>UserLogin</div>
    <form>
        <div>
            Name:<input type='text' placeholder='Enter Name' />
        </div>
        <div>
            Age:<input type='number' placeholder='Enter Age' />
        </div>
        <div>
            City:<input type='text' placeholder='Enter City'/>
        </div>
        <div>
            Email:<input type='email' placeholder='Enter Email' />
        </div>
        <div>
            Password:<input type='text' placeholder='Enter Password' />
        </div>
    </form>


    </>
  )
}

export default UserLogin
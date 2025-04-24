import React, { useState } from 'react'

const UserLogin = () => {
    let[name,setName]=useState("");
    let[age,setAge]=useState("");
    let[city,setCity]=useState("");
    let[email,setWEmail]=useState("");
    let[password,setPassword]=useState("");

  return (
    <>
    <div>UserLogin</div>
    <form>
        <div>
            Name:<input type='text' placeholder='Enter Name' onChange={nameChange} />
        </div>
        <div>
            Age:<input type='number' placeholder='Enter Age' onChange={ageChange} />
        </div>
        <div>
            City:<input type='text' placeholder='Enter City' onChange={cityChange}/>
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
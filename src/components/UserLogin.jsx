import React, { useState } from 'react'

const UserLogin = () => {
    let[name,setName]=useState("");
    let[age,setAge]=useState("");
    let[city,setCity]=useState("");
    let[email,setWEmail]=useState("");
    let[password,setPassword]=useState("");

function nameChange(){

}


function ageChange(){

}

function cityChange(){


}

function emailChange(){



}


function passwordChange(){


}


function handleSubmit(event){

    event.preventDefault();




}

  return (
    <>
    <div>UserLogin</div>
    <form onSubmit={handleSubmit}>
        <div>
            Name:<input type='text' name='name' placeholder='Enter Name' onChange={nameChange} />
        </div>
        <div>
            Age:<input type='number' name='age' placeholder='Enter Age' onChange={ageChange} />
        </div>
        <div>
            City:<input type='text' name='city' placeholder='Enter City' onChange={cityChange}/>
        </div>
        <div>
            Email:<input type='email' placeholder='Enter Email' onChange={emailChange} />
        </div>
        <div>
            Password:<input type='text' placeholder='Enter Password' onChange={passwordChange} />
        </div>
    </form>


    </>
  )
}

export default UserLogin
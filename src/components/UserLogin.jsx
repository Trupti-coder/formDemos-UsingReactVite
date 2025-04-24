import React, { useState } from 'react'

const UserLogin = () => {
    let[name,setName]=useState("");
    let[age,setAge]=useState("");
    let[city,setCity]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");

function nameChange(event){
    setName(event.target.value);

}


function ageChange(event){
    setAge(event.target.value);

}

function cityChange(event){
    setCity(event.target.value);


}

function emailChange(event){
    setEmail(event.target.value);



}


function passwordChange(event){
    setPassword(event.target.value);


}


function handleSubmit(event){

    event.preventDefault();

    let obj={
        userName:name,
        UserAge:age
        UserCity:city,
    }

    




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
            Email:<input type='email' name='email' placeholder='Enter Email' onChange={emailChange} />
        </div>
        <div>
            Password:<input type='text' name='password' placeholder='Enter Password' onChange={passwordChange} />
        </div>
    </form>


    </>
  )
}

export default UserLogin
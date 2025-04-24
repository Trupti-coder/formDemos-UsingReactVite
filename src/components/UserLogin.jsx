import React, { useState } from 'react';
import styles from './UserLogin.module.css';



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
        UserAge:age,
        UserCity:city,
        UserEmail:email,
        UserPassword:password,
    }

    console.log(obj);
    let existingUser;

    if(localStorage.getItem("data")){
       existingUser=JSON.parse(localStorage.getItem("data"));
    }


    if(!Array.isArray(existingUser)){
        existingUser=[];
    }

    existingUser.push(obj);

    localStorage.setItem("data",JSON.stringify(existingUser));
    




}

  return (
    <>
    <div className={styles.title}>UserLogin</div>
    <form onSubmit={handleSubmit} className={styles.formStyle}>
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
        <button type='submit'>Submit</button>
    </form>


    </>
  )
}

export default UserLogin;
import React, { useState } from 'react'
import styles from './AuthenticationForm.module.css';

const AuthenticationForm = () => {


    let[firstName,setFirstName]=useState("");
    let[lastName,setLastName]=useState("");
    let[age,setAge]=useState("");
    let[city,setCity]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");


    function firstNameChange(event){
        setFirstName(event.target.value)


    }

    function lastNameChange(event){
        setLastName(event.target.value)


    }

    function ageChange(event){

        setAge(event.target.value)


    }

    function cityNameChange(event){
        setCity(event.target.value)

    }

    function emailChange(event){
        setEmail(event.target.value)


    }


    function passwordChange(event){
        setPassword(event.target.value)


    }

    function handleSubmit(event){
        event.preventDefault();

        let obj={
            userFirstName:firstName,
            userLastName:lastName,
            userAge:age,
            userCity:city,
            userEmail:email,
            userPassword:password,



        }

        console.log(obj);

        let existingUser;

        if(localStorage.getItem("user")){
            existingUser=JSON.parse(localStorage.getItem("user"))||[]
        }

        if(!Array.isArray(existingUser)){
            existingUser=[];

        }

        existingUser.push(obj);

        localStorage.setItem("user",JSON.stringify(existingUser));



    }

    
  return (
   <>

     <div className={styles.title}>AuthenticationForm</div>
     <form onSubmit={handleSubmit} className={styles.form} >
         {error && <div className={styles.error}>{error}</div>}
        <div >
            FirstName:<input type='text' placeholder='Enter Firstname' name='firstName' onChange={firstNameChange} required className={styles.input} />

        </div>
        <div>
            LastName:<input type='text' placeholder='Enter LastName' name='lastName' onChange={lastNameChange} required className={styles.input} />
        </div>
        <div>
            Age:<input type='number' placeholder='Enter Age' name='age' onChange={ageChange} required className={styles.input} />
        </div>
        <div>
            CityName:<input type='text'  placeholder='Enter CityName' name='cityName'onChange={cityNameChange} required className={styles.input} />
        </div>
        <div>
            Email:<input type='email' placeholder='Enter Email'  name='email' onChange={emailChange} required className={styles.input} />
        </div>
        <div>
            Password:<input type='password' placeholder='Enter Password' name='password' onChange={passwordChange} required className={styles.input} />
        </div>
        <button type='submit'>Submit</button>
     </form>

   </>
  )
}

export default AuthenticationForm;
import React, { useState } from 'react';
import styles from './MyForm.module.css';

const MyForm = () => {


    let[data,setData]=useState({

        firstName:"",
        lastName:"",
        age:"",
        city:"",
        phoneNumber:"",
        email:"",
        password:"",
    });

    function handleChange(){

    }

    function handleSubmit(event){

        event.preventDefault();

        let existingUser;

        if(localStorage.getItem("data")){
            existingUser=JSON.parse(localStorage.getItem("data")) || [];
            
        }

        if(!Array.isArray(existingUser)){
            existingUser=[];
        }

        existingUser.push(data);
        JSON.parse(localStorage.setItem(existingUser));
        alert("Data saved successfully to localstorage...");


    }


  return (
    <>
    <div  className={styles.title}>MyForm</div>
    <form onSubmit={handleSubmit} className={styles.container}>
        <div>
          First Name:<input type='text' name='firstName' placeholder='Enter your firstName' value={data.firstName} onChange={handleChange} /> 
        </div>
        <div>
         Last Name:<input type='text' name='lasytName' placeholder='Enter your lastName' value={data.lastName} onChange={handleChange} />
        </div>
        <div>
            Age:<input type='number' name='age' placeholder='Enter your age' value={data.age} onChange={handleChange} />
        </div>
        <div>
            City:<input type='text' name='city' placeholder='Enter your city name' value={data.city} onChange={handleChange} />
        </div>
        <div>
            Phone Number:<input type='tel' name='phoneNumber' placeholder='Enter your Phone Number' value={data.phoneNumber} onChange={handleChange} />
        </div>
        <div>
            Email:<input type='email' name='email' placeholder='Enter your Email Address' value={data.email} onChange={handleChange} />
        </div>
        <div>
            Password:<input type='password' name='password' placeholder='Enter your Password' value={setData.password}  onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default MyForm
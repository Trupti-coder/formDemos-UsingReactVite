import { useState } from "react";

import styles from './LoginForm.module.css';

function LoginForm(){

    let[name,setName]=useState("");
    let[city,setCity]=useState("");
    let[age,setAge]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let[passwordError,setPasswordError]=useState("");



    function validPassword(password){
        const minLength=8;
        const hasUppercase=/[A-Z]/.test(password);
        const hasNumber=/\d/.test(password);
        const hasSpecialChar=/[!@#$%^&*()?:''<>]/.test(password);

        if(password.length<minLength){
           return 'Password must contain atleast 8 character'
        }

        if(!hasUppercase){
            return 'Password must contain atleast 1 uppercase'
        }

        if(!hasNumber){
            return 'password must contain atleast 1 number';
        }

        if(!hasSpecialChar){
            return 'password must contain at least 1 special character';
        }

    }

    function handlePassword(event){

        setPassword(event.target.value);
        setPasswordError(validPassword(event.target.value));

    }

    function handleSubmit(event){
        event.preventDefault();
        let obj={userName:name,userCity:city,userAge:age,userEmail:email,userPassword:password};
        console.log(obj);

        let existinguser;

        if(localStorage.getItem("logedUser")){
            existinguser=JSON.parse(localStorage.getItem("logedUser")) || [];
        }

        if(!Array.isArray(existinguser)){
            existinguser=[];
        }

        existinguser.push(obj);

        localStorage.setItem("logedUser",JSON.stringify(existinguser));
        alert("Data saved successfuly to localstorage..!");

    }

    return(
        <>
        <div className={styles.container}>
            <h1 className={styles.title}>Login Form</h1>
           <form onSubmit={handleSubmit}>
            <div>
                Name:<input type="text" name="name" placeholder="Enter Name" required onChange={(event)=>setName(event.target.value)} className={styles.formlable}  />
            </div>
            <div>
                City:<input type="text" name="city" placeholder="Enter City" required  onChange={(event)=>setCity(event.target.value)} className={styles.formlable} />
            </div>
            <div>
                Age:<input type="number" name="age" placeholder="Enter Age" required onChange={(event)=>setAge(event.target.value)} className={styles.formlable} />
            </div>
            <div>
                Email:<input type="email"  name="email" placeholder="Enter Email" required onChange={(event)=>setEmail(event.target.value)}  className={styles.formlable} />
            </div>
            <div>
                Password:<input type="password" name="password" placeholder="Enter Password" required onChange={handlePassword} className={styles.formlable} />
            </div>
            <button type="submit">Submit</button>
           </form>
        </div>
        </>
    );
}
export default LoginForm
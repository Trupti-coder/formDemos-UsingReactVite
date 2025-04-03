import { useState } from "react";

function BasicForm(){
    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let[passwordError,setPasswordError]=useState("");

    function validPassword(password){

        const minLength=8;
        const hasUppercase=/[A-Z]/.test(password);
        const hasNumber=/\d/.test(password);
        const hasSpecialChar=/[!@#$%^&*(),.<>?]/.test(password);

        if(password.length<minLength){
            return "Password must contain  at least 8 chracter.";
        }

        if(!hasUppercase){
            return"Password  must  contain At least one Uppercase letter. ";
        }

        if(!hasNumber){
            return "Password  must contain At least one Number. ";
        }

        if(!hasSpecialChar){
            return "Password must contain At least one Special Character.";
        }

    }

    function handlePasswordChange(event){
        setPassword(event.target.value);

    }


    function funSubmit(event){
       event.preventDefault();
       let myobj={userName:name,userEmail:email,userPassword:password};
       console.log(myobj);

       let existinguser;

       if(localStorage.getItem("form")){
        existinguser=JSON.parse(localStorage.getItem("form"))
       }
       else{
        existinguser=[];
       }

       if(!Array.isArray(existinguser)){
        existinguser=[];
       }

       existinguser.push(myobj);

       localStorage.setItem("form",JSON.stringify(existinguser));
       alert("Data saved successfully to localstorage...");




       setName("");
       setEmail("");
       setPassword("");


    }

   

    return(
        <>
        <h2>Basic Form In React</h2>
        <form onSubmit={funSubmit}>
            <div>
                Name:<input type="text" name="name" onChange={(event)=>setName(event.target.value)} />
            </div>
            <div>
                Email:<input type="email" name="email" required onChange={(event)=>setEmail(event.target.value)} />
            </div>
            <div>
                Password:<input type="password"  name="password" required onChange={handlePasswordChange}/>           
             </div>
             
             <button type="submit">Submit</button>
            
        </form>
        
        </>
    );
}
export default BasicForm;
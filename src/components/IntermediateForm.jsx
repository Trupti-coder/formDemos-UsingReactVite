import { useState } from "react";

function IntermediateForm(){

    let[name,setName]=useState("");
    let[city,setCity]=useState("");
    let[gender,setGender]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let[acceptedTerms,setAcceptedTerms]=useState(false);
    let[passwordError,setPasswordError]=useState("");

    function validPassword(password){

        const minLength=8;
        const hasUppercase=/[A-Z]/.test(password);
        const hasNumber=/\d/.test(password);
        const hasSpecialChar=/[!@#$%^&*(),.?":{}|<>]/.test(password);

        if(password.length<minLength){
            return "Password must be At Least 8 Character long.";
        }

        if(!hasUppercase){

            return "Password must contain At Least one Uppercase letter.";

        }
        if(!hasNumber){
            return "Password must contain At Least one Number.";
        }

        if(!hasSpecialChar){
            return "Password must contain At Least one Special character.";
        }

    }



    function handlePasswordChange(event){
        setPassword(event.target.value);
        setPasswordError(validPassword(event.target.value));

    }

    function handleSubmit(event){
        event.preventDefault();

        let obj={
            Name:name,
            City:city,
            Gender:gender,
            Email:email,
            Password:password,
            AcceptedTerms:acceptedTerms
        }
        console.log(obj);



        if(!acceptedTerms){

            alert("You must accept the terms of service to proceed.");
             return;

        }

        let existinguser;

        if(localStorage.getItem("formdata")){
            existinguser=JSON.parse(localStorage.getItem("formdata")) || [];
        }


        if(!Array.isArray(existinguser)){
            existinguser=[];
        }

        existinguser.push(obj);

        localStorage.setItem("formdata",JSON.stringify(existinguser));
        alert("Registration Successful !")



    }

    return(
        <>
        <div>
            <h3>Intermediate Form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    Name:<input type="text" name="name" required  onChange={(event)=>setName(event.target.value)}/>
                </div>
                <div>
                    City:<input type="text" name="city" onChange={(event)=>setCity(event.target.value)} />
                </div>
              
                <div>
                    Email:<input type="email" name="email" required onChange={(event)=>setEmail(event.target.value)} />
                </div>
                <div>
                    Password:<input type="password" name="password" required onChange={handlePasswordChange}/>
                </div>
                <div>
                   Gender:<input type="radio" name="gender" value="male" onChange={(event)=>setGender(event.target.value)}/>male
                   <input type="radio" name="gender" value="female" onChange={(event)=>setGender(event.target.value)} />female
                   <input type="radio" name="gender" value="other" onChange={(event)=>setGender(event.target.value)} />other
                </div>
                <div>
                    <input type="checkbox" checked={acceptedTerms}  onChange={(event)=>setAcceptedTerms(event.target.checked)} />i accept the terms of service
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
        </>
    );
}
export default IntermediateForm;
import { useState } from "react";

function IntermediateForm(){

    let[name,setName]=useState("");
    let[city,setCity]=useState("");
    let[gender,setGender]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let[acceptedTerms,setAcceptedTerms]=useState(false);

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
            existinguser=JSON.parse(localStorage.getItem("formdata"));
        }


        if(!Array.isArray(existinguser)){
            existinguser=[];
        }

        existinguser.push(obj);

        localStorage.setItem("formdata",JSON.stringify(existinguser));



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
                   Gender:<input type="radio" name="gender" value="male" onChange={(event)=>setGender(event.target.value)}/>male
                   <input type="radio" name="gender" value="female" onChange={(event)=>setGender(event.target.value)} />female
                   <input type="radio" name="gender" value="other" onChange={(event)=>setGender(event.target.value)} />other
                </div>
                <div>
                    Email:<input type="email" name="email" required onChange={(event)=>setEmail(event.target.value)} />
                </div>
                <div>
                    Password:<input type="password" name="password" required onChange={(event)=>setPassword(event.target.value)} />
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
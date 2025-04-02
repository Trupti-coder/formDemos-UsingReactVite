import { useState } from "react";

function BasicForm(){
    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");


    function funSubmit(event){
       event.preventDefault();
       let myobj={userName:name,userEmail:email,userPassword:password};
       console.log(myObj);


       setEmail("");
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
                Password:<input type="password"  name="password" required  onChange={(event)=>setPassword(event.target.value)}/>           
             </div>
             <button type="submit">Submit</button>
            
        </form>
        
        </>
    );
}
export default BasicForm;
import { useState } from "react";

function BasicForm(){
    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");


    function funSubmit(event){

    }


    return(
        <>
        <h2>Basic Form In React</h2>
        <form onSubmit={funSubmit}>
            <div>
                Name:<input type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)} />
            </div>
            <div>
                Email:<input type="email" placeholder="Enter email" required />
            </div>
            <div>
                Password:<input type="password" placeholder="Enter password" required />           
             </div>
             <button type="submit">Submit</button>
            
        </form>
        
        </>
    );
}
export default BasicForm;
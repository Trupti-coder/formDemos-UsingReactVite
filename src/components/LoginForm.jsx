import { useState } from "react";

function LoginForm(){

    let[name,setName]=useState("");
    let[city,setCity]=useState("");
    let[age,setAge]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let[passwordError,setPasswordError]=useState("");

    function handleSubmit(event){
        event.preventDefault();

    }

    return(
        <>
        <div>
           <form onSubmit={handleSubmit}>
            <div>
                Name:<input type="text" name="name" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)}  />
            </div>
            <div>
                City:<input type="text" name="city" placeholder="Enter City" onChange={(event)=>setCity(event.target.value)} />
            </div>
            <div>
                Age:<input type="number" name="age" placeholder="Enter Age" onChange={(event)=>setAge(event.target.value)} />
            </div>
            <div>
                Email:<input type="email"  name="email" placeholder="Enter Email" onChange={(event)=>setEmail(event.target.value)}  />
            </div>
            <div>
                Password:<input type="password" name="password" placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)} />
            </div>
            <button type="submit">Submit</button>
           </form>
        </div>
        </>
    );
}
export default LoginForm
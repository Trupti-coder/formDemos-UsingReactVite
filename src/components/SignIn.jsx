import { useState } from "react";

function SignIn(){
    let[email,setemail]=useState("");
    let[password,setPassword]=useState("");
    let[passwordError,setPasswordError]=useState("");


    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                Email:<input type="email" required />
            </div>
            <div>
                Password:<input type="password" required />
            </div>

            <button type="submit">SignIn</button>
        </form>
       
        </>
    );
}
export default SignIn;
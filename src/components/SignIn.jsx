import { useState } from "react";

function SignIn(){
    let[email,setemail]=useState("");
    let[password,setPassword]=useState("");
    let[passwordError,setPasswordError]=useState("");


    return(
        <>
        <form>
            <div>
                Email:<input type="email" required />
            </div>
            <div>
                Password:<input type="password" required />
            </div>
        </form>
       
        </>
    );
}
export default SignIn;
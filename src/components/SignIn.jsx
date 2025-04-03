import { useState } from "react";

function SignIn(){
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let[passwordError,setPasswordError]=useState("");


    function validPassword(password){

        const minLength=8;
        const hasUppercase=/[A-Z]/.test(password);
        const hasNumber=/\d/.test(password);
        const hasSpecialChar=/[!@#$%^&*()/":,.?]/.test(password);

        if(password.length<minLength){
            return "Password must contain  at least 8 character.";

        }
        if(!hasUppercase){
            return "Password must contain at least one Uppercase letter. ";
        }

        if(!hasNumber){
            return "Password must contain at least one Number.";
        }

        if(!hasSpecialChar){
            return "Password must contain at least one Special character.";
        }

    


    }

    function handlePassword(event){
        setPassword(event.target.value);
        setPasswordError(validPassword(event.target.value));

    }

    function handleSubmit(event){
        event.preventDefault();

    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                Email:<input type="email" required onChange={(event)=>setEmail(event.target.value)} />
            </div>
            <div>
                Password:<input type="password" required onChange={handlePassword} />
                {passwordError && <p style={{color:"red"}}>{passwordError}</p>}
            </div>
            <div>
                <input type="checkbox" />Remember
            </div>

            <button type="submit">SignIn</button>

            <p>Or Signin with</p>


        </form>
       
        </>
    );
}
export default SignIn;
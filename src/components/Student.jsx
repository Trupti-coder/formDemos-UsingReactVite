import { useState } from "react";

function Student(){
    let[firstName,setFirstName]=useState("");
    let[lastName,setLastName]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");

    return(
        <>
        <form>
            <div>
                FirstName:<input type="text" name="firstname" required />
            </div>
            <div>
               LastName:<input type="text" name="lastname" required />
            </div>
            <div>
                Email:<input type="email" name="email" required />            
            </div>
            <div>
                Password:<input type="text" name="password" required />
            </div>
        </form>
        </>
    );
}
export default Student;
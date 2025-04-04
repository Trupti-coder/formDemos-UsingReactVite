import { useState } from "react";

function Student(){
    let[firstName,setFirstName]=useState("");
    let[lastName,setLastName]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let[contact,setContact]=useState("");
    let[gender,setGender]=useState("");

    

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
            <div>
                Contact:<input type="tel" name="contact" required />
            </div>
            <div>
                Gender:<input type="radio" name="gender" value="male" />Male
                <input type="radio" name="gender" value="female" />Female
                <input type="radio" name="gender" value="other" />Other
             </div>
        </form>
        </>
    );
}
export default Student;
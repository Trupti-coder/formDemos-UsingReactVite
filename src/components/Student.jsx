import { useState } from "react";

function Student(){

    let[firstName,setFirstName]=useState("");
    let[lastName,setLastName]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let[passwordError,setPasswordError]=useState("");
    let[contact,setContact]=useState("");
    let[gender,setGender]=useState("");

    function validPassword(password){

        const minLength=8;
        const hasUppercase=/[A-Z]/.test(password);
        const hasNumber=/\d/.test(password);
        const hasSpecialChar=/[!@#$%^&*():"?]/.test(password);

    }

    function handlePasswordChange(event){

        setPassword(event.target.value);
        setPasswordError(validPassword(event.target.value));

    }


    function handleSubmit(event){
        event.preventDefault();

    }

    

    return(
        <>
        <h3>Advance Form In React</h3>
        <form onSubmit={handleSubmit}>
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
                Password:<input type="password" name="password" required />
            </div>
            <div>
                Contact:<input type="tel" name="contact" required />
            </div>
            <div>
                Gender:<input type="radio" name="gender" value="male" />Male
                <input type="radio" name="gender" value="female" />Female
                <input type="radio" name="gender" value="other" />Other
             </div>
             <div>
               Your Best Subject:
               <input type="checkbox" name="subject"  value="English" />Mathematics
               <input type="checkbox" name="subject" value="Physic" />Physics
               <input type="checkbox" name="subject" value="Chemistry" />Chemistry
                
             </div>
             <div>
            <label for="github-url">GitHub-Url <span style={{color: "red"}}>*</span>:</label>
            <input type="url" id="github-url" name="website" pattern="https?://.*" placeholder="Enter a valid URL" required />
            </div> 
            <div>
                Select Your Choise:
                <select name="role">
                    <option value="mern">MERN Developer</option>
                    <option value="mean">MEAN Developer</option>
                    <option value="java">JAVA Developer</option>
                    <option value="ios">IOS Developer</option>
                    
                </select>
            </div>
           
            <div>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>

        </form>
        </>
    );
}
export default Student;
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
        <h3>Advance Form In React</h3>
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
             <div>
               Your Best Subject:
               <input type="checkbox"  value="English" />Mathematics
               <input type="checkbox" value="Physic" />Physics
               <input type="checkbox" value="Chemistry" />Chemistry
                
             </div>
             {/* <div>
            <label for="github-url">GitHub-Url <span style="color: red;">*</span>:</label>
            <input type="url" id="github-url" name="website" pattern="https?://.*" placeholder="Enter a valid URL" required />
            </div> */}
            <div>
                Select Your Choise:
                <select>
                    <option>MERN Developer</option>
                    <option>MEAN Developer</option>
                    <option>JAVA Developer</option>
                    <option>IOS Developer</option>
                    
                </select>
            </div>
            <div>
                About:<input type="textarea" name="textarea" required />
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
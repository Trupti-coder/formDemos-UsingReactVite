import { useState } from "react";

function IntermediateForm(){

    let[name,setName]=useState("");
    let[city,setCity]=useState("");
    let[gender,setGender]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");


    return(
        <>
        <div>
            <h3>Intermediate Form</h3>
            <form>
                <div>
                    Name:<input type="text" name="name" required />
                </div>
                <div>
                    City:<input type="text" name="city" />
                </div>
                <div>
                    Gender:<select name="gender">
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div>
                    Email:<input type="email" name="email" required />
                </div>
                <div>
                    Password:<input type="password" name="password" required />
                </div>
                <div>
                    <input type="checkbox"  />i accept the terms of service
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
        </>
    );
}
export default IntermediateForm;
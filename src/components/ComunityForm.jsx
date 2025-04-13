import { useState } from "react";

function ComunityForm(){

    let[data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNo:"",
        userName:"",
        password:"",
        confirmPassword:"",

    })
    return(
        <>
        <div>
            <h1>Sign Up</h1>
            <p>Join our community</p>
            <form>
                <div>
                 First Name:<input type="text" name="firstName" placeholder="Enter your first Name" />
                </div>
                <div>
                    Last Name:<input type="text" name="lastName" placeholder="Enter your Last Name" />
                </div>
                <div>
                    Email Address:<input type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div>
                    Phone Number:<input type="tel" name="phoneNo" placeholder="Enter your Phone Number" />
                </div>
                <div>
                    UserName:<input type="text" name="userName" placeholder="Enter Your UserName" />
                </div>
                <h1>Set Your Password</h1>
                <div>
                    Password:<input type="Password" name="password" placeholder="Enter Your Password" />
                </div>
                <div>
                    Confirm Password:<input type="password" placeholder="Confirm your password" />
                </div>
                <p>Your password must be at least 8 characters long,
                    contain a mix of upper and lower case letters,
                     a number,and a special character.</p>
                     <div>
                        <input type="checkbox" />I agree to the Terms of Service and Privacy Policy
                     </div>
                     <button type="submit">Create Account</button>
            </form>
        </div>
        </>
    );
}
export default ComunityForm;
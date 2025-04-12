import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

function ContactForm(){

    let[formData,setFormData]=useState({

        name:"",
        email:"",
        password:"",
        resetPassword:""


    })


    function handleChange(){

    }

    function handleSubmit(event){
        event.preventDefault();

    }
    return(
        <>
       <div>
        <h1>Hey,it takes less that 60s</h1>
        <p>Already have an account ? <Link>Log in</Link></p>
        <form onSubmit={handleSubmit}>
            <div>
               Your  Name:<input type="text" name="name" value={} onChange={handleChange} />
            </div>
            <div>
               Email Address:<input type="email" name="email" value={} onChange={handleChange} />
            </div>
            <div>
                Password:<input type="password" value={} onChange={handleChange} />
            </div>
            <div>
                Repeat Password:<input type="password" value={} onChange={handleChange} />
            </div>
            <div>
                <input type="checkbox" />Check to indicate that you aggree to the Terms of Services and Privacy Policy
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
       </div>
        </>
    );
}
export default ContactForm;
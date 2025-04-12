import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

function ContactForm(){

    let[formData,setFormData]=useState({

        name:"",
        email:"",
        password:"",
        resetPassword:""


    })

    let[errors,setErrors]=useState({});

    function validate(){

        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    }


    function handleChange(event){
        const {name,value}=event.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));

    }

    function handleSubmit(event){
        event.preventDefault();

         // Simple validation example
    if (formData.password !== formData.resetPassword) {
        alert("Passwords do not match!");
        return;
      }

    }
    return(
        <>
       <div>
        <h1>Hey,it takes less that 60s</h1>
        <p>Already have an account ? <Link>Log in</Link></p>
        <form onSubmit={handleSubmit}>
            <div>
               Your  Name:<input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
               Email Address:<input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                Password:<input type="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
                Repeat Password:<input type="password" value={formData.resetPassword} onChange={handleChange} />
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
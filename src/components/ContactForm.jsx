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


        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
          }
      
          if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
          }

          if (formData.password !== formData.resetPassword) {
            newErrors.resetPassword = "Passwords do not match.";
          }
      
          return newErrors;

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


      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } 
      else {
        setErrors({});
        console.log("Submitted Data:", formData);
        alert("Form submitted successfully!");
        // You could also reset the form here
      }

    }
    return(
        <>
       <div className={styles.container}>
        <h1 className={styles.title}>Hey,it takes less that 60s</h1>
        <p className={styles.subtitle}>Already have an account ? <Link>Log in</Link></p>
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

                {errors.resetPassword && (
            <p style={{ color: "red" }}>{errors.resetPassword}</p>
          )}
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
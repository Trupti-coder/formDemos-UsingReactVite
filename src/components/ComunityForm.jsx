import { useState } from "react";

import styles from './ComunityForm.module.css';

function ComunityForm(){

    let[data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNo:"",
        userName:"",
        password:"",
        confirmPassword:"",
        agreed:false,

    });

    const [errors, setErrors] = useState({});

    function Validate(){

        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

      if (!data.firstName) newErrors.firstName = "First name is required.";
      if (!data.lastName) newErrors.lastName = "Last name is required.";

      if (!emailRegex.test(data.email)) newErrors.email = "Invalid email address.";
    if (!data.phoneNo) newErrors.phoneNo = "Phone number is required.";

    if (!data.userName) newErrors.userName = "Username is required.";
    if (!strongPasswordRegex.test(data.password))

        newErrors.password = "Password is too weak.";
        if (data.password !== data.confirmPassword)

            if (!data.agreed) newErrors.agreed = "You must accept the terms.";

            return newErrors;  



    }

    function handleSubmit(event){
        event.preventDefault();

        
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          setErrors({});
          alert("Form submitted successfully!");
        }


    }

    function handleChange(event){
        const{name,value}=event.target;
        setData((prev)=>({
            ...prev,
            [name]:value,
        }));

    }

    

    return(
        <>
        <div className={styles.container }>
            <h1 className={styles.title}>Sign Up</h1>
            <p className={styles.subtitle}>Join our community</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                 First Name:<input type="text" name="firstName" placeholder="Enter your first Name" value={data.firstName} onChange={handleChange} />
                </div>
                <div>
                    Last Name:<input type="text" name="lastName" placeholder="Enter your Last Name" value={data.lastName} onChange={handleChange} />
                </div>
                <div>
                    Email Address:<input type="email" name="email" placeholder="Enter your email address" value={data.email} onChange={handleChange} />
                </div>
                <div>
                    Phone Number:<input type="tel" name="phoneNo" placeholder="Enter your Phone Number" value={data.phoneNo} onChange={handleChange} />
                </div>
                <div>
                    UserName:<input type="text" name="userName" placeholder="Enter Your UserName" value={data.userName} onChange={handleChange} />
                </div>
                <h1 className={styles.passwordHeader}>Set Your Password</h1>
                <div  className={styles.formGroup}>
                    Password:<input type="Password" name="password" placeholder="Enter Your Password" value={data.password} onChange={handleChange} />

                    {errors.password && <span className={styles.error}>{errors.password}</span>}
                </div>
                <div  className={styles.formGroup}>
                    Confirm Password:<input type="password" name="confirmPassword" placeholder="Confirm your password" value={data.confirmPassword} onChange={handleChange} />

                    {errors.confirmPassword && (
            <span className={styles.error}>{errors.confirmPassword}</span>
          )}
                </div>
                <p>Your password must be at least 8 characters long,
                    contain a mix of upper and lower case letters,
                     a number,and a special character.</p>
                     <div>
                        <input type="checkbox" onChange={handleChange} />I agree to the Terms of Service and Privacy Policy
                     </div>
                     <button type="submit">Create Account</button>
            </form>
        </div>
        </>
    );
}
export default ComunityForm;
import { useState } from "react";
import styles from "./JobApplication.module.css";
function JobApplication(){

    let[formData,setFormData]=useState({
        first:"",
        last:"",
        email:"",
        position:"",
        date:"",
        resume:"",
        myresume:"",
        firstname:"",
        lastname:"",
        refemail:"",

    })

    function handleSubmit(event){
        event.preventDefault();

    }

    return(
        <>
        <div className={styles.container}>
            <h1>Job Application Form </h1>
            <h4>Thank you for your interest in working with us.
                Please check below for available job opportunities that meet your criteria and send your application by filling out the job Application Form</h4>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                  <p>Name
                    <input type="text" name="first" placeholder="First" required onChange={handleChange} />
                    <input type="text" name="last"  placeholder="Last" required onChange={handleChange} />                
                  </p>
                  
                </div>
                <div>
                    Email<input type="email" name="email" placeholder="Enter email"  required onChange={handleChange} />
                </div>
                <div>
                    What position are you applying for ? <select name="position" onChange={handleChange}>
                        <option>-Select-</option>
                        <option>MERN Developer</option>
                        <option>MEAN Developer</option>
                        <option>JAVA Developer</option>
                        <option>Python Developer</option>
                        <option>IOS Developer</option>
                        <option>Android Developer</option>

                    </select>
                </div>
                <div>
                    Available Date:<input type="date" name="date"   placeholder="MM/DD/YYYY" onChange={handleChange} />
                </div>
                <div>
                    What is your current employee status ? 
                    <input type="radio" name="employee" />
                    <input type="radio" name="selfemployed" />
                    <input type="radio" name="unemployed" />
                    <input type="radio" name="student" />
                </div>
                <div>
                    Please provide your resume link:<input type="url" name="resume" onChange={handleChange} />

                </div>
                <div>
                <input type="file" name="myresume" accept=".pdf,.doc,.docx" onChange={handleChange} />
                </div>
                <div>
                    Do you havve referances ? (optional)<input type="text" name="firstname" />
                    <input type="text" name="lastname" />
                </div>
                <div>
                    References email<input type="email" name="refemail" required />
                </div>
                <div>
                    <button type="reset">Reset</button>
                    <button type="submit">Apply</button>
                </div>

            </form>
        </div>
        </>
    );
}

export default JobApplication;
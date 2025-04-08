import { useState } from "react";
import styles from "./JobApplication.module.css";
function JobApplication(){

    let[formData,setFormData]=useState({

        first:"",
        last:"",
        email:"",
        position:"",
        date:"",
        employeestatus:"",
        resume:"",
        myresume:null,
        firstname:"",
        lastname:"",
        refemail:"",

    });

    function handleChange(event){

        const { name, value, type, files } = event.target;

        setFormData((prev) => ({
          ...prev,
          [name]: type === "file" ? files[0] : value,
        }));

    }


    function handleSubmit(event){
        event.preventDefault();

        let existinguser;

        if(localStorage.getItem("formapp")){
            existinguser=JSON.parse(localStorage.getItem("formapp")) || [] ;
        }

        if(!Array.isArray(existinguser)){
            existinguser=[];
        }

        existinguser.push(formData);

       localStorage.setItem("formapp",JSON.stringify(existinguser));
       alert("data successfully saved to localstorage..!"); 

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
                    <input type="text" name="first" placeholder="First" required value={formData.first} onChange={handleChange} />
                    <input type="text" name="last"  placeholder="Last" required value={formData.last} onChange={handleChange} />                
                  </p>
                  
                </div>
                <div>
                    Email<input type="email" name="email" placeholder="Enter email" value={formData.email}  required onChange={handleChange} />
                </div>
                <div>
                    What position are you applying for ? <select name="position" value={formData.position} onChange={handleChange}>
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
                    Available Date:<input type="date" name="date"   placeholder="MM/DD/YYYY" onChange={handleChange} value={formData.date} />
                </div>
                <div>
                    What is your current employee status ? 
                    <input type="radio" name="employeestatus" onChange={handleChange} value="employee"  checked={formData.employeestatus === "employee"} /> Employee
                    <input type="radio" name="employeestatus" onChange={handleChange} value="selfemployed"  checked={formData.employeestatus === "selfemployed"} /> Self-Employee
                    <input type="radio" name="employeestatus" onChange={handleChange} value="unemployed"  checked={formData.employeestatus === "unemployed"} />UnEmployee
                    <input type="radio" name="employeestatus" onChange={handleChange} value="student"  checked={formData.employeestatus === "student"} />Student
                </div>
                <div>
                    Please provide your resume link:<input type="url" name="resume" onChange={handleChange} value={formData.resume} />

                </div>
                <div>
                <input type="file" name="myresume" accept=".pdf,.doc,.docx" onChange={handleChange}  />
                </div>
                <div>
                    Do you have referances ? (optional)<input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="FirstName" />
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="LastName" />
                </div>
                <div>
                    References email<input type="email" name="refemail" value={formData.refemail} onChange={handleChange}   />
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
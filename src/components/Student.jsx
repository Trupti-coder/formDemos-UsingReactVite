import { useState } from "react";
import styles from './Student.module.css';

function Student(){

    let[firstName,setFirstName]=useState("");
    let[lastName,setLastName]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let[passwordError,setPasswordError]=useState("");
    let[contact,setContact]=useState("");
    let[gender,setGender]=useState("");
    let[role,setRole]=useState("");
    let[subjects,setSubjects]=useState([]);

    function validPassword(password){

        const minLength=8;
        const hasUppercase=/[A-Z]/.test(password);
        const hasNumber=/\d/.test(password);
        const hasSpecialChar=/[!@#$%^&*():"?]/.test(password);

        if(password.length<minLength){
            return "Password must be At Least 8 Character long.";
        }

        if(!hasUppercase){
            return "Password contain must at least one Uppercase letter.";
        }

        if(!hasNumber){
            return "Password contain must at least one Number.";
        }

        if(!hasSpecialChar){
            return "Password contain must at least one Special Character.";
        }
         
    }



    function handlePasswordChange(event){

        const newPassword=event.target.value;
        setPassword(newPassword);
        setPasswordError(validPassword(event.target.value));

    }

    function handleSubjectChange(event){
       
        const { value, checked } = event.target;
        setSubjects(prevSubjects =>
            checked ? [...prevSubjects, value] : prevSubjects.filter(subject => subject !== value)
        );
    }


    function handleSubmit(event){
        event.preventDefault();

        const studentData={

            FirstName:firstName,
            LastName:lastName,
            Email:email,
            Password:password,
            Contact:contact,
            Gender:gender,
            Role:role,
            StudSubjects:subjects
        }

        console.log(studentData);

        let existingUser;
        if(localStorage.getItem("studData")){
            existingUser=JSON.parse(localStorage.getItem("studData"))|| [];
        }

        if(!Array.isArray(existingUser)){
            existingUser=[];

        }

        existingUser.push(studentData);

        localStorage.setItem("studData",JSON.parse(existingUser));
        alert("Registration Successful !")

    }

    

    return(
        <>
        <div className={styles.container}>
        <h3 className={styles.title}>Advance Form In React</h3>
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                FirstName:<input type="text" name="firstname" required onChange={(event)=>setFirstName(event.target.value)} />
            </div>
            <div className={styles.formGroup}>
               LastName:<input type="text" name="lastname" required onChange={(event)=>setLastName(event.target.value)} />
            </div>
            <div className={styles.formGroup}>
                Email:<input type="email" name="email" required  onChange={(event)=>setEmail(event.target.value)}/>            
            </div>
            <div className={styles.formGroup}>
                Password:<input type="password" name="password" required onChange={handlePasswordChange} />
            </div>
            <div className={styles.formGroup}>
                Contact:<input type="tel" name="contact" required  onChange={(event)=>setContact(event.target.value)}/>
            </div>
            <div className={styles.formGroup}>
                Gender:<input type="radio" name="gender" value="male" onChange={(event)=>setGender(event.target.value)} />Male
                <input type="radio" name="gender" value="female" onChange={(event)=>setGender(event.target.value)} />Female
                <input type="radio" name="gender" value="other" onChange={(event)=>setGender(event.target.value)} />Other
             </div>
             <div className={styles.formGroup}>
               Your Best Subject:
               <input type="checkbox" name="subject"  value="English" onChange={handleSubjectChange} />Mathematics
               <input type="checkbox" name="subject" value="Physic" onChange={handleSubjectChange} />Physics
               <input type="checkbox" name="subject" value="Chemistry" onChange={handleSubjectChange} />Chemistry
                
             </div>
             <div>
            <label for="github-url">GitHub-Url <span style={{color: "red"}}>*</span>:</label>
            <input type="url" id="github-url" name="website" pattern="https?://.*" placeholder="Enter a valid URL" required />
            </div> 
            <div className={styles.formGroup}>
                Select Your Choise:
                <select name="role" required onChange={(event)=>setRole(event.target.value)}>
                    <option value="mern">MERN Developer</option>
                    <option value="mean">MEAN Developer</option>
                    <option value="java">JAVA Developer</option>
                    <option value="ios">IOS Developer</option>
                    
                </select>

            </div>
           
            <div className={styles.formGroup}>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>

        </form>
        </div>
        </>
    );
}
export default Student;
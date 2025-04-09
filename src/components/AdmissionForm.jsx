import { useState } from "react";

function AdmissionForm(){

    let[formdata,setFormData]=useState({

        name:"",
        fatherName:"",
        motherName:"",
        date:"",
        gender:"",
        division:"",
        district:"",
        address:"",
        religion:"",
        nationality:"",
        phone:"",
        email:"",
        nidNumber:"",
        bloodGroup:"",
        occupation:"",
        status:"",
        courseName:"",
        declaration:""


    })

    function handleSubmit(event){

        event.preventDefault();

    }
    return(
        <>
      
       <div>
           <form onSubmit={handleSubmit}>
           <h1>COMPLEX ACADEMY</h1>
            <p>Another way to Education</p>
            <h3>EDUCATIONAL & IT TRAINING ACADEMY</h3>
            <h4><b>ADMISSION FORM</b></h4>

            <div>
                Student's Name:<input type="text" name="name" onChange={handleChange}  />
            </div>
            <div>
                Father Name:<input type="text" name="fatherName" onChange={handleChange} />
            </div>
            <div>
                Mother Name:<input type="text" name="motherName" onChange={handleChange} />
            </div>  
            <div>
                Birth Date:<input type="date" name="date" onChange={handleChange} />
            </div>
            <div>
                Gender:<input type="radio" name="gender" onChange={handleChange} />Male
                <input type="radio" name="gender" onChange={handleChange} />Female
                <input type="radio" name="gender" onChange={handleChange} />Other

            </div>
            <div>
                <fieldset>
                    <legend>Present Address</legend>
                    Division:<input type="text" name="division" onChange={handleChange} />
                    District:<input type="text" name="district" onChange={handleChange} />
                    Address:<input type="text" name="address" onChange={handleChange} />
                </fieldset>
                
            </div>
            <div>
                <fieldset>
                    <legend>
                        Permanent Address
                    </legend>
                    Division:<input type="text" onChange={handleChange}  />
                    District:<input type="text" onChange={handleChange}/>
                    Address:<input type="text" onChange={handleChange} />
                </fieldset>
            </div>
            <div>
                Religion:<input type="text" name="religion" />
            </div>
            <div>
                Nationality:<input type="text" name="nationality" />
            </div>
            <div>
                Phone Number:<input type="tel" name="phone" />
            </div>
            <div>
                Email Address:<input type="text" name="email" />
            </div>
            <div>
                NID Number:<input type="number" name="nidNumber" />
            </div>
            <div>
                Blood Group:<input type="text" name="bloodGroup" />
            </div>
            <div>
                Occupation:<input type="text" name="occupation" />
            </div>
            <div>
                Status:<input type="radio" name="status" />Single
                <input type="text" name="status" />Married
            </div>
            <div>
                Course Name:<input type="text" name="courseName" />
            </div>
            <div>
                <h3>Declaration</h3>
                <input type="checkbox" name="declaration" />I hereby declairing that i will obey all the rules and regulation of the institution and be
                and fully responsible for violating the rules.
            </div>
            <div>
                <button type="Submit">Submit</button>
            </div>
           </form>


        </div>
      

        </>
    );
}
export default AdmissionForm;
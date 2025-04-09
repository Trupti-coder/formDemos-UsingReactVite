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
        permanentDivision:"",
        permanentDistrict:"",
        permanentAddress:"",
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


    });



    function handleChange(event){

        const {name,value,type,checked}=event.target;

        setFormData((prev)=>({
            ...prev,
            [name]:type==="checkbox"?checked:value,
        
        }));


        
    }



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
                Student's Name:<input type="text" name="name" value={formdata.name} onChange={handleChange}  />
            </div>
            <div>
                Father Name:<input type="text" name="fatherName" value={formdata.fatherName} onChange={handleChange} />
            </div>
            <div>
                Mother Name:<input type="text" name="motherName" value={formdata.motherName} onChange={handleChange} />
            </div>  
            <div>
                Birth Date:<input type="date" name="date" value={formdata.date} onChange={handleChange} />
            </div>
            <div>
                Gender:<input type="radio" name="gender" value="Male" checked={formdata.gender==="Male"} onChange={handleChange} />Male
                <input type="radio" name="gender" value="Female" checked={formdata.gender==="Female"} onChange={handleChange} />Female
                <input type="radio" name="gender" value="Other" checked={formdata.gender==="other"} onChange={handleChange} />Other

            </div>
            <div>
                <fieldset>
                    <legend>Present Address</legend>
                    Division:<input type="text" name="division" value={formdata.division} onChange={handleChange} />
                    District:<input type="text" name="district" value={formdata.district} onChange={handleChange} />
                    Address:<input type="text" name="address" value={formdata.address} onChange={handleChange} />
                </fieldset>
                
            </div>
            <div>
                <fieldset>
                    <legend>
                        Permanent Address
                    </legend>
                    Division:<input type="text" name="permanentDivision" value={formdata.permanentDivision} onChange={handleChange}  />
                    District:<input type="text" name="permanentDistrict" value={formdata.permanentDistrict} onChange={handleChange}/>
                    Address:<input type="text" name="permanentAddress" value={formdata.permanentAddress} onChange={handleChange} />
                </fieldset>
            </div>
            <div>
                Religion:<input type="text" name="religion" value={formdata.religion} onChange={handleChange} />
            </div>
            <div>
                Nationality:<input type="text" name="nationality" value={formdata.nationality} onChange={handleChange} />
            </div>
            <div>
                Phone Number:<input type="tel" name="phone" value={formdata.phone} onChange={handleChange} />
            </div>
            <div>
                Email Address:<input type="text" name="email"onChange={handleChange} />
            </div>
            <div>
                NID Number:<input type="number" name="nidNumber" onChange={handleChange} />
            </div>
            <div>
                Blood Group:<input type="text" name="bloodGroup" onChange={handleChange} />
            </div>
            <div>
                Occupation:<input type="text" name="occupation" onChange={handleChange} />
            </div>
            <div>
                Status:<input type="radio" name="status" onChange={handleChange}/>Single
                <input type="text" name="status" onChange={handleChange} />Married
            </div>
            <div>
                Course Name:<input type="text" name="courseName" onChange={handleChange} />
            </div>
            <div>
                <h3>Declaration</h3>
                <input type="checkbox" name="declaration" onChange={handleChange}/>I hereby declairing that i will obey all the rules and regulation of the institution and be
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
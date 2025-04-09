function AdmissionForm(){
    return(
        <>
      
       <div>
           <form>
           <h1>COMPLEX ACADEMY</h1>
            <p>Another way to Education</p>
            <h3>EDUCATIONAL & IT TRAINING ACADEMY</h3>
            <h4><b>ADMISSION FORM</b></h4>

            <div>
                Student's Name:<input type="text" name="name" />
            </div>
            <div>
                Father Name:<input type="text" name="fatherName" />
            </div>
            <div>
                Mother Name:<input type="text" name="motherName" />
            </div>
            <div>
                Birth Date:<input type="date" name="date" />
            </div>
            <div>
                Gender:<input type="radio" name="gender" />Male
                <input type="radio" name="gender" />Female
                <input type="radio" name="gender" />Other

            </div>
            <div>
                <fieldset>
                    <legend>Present Address</legend>
                    Division:<input type="text" name="division" />
                    District:<input type="text" name="district" />
                    Address:<input type="text" name="address" />
                </fieldset>
                
            </div>
            <div>
                <fieldset>
                    <legend>
                        Permanent Address
                    </legend>
                    Division:<input type="text"  />
                    District:<input type="text" />
                    Address:<input type="text" />
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
                
            </div>
           </form>


        </div>
      

        </>
    );
}
export default AdmissionForm;
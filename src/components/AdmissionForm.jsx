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
                
            </div>
           </form>


        </div>
      

        </>
    );
}
export default AdmissionForm;
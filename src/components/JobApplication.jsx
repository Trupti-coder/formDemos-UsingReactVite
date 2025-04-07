function JobApplication(){
    return(
        <>
        <div>
            <h1>Job Application Form </h1>
            <h4>Thank you for your interest in working with us.
                Please check below for available job opportunities that meet your criteria and send your application by filling out the job Application Form</h4>
            <form>
                <div>
                  <p>Name
                    <input type="text" name="first" placeholder="First" required />
                    <input type="text" name="last"  placeholder="Last" required />                
                  </p>
                  
                </div>
                <div>
                    Email<input type="email" name="email" placeholder="Enter email"  required/>
                </div>

            </form>
        </div>
        </>
    );
}

export default JobApplication;
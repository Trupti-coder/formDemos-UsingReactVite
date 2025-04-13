function ComunityForm(){
    return(
        <>
        <div>
            <h1>Sign Up</h1>
            <p>Join our community</p>
            <form>
                <div>
                 First Name:<input type="text" placeholder="Enter your first Name" />
                </div>
                <div>
                    Last Name:<input type="text" placeholder="Enter your Last Name" />
                </div>
                <div>
                    Email Address:<input type="email" />
                </div>
                <div>
                    Phone Number:<input type="tel" />
                </div>
            </form>
        </div>
        </>
    );
}
export default ComunityForm;
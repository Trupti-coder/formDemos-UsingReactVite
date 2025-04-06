function BillingForm(){
    return(
        <>
        <div>
            <form>
                <div>
                    FirstName:<input type="text" name="firstname" required />
                </div>
                <div>
                    LastName:<input type="text" name="lastname" required />                
                </div>
                <div>
                    UserName:<input type="text" name="username" required />
                </div>
                <div>
                    Email:<input type="email" name="email" required />
                </div>
            </form>

        </div>

        </>
    );
}
export default BillingForm;
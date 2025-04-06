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
            </form>

        </div>

        </>
    );
}
export default BillingForm;
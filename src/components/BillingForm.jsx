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
                <div>
                   Address:<input type="text" name="address" required />
                </div>
                <div>
                 Country:<select>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>America</option>
                    <option>Newzaland</option>
                    <option>Canada</option>
                    <option>Bangladesh</option>
                    <option>Shrilanka</option>
                 </select>
                </div>
                <div>
                 State:<select>
                    <option>Maharastra</option>
                    <option>Gujrat</option>
                    <option>Rajasthan</option>
                    <option>Tamilnadu</option>
                    <option>Karnataka</option>
                    <option>Asam</option>
                 </select>
                </div>
            </form>

        </div>

        </>
    );
}
export default BillingForm;
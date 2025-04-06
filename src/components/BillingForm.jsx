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
                <div>
                    Zip-Code:<input type="text" name="zip" pattern="[0-9]{5}" maxLength={5} required />
                </div>
                <div>
                    <input type="checkbox" name="shippingAdd" />Shipping address is same as my Billing Address 
                </div>
                <div>
                    <input type="checkbox" name="info" required />Save this information for next time
                </div>
                <hr></hr>
                <h3>Payment</h3>
                <div>
                    <input type="checkbox" required />Credit card
                    <input type="checkbox" required />Debit card
                    <input type="checkbox" required />PayPal
                </div>
            </form>

        </div>

        </>
    );
}
export default BillingForm;
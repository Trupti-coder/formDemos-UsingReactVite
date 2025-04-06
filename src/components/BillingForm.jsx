import { useState } from "react";

function BillingForm(){

    let[formData,setFormData]=useState({

        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        address:"",
        country:"",
        state:"",
        zip:"",
        shippingAdd:"",
        info:"",
        paymentMethod:"",
        cardName:"",
        expDate:"",
        cvv:""



    });

    function handleSubmit(){

    }
    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    FirstName:<input type="text" name="firstName" required  onChange={handleChange}/>
                </div>
                <div>
                    LastName:<input type="text" name="lastName" required onChange={handleChange} />                
                </div>
                <div>
                    UserName:<input type="text" name="userName" required onChange={handleChange} />
                </div>
                <div>
                    Email:<input type="email" name="email" required onChange={handleChange} />
                </div>
                <div>
                   Address:<input type="text" name="address" required onChange={handleChange} />
                </div>
                <div>
                 Country:<select name="country">
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
                 State:<select name="state">
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
                    <input type="checkbox" required name="paymentMethod" />Credit card
                    <input type="checkbox" required name="paymentMethod" />Debit card
                    <input type="checkbox" required name="paymentMethod" />PayPal
                </div>
                <div>
                 Name on Card:<input type="text" name="cardName" />
                 Credit card number:<input type="text" name="credit-card" pattern="[0-9]{13,19}" maxLength={19} />
                </div>
                <div>
                    Expiration:<input type="month" name="expDate" required></input>
                </div>
                <div>
                    CVV:<input type="text" name="cvv" pattern="[0-9]{3,4} " maxLength={4} />
                </div>
                <div>
                    <button type="submit">Continue to checkout</button>
                </div>
            </form>

        </div>

        </>
    );
}
export default BillingForm;
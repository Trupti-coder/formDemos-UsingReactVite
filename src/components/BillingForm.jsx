import { useState } from "react";
import styles from "./BillingForm.module.css";

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

    function handleChange(event){
        const {name,value,type,checked}=event.target;
        setFormData((prev)=>({
            ...prev,
            [name]:type==="checkbox" ? checked:value
        }));


    }

    function handleSubmit(event){
        event.preventdefault();


        let existingUser;

        if(localStorage.getItem("billingData")){
            existingUser=JSON.parse(localStorage.getItem("billingData"))||[];
        }

        if(!Array.isArray(existingUser)){
            existingUser=[];
        }

        existingUser.push(formData);

        localStorage.setItem("billingData",JSON.stringify(existingUser));

        alert("Billing info saved to localStorage..");

        //Optional:Reset form

        setFormData({
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
            cardNumber:"",
            expDate:"",
            cvv:""
        });


    }
    return(
        <>
        <div className={styles.container }>
            <h3>Billing Form In React</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    FirstName:<input type="text" name="firstName" required  value={formData.firstName} onChange={handleChange} className={styles.input} placeholder="Enter FirstName" />
                </div>
                <div>
                    LastName:<input type="text" name="lastName" required  value={formData.lastName} onChange={handleChange} className={styles.input} placeholder="Enter lastname" />                
                </div>
                <div>
                    UserName:<input type="text" name="userName" required value={formData.userName} onChange={handleChange} className={styles.input} placeholder="Enter UserName" />
                </div>
                <div>
                    Email:<input type="email" name="email" required value={formData.email} onChange={handleChange} className={styles.input} placeholder="Enter Email" />
                </div>
                <div>
                   Address:<input type="text" name="address" required  value={formData.address} onChange={handleChange} className={styles.input} placeholder="Enter Address" />
                </div>
                <div>
                 Country:<select name="country" value={formData.country} onChange={handleChange}>
                    <option value="">Select Country</option>
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
                 State:<select name="state" value={formData.state} onChange={handleChange}>
                    <option value="">Select State</option>
                    <option>Maharastra</option>
                    <option>Gujrat</option>
                    <option>Rajasthan</option>
                    <option>Tamilnadu</option>
                    <option>Karnataka</option>
                    <option>Asam</option>
                 </select>
                </div>
                <div>
                    Zip-Code:<input type="text" name="zip" pattern="[0-9]{5}" maxLength={5} required value={formData.zip} onChange={handleChange} placeholder="Enter Zip-Code" />
                </div>
                <div>
                    <input type="checkbox" name="shippingAdd" checked={formData.shippingAdd} />Shipping address is same as my Billing Address 
                </div>
                <div>
                    <input type="checkbox" name="info" required checked={formData.info} onChange={handleChange} />Save this information for next time
                </div>
                <hr></hr>
                <h3>Payment</h3>
                <div className={styles.checkboxWrapper} >
                    <input type="checkbox" required name="paymentMethod" checked={formData.paymentMethod==="Credit card"}  onChange={handleChange} />Credit card
                    <input type="checkbox" required name="paymentMethod" onChange={handleChange} checked={formData.paymentMethod==="Debit card"}  />Debit card
                    <input type="checkbox" required name="paymentMethod" onChange={handleChange} checked={formData.paymentMethod==="PayPal"} />PayPal
                </div>
                <div>
                 Name on Card:<input type="text" name="cardName"  onChange={handleChange} />
                 Credit card number:<input type="text" name="credit-card" pattern="[0-9]{13,19}" maxLength={19} onChange={handleChange} className={styles.input} />
                </div>
                <div>
                    Expiration:<input type="month" name="expDate" required onChange={handleChange} className={styles.input} />
                </div>
                <div>
                    CVV:<input type="text" name="cvv" pattern="[0-9]{3,4} " maxLength={4} onChange={handleChange} className={styles.input} />
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
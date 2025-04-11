import { Link } from "react-router-dom";

function ContactForm(){
    return(
        <>
       <div>
        <h1>Hey,it takes less that 60s</h1>
        <p>Already have an account ? <Link>Log in</Link></p>
        <form>
            <div>
               Your  Name:<input type="text" name="name" />
            </div>
            <div>

            </div>
        </form>
       </div>
        </>
    );
}
export default ContactForm;
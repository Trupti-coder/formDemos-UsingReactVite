import { Link } from "react-router-dom";

function ContactForm(){

    function handleSubmit(event){
        event.preventDefault();

    }
    return(
        <>
       <div>
        <h1>Hey,it takes less that 60s</h1>
        <p>Already have an account ? <Link>Log in</Link></p>
        <form onSubmit={handleSubmit}>
            <div>
               Your  Name:<input type="text" name="name" />
            </div>
            <div>
               Email Address:<input type="email" name="email" />
            </div>
            <div>
                Password:<input type="password" />
            </div>
            <div>
                Repeat Password:<input type="password" />
            </div>
            <div>
                <input type="checkbox" />Check to indicate that you aggree to the Terms of Services and Privacy Policy
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
       </div>
        </>
    );
}
export default ContactForm;
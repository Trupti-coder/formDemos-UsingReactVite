function BasicForm(){
    return(
        <>
        <h2>Basic Form In React</h2>
        <form>
            <div>
                Name:<input type="text" placeholder="Enter Name" />
            </div>
            <div>
                Email:<input type="email" placeholder="Enter email" required />
            </div>
            <div>
                Password:<input type="password" placeholder="Enter password" required />           
             </div>
            
        </form>
        
        </>
    );
}
export default BasicForm;
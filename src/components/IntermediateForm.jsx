function IntermediateForm(){
    return(
        <>
        <div>
            <h3>Intermediate Form</h3>
            <form>
                <div>
                    Name:<input type="text" name="name" required />
                </div>
                <div>
                    City:<input type="text" name="city" />
                </div>
                <div>
                    Email:<input type="email" name="email" required />
                </div>
                <div>
                    Password:<input type="password" name="password" required />
                </div>
            </form>
        </div>
        </>
    );
}
export default IntermediateForm;
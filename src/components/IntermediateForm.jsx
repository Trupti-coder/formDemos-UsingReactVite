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
                    Gender:<select name="gender">
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div>
                    Email:<input type="email" name="email" required />
                </div>
                <div>
                    Password:<input type="password" name="password" required />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
        </>
    );
}
export default IntermediateForm;
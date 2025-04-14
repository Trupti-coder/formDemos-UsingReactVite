function LoginForm(){
    return(
        <>
        <div>
           <form>
            <div>
                Name:<input type="text" />
            </div>
            <div>
                City:<input type="text" />
            </div>
            <div>
                Age:<input type="number" />
            </div>
            <div>
                Email:<input type="email" />
            </div>
            <div>
                Password:<input type="password" />
            </div>
            <button type="submit">Submit</button>
           </form>
        </div>
        </>
    );
}
export default LoginForm
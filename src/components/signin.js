import React from "react";
import './signin.css';

function SignIn(){
    return(
        <div className="signin-form">
            <form>
                <label for = "email">E-mail: &nbsp;</label>
                <input type="email" id = "email" placeholder="Enter your eamil" required/>
                <br/>

                <label for = "password">Password: &nbsp;</label>
                <input type="password" id = "password" placeholder="Enter password" required/>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default SignIn;
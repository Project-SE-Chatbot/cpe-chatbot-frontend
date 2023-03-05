import React from "react";

const LoginPage = (props) => {
    return (
        <div className="login-background">
            <div className="login-container">
                <div className="login-welcome-container">
                    <p style={{fontWeight:"600",fontSize:"36px",color:"#848484",lineHeight:"20px"}}>Welcome to </p>
                    <p style={{fontWeight:"600",fontSize:"48px",color:"#363636",lineHeight:"20px",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>CPE CHATBOT</p>
                    <p style={{fontWeight:"600",fontSize:"24px",color:"#848484",lineHeight:"29px"}}>Log in to access your account</p>
                </div>
                <div className="login-form-container">
                    <p style={{fontWeight:"600",fontSize:"16px",color:"#5B5B5B",lineHeight:"0px",letterSpacing:"0.03em"}}>FOR ADMIN</p>
                    <p style={{fontWeight:"600",fontSize:"32px",color:"#363636",lineHeight:"0px"}}>Login Account</p>
                    <form >
                        <div className="login-form-input-container">
                            <label >Email</label>
                            <input className="login-input_feild" id="email" type="text" />
                            <label >password</label>
                            <input className="login-input_feild" id="password" type="password" />
                        </div>
                        <div className="login-remember-foget-container">
                            <div style={{display:"flex"}}>
                            <input type="radio" value="Remember" name="Remember" /> 
                            <p className="login-rememberme-input-radio">Remember me</p>
                            </div>
                            <button className="login-forgetpassword-button">Forget password</button>
                        </div>
                        <button className="login-login-button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
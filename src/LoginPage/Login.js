import React, { useEffect, useState } from "react";

const LoginPage = (props) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      username,
      password,
    };

    let responseData;
    let url
    // url = "http://localhost:5000/admin/"+username
    url = "10.10.182.145:5000/admin"+username
    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {(responseData = result); setLoading(false)})
      .catch((error) => {
        alert("username or passwor is incorrect");
        console.log(error);
      });
      if(loading == false){
        if(responseData.name === info.username && responseData.password === info.password){
                window.location.href = "/Admin";
                localStorage.setItem('accessToken', 'accessToken');
                localStorage.setItem('username', responseData.name);
                console.log("LoginSusess")
            }else{
                alert("username or passwor is incorrect")
                console.log("LoginFail")
            }
      }
      
  };
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-welcome-container">
          <p
            style={{
              fontWeight: "600",
              fontSize: "36px",
              color: "#848484",
              lineHeight: "20px",
            }}
          >
            Welcome to{" "}
          </p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "48px",
              color: "#363636",
              lineHeight: "20px",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            CPE CHATBOT
          </p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "24px",
              color: "#848484",
              lineHeight: "29px",
            }}
          >
            Log in to access your account
          </p>
        </div>
        <div className="login-form-container">
          <p
            style={{
              fontWeight: "600",
              fontSize: "16px",
              color: "#5B5B5B",
              lineHeight: "0px",
              letterSpacing: "0.03em",
            }}
          >
            FOR ADMIN
          </p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "32px",
              color: "#363636",
              lineHeight: "0px",
            }}
          >
            Login Account
          </p>
          <form>
            <div className="login-form-input-container">
              <label>Email</label>
              <input
                className="login-input_feild"
                id="email"
                type="text"
                onChange={(e) => setUser(e.target.value)}
              />
              <label>password</label>
              <input
                className="login-input_feild"
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div className="login-remember-foget-container">
              <div style={{ display: "flex" }}>
                <input type="radio" value="Remember" name="Remember" />
                <p className="login-rememberme-input-radio">Remember me</p>
              </div>
              <button className="login-forgetpassword-button">
                Forget password
              </button>
            </div> */}
            <button className="login-login-button" onClick={handleSubmit}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

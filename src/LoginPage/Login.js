import React,{useEffect,useState} from "react";

const LoginPage = (props) => {


    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    const urlAdmin = "http://localhost:5000/admin"

    const [AdminList, setAdminList] = useState(null);
    const [dataAdmin, setDataAdmin] = useState(null);


    const [username,setUser] = useState("")
    const [password,setPassword] = useState("")


    useEffect(() => {
        const fetchData = async () => {
    
          await fetch(urlAdmin, requestOptions)
            .then(response => response.json())
            .then(result => { setAdminList(result); setDataAdmin(result) })
            .catch(e => console.log(e))
        }
        fetchData()
      }, [urlAdmin])


    let text = null



    const handleSubmit = (e) =>{
        e.preventDefault()
        const info ={
            username,
            password
        }
        // setUser("")
        // setPassword("")
        AdminList.map(element =>{
            if(element.name == info.username && element.password == info.password){
                window.location.href = "/Admin";
                console.log("LoginSusess")
            }       
        })

        // text
        console.log(info)
        console.log(AdminList)


    }
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
                            <input className="login-input_feild" id="email" type="text" 
                            onChange={e => setUser(e.target.value)}/>
                            <label >password</label>
                            <input className="login-input_feild" id="password" type="password"
                            onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="login-remember-foget-container">
                            <div style={{display:"flex"}}>
                            <input type="radio" value="Remember" name="Remember" /> 
                            <p className="login-rememberme-input-radio">Remember me</p>
                            </div>
                            <button className="login-forgetpassword-button">Forget password</button>
                        </div>
                        <button className="login-login-button" onClick={handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
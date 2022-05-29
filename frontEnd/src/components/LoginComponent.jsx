import {useEffect, useState} from "react";
import ProductService from "../Services/ProductService";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from "react-router-dom";
import UserService from "../Services/UserService";
import AdminService from "../Services/AdminService";

const LoginComponent = () => {

  const [admin, setAdmin] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  var colors = {

    "white": "#ffffff"

  }

  useEffect(() => {
    init();
    }, [])

  const init = () => {
    AdminService.getAllAdmins().then(response => {  
      console.log("", response.data);
      setAdmin(response.data);
    })
    .catch(error => {
      console.log("", error);
    })

  }


  const getInputValue = (e)=>{

    let flag=0;
    for(let i=0;i<admin.length;i++){
        if(userEmail.trim()===admin[i].userEmail.trim() && password.trim()===admin[i].password.trim()){
            alert("Login successfull");
            flag=1;
            navigate("/admin");
        }
    }
    if(flag===1){

    } else {
        alert("Wrong email or password");
    }
           
        
};

  return (

    <div className="container">
      <h3>Login</h3>
      <hr/>
        <div>
          <form >
                <div className="form-inner">
                    <div className="form-group">
                        <label className="mr-5" htmlFor="userEmail">userEmail</label>
                        <input type="text" name="userEmail" id="userEmail" onChange={(e) => setUserEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label className="mr-5" htmlFor="passwordx">password</label>
                        <input type="text" name="passwordx" id="passwordx" onChange={(e) => setPassword(e.target.value) }/>
                    </div>
                    <input className="btn btn-success mr-5" style={{color: "#ffffff"}} value={"Login"} type="submit" name="Login" onClick={getInputValue}/>
                    <Link className="btn btn-danger" to={"/"}>Cancel</Link>
                </div>
            </form>
        </div>
    </div>

    );
}
 
export default LoginComponent;
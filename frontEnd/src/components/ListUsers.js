import {useEffect, useState} from "react";
import ProductService from "../Services/UserService";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import UserService from "../Services/UserService";
import HeaderComponent from '../components/HeaderComponent';

const ListUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    init();
    }, [])

    const init = () => {
        UserService.getAllUsers().then(response => {  
          console.log("Information Of Products", response.data);
          setUsers(response.data);
        })
        .catch(error => {
          console.log("An Error Occured", error);
        })
    
      }



  return (

    <div className="container">
      <HeaderComponent/>
      <h3>User List</h3>
      <hr/>
        <div>
          <table className="table table-bordered table-dark table-hover table-striped">
            <thead className="thead-dark">
            <tr>
              <th>User Name</th>
              <th>User LastName</th>
              <th>User EMail</th>
            </tr>
            </thead>
            <tbody>
            {
              users.map(users => (
                <tr key={users.user_id}>
                  <td>{users.firstName} </td>
                  <td>{users.lastName}</td>
                  <td>{users.userEmail}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
    </div>

    );
}
 
export default ListUsers;
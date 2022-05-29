import {useEffect, useState} from "react";
import ProductService from "../Services/UserService";
import CategoryService from "../Services/CategoryService";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import UserService from "../Services/UserService";
import HeaderComponent from '../components/HeaderComponent';

const ListUsers = () => {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    init();
    }, [])

    const init = () => {
        CategoryService.getAll().then(response => {  
          console.log("Information Of Products", response.data);
          setCategory(response.data);
        })
        .catch(error => {
          console.log("An Error Occured", error);
        })
    
      }


      const deleteCategory = (categoryId) => {

        CategoryService.deleteCategory(categoryId).then(response =>{
          console.log("deleted", response.data);
        }).catch(error => {
          console.log("not deleted. error", error);
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
              <th>Category Name</th>
              <th>Category ID</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
              category.map(category => (
                <tr key={category.cat_id}>
                  <td>{category.cat_name} </td>
                  <td>{category.cat_id}</td>
                  <td>
                  <button className="btn btn-danger ml-4" onClick={() => {
                    deleteCategory(category.cat_id);
                    window.location.reload();
                  }
                  }>Delete</button>
                  </td>
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
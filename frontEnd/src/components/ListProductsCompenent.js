import {useEffect, useState} from "react";
import ProductService from "../Services/ProductService";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import HeaderComponent from '../components/HeaderComponent';

const ListProductsCompenent = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    init();
    }, [])

  const init = () => {
    ProductService.getAll().then(response => {  
      console.log("Information Of Products", response.data);
      setProducts(response.data);
    })
    .catch(error => {
      console.log("An Error Occured", error);
    })

  }



const deleteProductById = (productId) => {

  ProductService.deleteProduct(productId).then(response =>{
    console.log("deleted", response.data);
  }).catch(error => {
    console.log("not deleted. error", error);
  })

}

  return (

    <div className="container">
      <HeaderComponent/>
      <h3>Product List</h3>
      <hr/>
        <div>
          <Link to="/admin/addProduct" className="btn btn-primary mb-2">Add Product</Link>
          <Link to="/admin/addCategory" className="btn btn-success mb-2 ml-4">Add Category</Link>
          <table className="table table-dark table-sm table-hover table-striped table-bordered">
            <thead className="thead-dark">
            <tr>
              <th>Product name</th>
              <th>Product definition</th>
              <th>Product category</th>
              <th>Product price</th>
              <th>image</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
              products.map(products => (
                <tr key={products.productId}>
                  <td>{products.productName} </td>
                  <td>{products.productDefinition}</td>
                  <td>{products.category.cat_name}</td>
                  <td>{products.price}₺</td>
                  <td className="imageTd"><img className="productImage" src={products.image} alt=""/></td> 
                  <td>
                  <Link to={`/admin/updateProduct/${products.productId}`} className="btn btn-warning ml-4">Update Product</Link>
                  <button className="btn btn-danger ml-4" onClick={() => {
                    deleteProductById(products.productId);
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
 
export default ListProductsCompenent;